@extends('layoutsDashboard.app')

@section('content')
<div class="container-fluid">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title fw-semibold mb-4">Edit Dashboard</h5>
            <div class="card">
                <div class="card-body">
                    <form action="{{route('EditDashboard', $permissions->id)}}" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label for="DashboardName" class="form-label">Name</label>
                            <input type="text" class="form-control" id="DashboardName" name="DashboardName"
                                value="{{ old('Table Name', $permissions->name) }}">
                            @error('username')
                            <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="DashboardLink" class="form-label">Link</label>
                            <input type="text" class="form-control" id="DashboardLink" name="DashboardLink"
                                value="{{ old('Table Link', $permissions->table) }}">
                            @error('username')
                            <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="FieldRSM" class="form-label">Field RSM</label>
                            <input type="text" class="form-control" id="FieldRSM" name="FieldRSM"
                                value="{{ old('Table Link', $permissions->fieldRSM) }}">
                            @error('FieldRSM')
                            <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="FieldASM" class="form-label">Field ASM</label>
                            <input type="text" class="form-control" id="FieldASM" name="FieldASM"
                                value="{{ old('Table Link', $permissions->fieldASM) }}">
                            @error('FieldASM')
                            <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="FieldSPV" class="form-label">Field SPV</label>
                            <input type="text" class="form-control" id="FieldSPV" name="FieldSPV"
                                value="{{ old('Table Link', $permissions->fieldSPV) }}">
                            @error('FieldSPV')
                            <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>

                        {{-- Submit and Cancel Buttons --}}
                        <button type="submit" class="btn btn-primary">Update</button>
                        <a href="{{ route('daftarDashboard') }}" class="btn btn-danger">Cancel</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

{{-- Error Notification --}}
@if (session('error'))
<script>
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "{{ session('error') }}",
    });
</script>
@endif

{{-- Success Notification --}}
@if (session('success'))
<script>
    Swal.fire({
        title: "{{ session('success') }}",
        icon: "success",
        draggable: true
    });
</script>
@endif
@endsection
