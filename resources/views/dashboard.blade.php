@extends('layoutsDashboard.app')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm d-flex align-items-strech">
                <div class="card w-100">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-10">
                            {{-- Table User --}}
                            <div class="container-lg">
                                <div class="table-responsive" style="overflow: hidden;">
                                    <div class="table-wrapper">
                                        <div class="table-title mb-4">
                                            <div class="row">
                                                <div class="col">
                                                    <h2>Users</h2>
                                                </div>
                                                <div class="col-2">
                                                    <a href="{{ route('ShowFormAddUser') }}"><button type="button"
                                                            class="btn btn-info add-new"><i class="fa fa-plus"></i> Add
                                                            New</button></a>
                                                </div>
                                            </div>
                                            <div class="input-group mb-4">
                                                <div class="form-outline" data-mdb-input-init>
                                                    <input id="search-focus" type="search" id="form1"
                                                        class="form-control" />
                                                </div>
                                                <button type="button" class="btn btn-primary"
                                                    data-mdb-ripple-init>Search</button>
                                            </div>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Role</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @foreach ($users as $user)
                                                        <tr>
                                                            <td>{{ $user->name }}</td>
                                                            <td>{{ $user->email }}</td>
                                                            <td>{{ implode(', ', $user->getRoleNames()->toArray()) }}</td>
                                                            <td>
                                                                <a href="#" class="btn btn-warning a-btn-slide-text">
                                                                    <span class="glyphicon glyphicon-edit"
                                                                        aria-hidden="true"></span>
                                                                    <span><strong>Edit</strong></span>
                                                                </a>
                                                                <a href="#" class="btn btn-danger a-btn-slide-text">
                                                                    <span class="glyphicon glyphicon-remove"
                                                                        aria-hidden="true"></span>
                                                                    <span><strong>Delete</strong></span>
                                                                </a>
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
