@extends('layoutsTableau.app')

@section('content')
<div id="container-home">
    <div class="row">
        <div class="col-sm d-flex align-items-strech">
            <div class="card w-100">
                <div class="card-body" id="card">
                    <script type="module" src="https://us-east-1.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>
                    <tableau-viz id="tableau-viz" src="{{ $vizUrl }}" token="{{ $token }}" hide-tabs toolbar="bottom">
                    <viz-filter field="#AreaName" value="ASM JATENG 2"/>
                    </tableau-viz>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
