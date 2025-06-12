@extends('layoutsTableau.app')

@section('content')
<div class="container-fluid p-0 min-vh-100" id="container-home">
    <div class="card" id="fullscreen-card" style="margin: 0; padding: 0; border: none;">
        <div class="card-body p-0 m-0">
            <div id="tableau-wrapper" class="position-relative w-100">
                <script type="module" src="{{ asset('js/tableau.js') }}"></script>
                <tableau-viz
                    id="tableau-viz"
                    src="{{ $vizUrl }}"
                    token="{{ $token }}"
                    hide-tabs
                    toolbar="hidden"
                >
                    @isset($fieldFilter)
                        <viz-filter field="{{ $fieldFilter }}" value="{{ $jabatan }}" />
                    @endisset
                </tableau-viz>

                <button id="fullscreenBtn" class="btn btn-primary btn-sm fullscreen-btn">
                    <i class="fas fa-expand"></i> Fullscreen
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
        background: #ffc107;
    }

    #container-home {
        width: 100%;
        min-height: 100vh;
        padding: 0;
        margin: 0 auto;
    }

    .fullscreen-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 9999;
        padding: 0.35rem 0.65rem;
        font-size: 0.9rem;
        border-radius: 4px;
        opacity: 0.7;
        transition: opacity 0.3s;
    }

    .fullscreen-btn:hover {
        opacity: 1;
    }

    /* Override media queries saat fullscreen */
    #fullscreen-card:fullscreen,
    #fullscreen-card:-webkit-full-screen {
        position: fixed !important;
        top: 0;
        left: 0;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 9999 !important;
        background: white !important;
        margin: 0 !important;
        padding: 0 !important;
        border-radius: 0 !important;
        max-width: none !important;
    }

    #fullscreen-card:fullscreen .card-body,
    #fullscreen-card:fullscreen #tableau-wrapper,
    #fullscreen-card:fullscreen tableau-viz {
        width: 100vw !important;
        height: 100vh !important;
        max-width: none !important;
        max-height: none !important;
        margin: 0 !important;
        padding: 0 !important;
        display: block;
    }
</style>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        const fullscreenCard = document.getElementById('fullscreen-card');
        const tableauVizEl = document.getElementById('tableau-viz');
        const wrapper = document.getElementById('tableau-wrapper');
        let viz;

        function forceResize() {
            if (viz?.resize) {
                viz.resize();
            }
            tableauVizEl.style.width = window.innerWidth + 'px';
            tableauVizEl.style.height = window.innerHeight + 'px';
            wrapper.style.width = window.innerWidth + 'px';
            wrapper.style.height = window.innerHeight + 'px';
        }

        tableauVizEl.addEventListener('firstinteractive', function () {
            viz = tableauVizEl.viz;
            setTimeout(forceResize, 400);
        });

        fullscreenBtn.addEventListener('click', function () {
            if (!document.fullscreenElement) {
                fullscreenCard.requestFullscreen?.().then(() => {
                    setTimeout(forceResize, 300);
                    setTimeout(forceResize, 700);
                });
            } else {
                document.exitFullscreen?.();
            }
        });

        function handleFullscreenChange() {
            const isFullscreen = !!document.fullscreenElement;

            fullscreenBtn.innerHTML = isFullscreen
                ? '<i class="fas fa-compress"></i> Exit Fullscreen'
                : '<i class="fas fa-expand"></i> Fullscreen';

            if (!isFullscreen) {
                tableauVizEl.style.width = '100%';
                tableauVizEl.style.height = '85vh';
                wrapper.style.height = 'auto';
                fullscreenCard.style.height = 'auto';
            }

            setTimeout(forceResize, 400);
            setTimeout(forceResize, 700);
        }

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        window.addEventListener('load', () => {
            setTimeout(() => {
                wrapper.style.height = 'auto';
                tableauVizEl.style.height = '85vh';
                forceResize();
            }, 600);
        });

        window.addEventListener('resize', () => {
            forceResize();
        });
    });
</script>
@endsection
