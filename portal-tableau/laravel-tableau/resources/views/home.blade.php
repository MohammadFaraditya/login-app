@extends('layoutsTableau.app')

@section('content')
<div id="container-home">
    <div class="row">
        <div class="col-sm d-flex align-items-stretch">
            <div class="card w-100">
                <div class="card-body" id="card">
                    <script type="module" src="{{ asset('js/tableau.js') }}"></script>
                    <tableau-viz id="tableau-viz" src="{{ $vizUrl }}" token="{{ $token }}" hide-tabs toolbar="bottom">
                        @isset($fieldFilter)
                            <viz-filter field="{{ $fieldFilter }}" value="{{ $jabatan }}" />
                        @endisset
                    </tableau-viz>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
