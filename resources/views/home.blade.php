@extends('layoutsTableau.app')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-sm d-flex align-items-strech">
            <div class="card w-100">
                <div class="card-body">
                    <script type="module" src="https://us-east-1.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>
                    <tableau-viz id="tableau-viz" src="{{ $vizUrl }}" token="{{ $token }}" hide-tabs toolbar="bottom">
                    </tableau-viz>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
