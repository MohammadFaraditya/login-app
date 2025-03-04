@extends('layoutsDashboard.app')

@section('content')
<div class="container-fluid">
    <div class="row ">
        <div class="col-sm d-flex align-items-strech">
            <div class="card w-100">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-10">
                        <div class="container-lg">
                            <div class="table-responsive overflow-auto">
                                <div class="table-wrapper">
                                    <div class="table-title mb-4">
                                        <div class="row align-items-center mb-4">
                                            <div class="col d-flex align-items-center">
                                                <h2 class="me-3 mb-0">Daftar Sheet</h2>
                                                <a href="{{ route('ShowFormAddSheet') }}">
                                                    <button type="button" class="btn btn-info add-new">
                                                        <i class="fa fa-plus"></i> Add New
                                                    </button>
                                                </a>
                                            </div>
                                            <div class="col-auto ms-auto">
                                                {{-- Search Form --}}
                                                <form method="GET" action="{{ route('ShowDashoardSheet') }}" class="d-flex">
                                                    <input type="search" name="search" id="search-focus"
                                                        class="form-control me-2" style="width: 50%;"
                                                        placeholder="Search " value="{{ request()->get('search') }}">
                                                    <button type="submit" class="btn btn-primary me-2">Search</button>
                                                    @if (request()->has('search') && request()->get('search') !== '')
                                                    <a href="{{ route('ShowDashoardSheet') }}"
                                                        class="btn btn-secondary">Reset</a>
                                                    @endif
                                                </form>
                                            </div>
                                        </div>

                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Nama Dashboard</th>
                                                    <th>Nama Sheet</th>
                                                    <th>Nama Sheet Tableau</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @forelse ($sheet as $sheetItem)
                                                @foreach ($permission as $permissionItem)
                                                @if($permissionItem->id == $sheetItem->permission_id)
                                                <tr>
                                                    <td>{{ $permissionItem->name }}</td>
                                                    <td>{{ $sheetItem->name }}</td>
                                                    <td>{{ $sheetItem->sheetName }}</td>
                                                    <td>
                                                        <a href="{{route( 'ShowFormEditSheet', $sheetItem->idsheet)}}" class="btn btn-warning">
                                                            Edit
                                                        </a>
                                                        <form action="{{route('deleteSheet', $sheetItem->idsheet)}}" method="POST" style="display:inline;">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit" class="btn btn-danger">Delete</button>
                                                        </form>
                                                    </td>
                                                </tr>
                                                @endif
                                                @endforeach
                                                @empty
                                                <tr>
                                                    <td colspan="3">No sheets found</td>
                                                </tr>
                                                @endforelse
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
