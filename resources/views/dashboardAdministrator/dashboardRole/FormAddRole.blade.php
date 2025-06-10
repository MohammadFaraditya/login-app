@extends('layoutsDashboard.app')

@section('content')
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title fw-semibold mb-4">Add Role</h5>
                <div class="card">
                    <div class="card-body">
                        <form action="{{route('addRole')}}" method="POST">
                            @csrf
                            <div class="mb-3">
                                <label for="roleName" class="form-label">Name</label>
                                <input type="text" class="form-control" id="roleName" name="roleName">
                                @error('roleName')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label for="roleAccess" class="form-label">Role</label>
                                <select name="roleAccess[]" id="roleAccess" class="form-control" multiple>
                                    @foreach ($permission as $permissions)
                                        <option value="{{ $permissions->name }}">{{ $permissions->name }}</option>
                                    @endforeach
                                </select>
                                @error('roleAccess')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button class="border-0">
                                <a href="{{route('ShowDashboardRole')}}" class="btn btn-danger border-0">cancel</a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @if (session('error'))
        <script>
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "{{ session('error') }}",
            });
        </script>
    @endif

    {{-- Alert success logout --}}
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
