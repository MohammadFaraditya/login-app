@extends('layoutsTableau.app')

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
                            <label for="DashboardLink" class="form-label">Name</label>
                            <input type="text" class="form-control" id="DashboardLink" name="DashboardLink"
                                value="{{ old('Table Link', $permissions->table) }}">
                            @error('username')
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
