document.addEventListener('DOMContentLoaded', function () {
    const addNewBtn = document.querySelector('.add-new'); // Tombol "Add New"
    const newUserForm = document.getElementById('newUserForm'); // Form yang baru ditambahkan
    const cancelBtn = document.getElementById('cancelBtn'); // Tombol "Cancel"

    // Menampilkan form ketika tombol "Add New" diklik
    addNewBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Menghindari pengalihan halaman
        newUserForm.style.display = 'block'; // Tampilkan form
        addNewBtn.style.display = 'none'; // Sembunyikan tombol "Add New"
    });

    // Menyembunyikan form ketika tombol "Cancel" diklik
    cancelBtn.addEventListener('click', function () {
        newUserForm.style.display = 'none'; // Sembunyikan form
        addNewBtn.style.display = 'inline-block'; // Tampilkan kembali tombol "Add New"
    });

    // Menambahkan event listener pada tombol submit jika ingin menutup form
    newUserForm.querySelector('button[type="submit"]').addEventListener('click', function (e) {
        e.preventDefault(); // Cegah form dari pengiriman
        // Logika form submission di sini, misalnya simpan data, kirim ke server, dll.
        newUserForm.style.display = 'none'; // Sembunyikan form setelah submit
        addNewBtn.style.display = 'inline-block'; // Tampilkan kembali tombol "Add New"
    });
});