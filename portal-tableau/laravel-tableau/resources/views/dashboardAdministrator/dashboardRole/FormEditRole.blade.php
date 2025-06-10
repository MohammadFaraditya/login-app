@extends('layoutsDashboard.app')

@section('content')
<div class="container-fluid">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title fw-semibold mb-4">Edit Role</h5>
            <div class="card">
                <div class="card-body">
                    <form action="{{route('EditRole', $role->id)}}" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label for="roleName" class="form-label">Nama Role</label>
                            <input type="text" class="form-control" id="roleName" name="roleName" value="{{$role->name}}">
                            @error('roleName')
                            <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="roleAccess" class="form-label">Role</label>
                            <select name="roleAccess[]" id="roleAccess" class="form-control" multiple>
                                @foreach ($permissions as $permission) <!-- Menampilkan semua permissions -->
                                <option value="{{ $permission->name }}"
                                    {{ in_array($permission->name, $role->permissions->pluck('name')->toArray()) ? 'selected' : '' }}>
                                    {{ $permission->name }}
                                </option>
                                @endforeach
                            </select>
                            @error('selectRole')
                            <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>

                        {{-- Submit and Cancel Buttons --}}
                        <button type="submit" class="btn btn-primary">Update</button>
                        <a href="{{route('ShowDashboardRole')}}" class="btn btn-danger">Cancel</a>
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
