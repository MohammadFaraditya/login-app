@extends('layoutsDashboard.app')

@section('content')
<div class="container-fluid">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title fw-semibold mb-4">Add Sheet</h5>
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('AddSheet') }}" method="POST">
                        @csrf

                        <!-- Input Dashboard -->
                        <div class="mb-3">
                            <label for="selectPermission" class="form-label">Dashboard</label>
                            <select name="selectPermission" id="selectRole" class="form-control">
                                @foreach ($permission as $permission)
                                <option value="{{ $permission->id }}">{{ $permission->name }}</option>
                                @endforeach
                            </select>
                            @error('selectPermission')
                            <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>

                        <!-- Sheet Input Section -->
                        <div id="sheet-container">
                            <!-- Initial Sheet Input -->
                            <div class="mb-3 row" id="sheet-1">
                                <div class="col-md-6">
                                    <!-- Nama Sheet Label di atas Input -->
                                    <label for="NamaSheet" class="form-label">Nama Sheet</label>
                                    <input type="text" class="form-control" id="NamaSheet" name="NamaSheet[]">
                                </div>
                                <div class="col-md-6">
                                    <!-- Sheet Tableau Label di atas Input -->
                                    <label for="NamaSheetTableau" class="form-label">Sheet Tableau</label>
                                    <input type="text" class="form-control" id="NamaSheetTableau" name="NamaSheetTableau[]">
                                </div>
                                @error('Sheet')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>

                        <!-- Button for adding a new Sheet -->
                        <div class="mb-3">
                            <button type="button" id="add-sheet-btn" class="btn btn-success">+</button>
                        </div>

                        <!-- Submit and Cancel Buttons -->
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <button class="border-0">
                            <a href="{{ route('ShowDashoardSheet') }}" class="btn btn-danger border-0">Cancel</a>
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

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const addSheetBtn = document.getElementById("add-sheet-btn");
        const sheetContainer = document.getElementById("sheet-container");
        let sheetCount = 1;

        // Fungsi untuk menambah input Sheet
        addSheetBtn.addEventListener("click", function() {
            if (sheetCount < 10) { // batas maksimal jumlah input Sheet
                sheetCount++;
                const newSheetDiv = document.createElement("div");
                newSheetDiv.classList.add("mb-3", "row");
                newSheetDiv.id = "sheet-" + sheetCount;

                newSheetDiv.innerHTML = `
                        <div class="col-md-6">
                            <!-- Nama Sheet Label di atas Input -->
                            <label for="NamaSheet" class="form-label">Nama Sheet</label>
                            <input type="text" class="form-control" id="NamaSheet" name="NamaSheet[]">
                            <button type="button" class="btn btn-danger remove-btn w-25 mt-2">-</button>
                        </div>

                        <div class="col-md-6">
                            <!-- Sheet Tableau Label di atas Input -->
                            <label for="NamaSheetTableau" class="form-label">Sheet Tableau</label>
                            <input type="text" class="form-control" id="NamaSheetTableau" name="NamaSheetTableau[]">
                        </div>
                    `;
                sheetContainer.appendChild(newSheetDiv);
            }
        });

        // Fungsi untuk menghapus input Sheet
        sheetContainer.addEventListener("click", function(e) {
            if (e.target && e.target.classList.contains("remove-btn")) {
                const sheetDiv = e.target.closest("div.mb-3");
                if (sheetCount > 1) { // Pastikan minimal 1 input
                    sheetDiv.remove();
                    sheetCount--;
                }
            }
        });

        // Tampilkan atau sembunyikan tombol remove
        sheetContainer.addEventListener("input", function() {
            const removeBtns = document.querySelectorAll(".remove-btn");
            removeBtns.forEach(function(btn, index) {
                // Menyembunyikan tombol - jika hanya 1 input
                if (sheetCount > 1) {
                    btn.style.display = "inline-block";
                } else {
                    btn.style.display = "none";
                }
            });
        });
    });
</script>
@endsection
