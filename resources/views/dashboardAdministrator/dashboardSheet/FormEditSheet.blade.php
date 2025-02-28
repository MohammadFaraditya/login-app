@extends('layoutsDashboard.app')

@section('content')
<div class="container-fluid">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title fw-semibold mb-4">Edit Sheet</h5>
            <div class="card">
                <div class="card-body">
                    <form action="{{route('EditSheet', $sheet->idsheet)}}" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label for="selectPermission" class="form-label">Dashboard</label>
                            <select name="selectPermission" id="selectRole" class="form-control">
                                <option value="{{ $permissionid->id }}">{{ $permissionid->name }}</option>
                                @foreach ($permission as $permission)
                                <option value="{{ $permission->id }}">{{ $permission->name }}</option>
                                @endforeach
                            </select>
                            @error('selectPermission')
                            <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="namaSheet" class="form-label">Nama Sheet</label>
                            <input type="text" class="form-control" id="namaSheet" name="namaSheet" value="{{$sheet->name}}">
                            @error('namaSheet')
                            <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="SheetTableau" class="form-label">Nama Sheet</label>
                            <input type="text" class="form-control" id="SheetTableau" name="SheetTableau"
                                value="{{$sheet->sheetName}}">
                            @error('SheetTableau')
                            <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>

                        {{-- Submit and Cancel Buttons --}}
                        <button type="submit" class="btn btn-primary">Update</button>
                        <a href="{{route('ShowDashoardSheet')}}" class="btn btn-danger">Cancel</a>
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
