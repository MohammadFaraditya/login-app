@extends('layoutsDashboard.app')

@section('content')
    <div class="container-lg">
        <div class="table-responsive" style="overflow: hidden;">
            <div class="table-wrapper">
                <div class="table-title mb-4">
                    <div class="row align-items-center mb-4">
                        <div class="col d-flex align-items-center">
                            <iframe src="{{ $dashboardUrl }}?token={{ $authToken }}" width="100%" height="100%"
                                style="border: none;">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
