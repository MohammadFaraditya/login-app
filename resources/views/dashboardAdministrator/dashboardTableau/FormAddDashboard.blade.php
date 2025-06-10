@extends('layoutsDashboard.app')

@section('content')
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title fw-semibold mb-4">Add Table</h5>
                <div class="card">
                    <div class="card-body">
                        <form action="{{ route('AddDashboard') }}" method="POST">
                            @csrf
                            <div class="mb-3">
                                <label for="nameTable" class="form-label">Dashboard Name</label>
                                <input type="text" class="form-control" id="nameTable" name="nameTable">
                                @error('nameTable')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label for="DashboardLink" class="form-label">Dashboard Link</label>
                                <input type="text" class="form-control" id="DashboardLink" name="DashboardLink">
                                @error('DashboardLink')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label for="FieldRSM" class="form-label">Field RSM</label>
                                <input type="text" class="form-control" id="FieldRSM" name="FieldRSM">
                                @error('FieldRSM')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label for="FieldASM" class="form-label">Field ASM</label>
                                <input type="text" class="form-control" id="FieldASM" name="FieldASM">
                                @error('FieldASM')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label for="FieldSPV" class="form-label">Field SPV</label>
                                <input type="text" class="form-control" id="FieldSPV" name="FieldSPV">
                                @error('FieldSPV')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button class="border-0">
                                <a href="{{ route('daftarDashboard') }}" class="btn btn-danger border-0">cancel</a>
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
