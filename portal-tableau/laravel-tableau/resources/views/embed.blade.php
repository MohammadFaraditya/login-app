@extends('layoutsDashboard.app')

@section('content')
    <div class="container-lg">
                            <iframe src="{{ $embedUrl }}?token={{ $authToken }}" width="100%" height="100%"
                                style="border: none;">
                            </iframe>
    </div>
@endsection
