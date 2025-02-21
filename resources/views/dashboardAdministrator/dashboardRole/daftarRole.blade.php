@extends('layoutsDashboard.app')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm d-flex align-items-strech">
                <div class="card w-100">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-10">
                            <div class="container-lg">
                                <div class="table-responsive" style="overflow: hidden;">
                                    <div class="table-wrapper">
                                        <div class="table-title mb-4">
                                            <div class="row align-items-center mb-4">
                                                <div class="col d-flex align-items-center">
                                                    <h2 class="me-3 mb-0">Daftar Role</h2>
                                                    <a href="{{ route('ShowFormAddDashboard') }}">
                                                        <button type="button" class="btn btn-info add-new">
                                                            <i class="fa fa-plus"></i> Add New
                                                        </button>
                                                    </a>
                                                </div>
                                                <div class="col-auto ms-auto">
                                                    <form method="GET" action="{{ route('daftarDashboard') }}" class="d-flex">
                                                        <input type="search" name="search" id="search-focus"
                                                            class="form-control me-2" style="width: 50%;"
                                                            placeholder="Search " value="{{ request()->get('search') }}">
                                                        <button type="submit" class="btn btn-primary me-2">Search</button>
                                                        @if (request()->has('search') && request()->get('search') !== '')
                                                            <a href="{{ route('daftarDashboard') }}"
                                                                class="btn btn-secondary">Reset</a>
                                                        @endif
                                                    </form>
                                                </div>
                                            </div>

                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Nama Role</th>
                                                        <th>Akses</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @foreach ($role as $role)
                                                        <tr>
                                                            <td>{{ $permissions->name }}</td>
                                                            <td>{{ $permissions->table }}</td>
                                                            <td>
                                                                <a href="{{ route('ShowFormEditDashboard', $permissions->id) }}"
                                                                    class="btn btn-warning">
                                                                    Edit
                                                                </a>
                                                                <form action="{{ route('DeleteDashboard', $permissions->id) }}"
                                                                    method="POST" style="display:inline;">
                                                                    @csrf
                                                                    @method('DELETE')
                                                                    <button type="submit"
                                                                        class="btn btn-danger">Delete</button>
                                                                </form>
                                                            </td>
                                                        </tr>
                                                    @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{-- Success and Error Alerts --}}
    @if (session('success'))
        <script>
            Swal.fire({
                title: "{{ session('success') }}",
                icon: "success",
                draggable: true
            });
        </script>
    @endif
    @if (session('error'))
        <script>
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "{{ session('error') }}",
            });
        </script>
    @endif
@endsection
