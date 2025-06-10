@extends('layoutsTableau.app')

@section('content')
<div class="container-fluid p-0 bg-warning h-80%" id="container-home">
    <div class="m-2 bg-dark" style="height: auto;">
        <!-- Ubah div ini menjadi target fullscreen seperti di Kode 1 -->
        <div class="card bg-primary h-80" id="fullscreen-card">
            <div class="card-body">
                <div id="tableau-wrapper" class="position-relative h-100">
                    <script type="module" src="{{ asset('js/tableau.js') }}"></script>
                    <tableau-viz
                        id="tableau-viz"
                        src="{{ $vizUrl }}"
                        token="{{ $token }}"
                        hide-tabs
                        toolbar="hidden"
                        style="width: 100%; height: 100%; display: block;"
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
</div>

<style>
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    #container-home {
        height: 100vh;
        width: 100vw;
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

    /* Gaya fullscreen mengikuti Kode 1 */
    #fullscreen-card:fullscreen,
    #fullscreen-card:-webkit-full-screen {
        position: fixed !important;
        top: 0;
        left: 0;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 9999 !important;
        background: white;
        display: flex;
        flex-direction: column;
        margin: 0 !important;
        padding: 0 !important;
    }

    #fullscreen-card:fullscreen .card-body {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    #fullscreen-card:fullscreen #tableau-wrapper {
        flex: 1;
        width: 100%;
        height: 100%;
    }

    #fullscreen-card:fullscreen tableau-viz {
        width: 100% !important;
        height: 100% !important;
        display: block;
    }
</style>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        const fullscreenCard = document.getElementById('fullscreen-card');
        const tableauVizEl = document.getElementById('tableau-viz');

        let viz;

        // Inisialisasi Tableau Viz
        tableauVizEl.addEventListener('firstinteractive', function() {
            viz = tableauVizEl.viz;
            setTimeout(() => viz.resize(), 300);
        });

        // Handle tombol fullscreen - mengikuti pendekatan Kode 1
        fullscreenBtn.addEventListener('click', function() {
            if (!document.fullscreenElement) {
                // Masuk ke mode fullscreen
                if (fullscreenCard.requestFullscreen) {
                    fullscreenCard.requestFullscreen()
                        .then(() => {
                            setTimeout(() => {
                                if (viz) viz.resize();
                                setTimeout(() => viz.resize(), 500);
                            }, 300);
                        })
                        .catch(err => {
                            console.error('Error attempting to enable fullscreen:', err);
                        });
                } else if (fullscreenCard.webkitRequestFullscreen) {
                    fullscreenCard.webkitRequestFullscreen();
                } else if (fullscreenCard.msRequestFullscreen) {
                    fullscreenCard.msRequestFullscreen();
                }
            } else {
                // Keluar dari mode fullscreen
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        });

        // Handle perubahan status fullscreen
        function handleFullscreenChange() {
            const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

            if (isFullscreen) {
                fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i> Exit Fullscreen';
            } else {
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> Fullscreen';
            }

            if (viz) {
                setTimeout(() => viz.resize(), 300);
                setTimeout(() => viz.resize(), 500);
            }
        }

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);

        // Resize saat halaman selesai dimuat
        window.addEventListener('load', () => {
            setTimeout(() => {
                if (viz) viz.resize();
            }, 500);
        });
    });
</script>
@endsection
