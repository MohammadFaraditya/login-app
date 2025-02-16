@extends('layoutsDashboard.app')

@section('content')
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title fw-semibold mb-4">Edit User</h5>
                <div class="card">
                    <div class="card-body">
                        <form action="" method="POST">
                            @csrf
                            @method('PUT') {{-- Gunakan method PUT untuk update --}}

                            {{-- Input Username --}}
                            <div class="mb-3">
                                <label for="username" class="form-label">Name</label>
                                <input type="text" class="form-control" id="username" name="username"
                                    value="{{ old('username', $user->username) }}"> {{-- Pre-fill data user --}}
                                @error('username')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            {{-- Select Role --}}
                            <div class="mb-3">
                                <label for="selectRole" class="form-label">Role</label>
                                <select name="selectRole[]" id="selectRole" class="form-control" multiple>
                                    @foreach ($role as $roleItem)
                                        <option value="{{ $roleItem->name }}"
                                            {{ in_array($roleItem->name, $user->roles->pluck('name')->toArray()) ? 'selected' : '' }}>
                                            {{ $roleItem->name }}
                                        </option>
                                    @endforeach
                                </select>
                                @error('selectRole')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            {{-- Input Password --}}
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password"
                                    placeholder="Leave blank to keep current password">
                                @error('password')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            {{-- Submit and Cancel Buttons --}}
                            <button type="submit" class="btn btn-primary">Update</button>
                            <a href="{{ route('dashboard') }}" class="btn btn-danger">Cancel</a>
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
