<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>BI</title>
    <link rel="shortcut icon" type="image/png" href="" />
    <link rel="stylesheet" href="{{ asset('css/styles.min.css') }}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>
    <!--  Body Wrapper -->
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed">
        <div
            class="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
            <div class="d-flex align-items-center justify-content-center w-100">
                <div class="row justify-content-center w-100">
                    <div class="col-md-8 col-lg-6 col-xxl-3">
                        <div class="card mb-0">
                            <div class="card-body">
                                <a href="./index.html" class="text-nowrap logo-img text-center d-block py-1 w-100">
                                    <img src="{{ asset('/images/logos/HomeAsiatop.png') }}" width="150"
                                        alt="">
                                </a>
                                <form action="{{ route('loginProcess') }}" method="POST">
                                    @csrf
                                    <div class="mb-3">
                                        <label for="username" class="form-label">Username</label>
                                        <input type="text" class="form-control" id="username" name="username">
                                        @error('username')
                                            <small style="color: red">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-4">
                                        <label for="password" class="form-label">Password</label>
                                        <div class="input-group">
                                            <input type="password" class="form-control" id="password" name="password">
                                            <button class="btn btn-outline-light" type="button" id="togglePassword">
                                                <i class="fas fa-eye" id="togglePassword"></i> <!-- Ikon mata -->
                                            </button>
                                        </div>
                                        @error('password')
                                            <small style="color: red">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <button class="btn btn-primary w-100 fs-4 mb-4 rounded-2">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- Alert failed login --}}
    @if (session('failed'))
        <script>
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "{{ session('failed') }}",
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
    <script src="{{ asset('libs/jquery/dist/jquery.min.js') }}"></script>
    <script src="{{ asset('libs/jquery/dist/jquery.min.js') }}"></script>
    <script src="{{ asset('js/password.js') }}"></script>
</body>

</html>
