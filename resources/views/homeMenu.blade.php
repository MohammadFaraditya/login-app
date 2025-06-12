<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Dashboard')</title>
    <link rel="shortcut icon" type="image/png" href="{{ asset('assets/images/logos/favicon.png') }}" />
    <link rel="stylesheet" href="{{ asset('css/styles.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/card.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/styleTable.min.css') }}" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>
    <div class="page-wrapper show-sidebar" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6"
        data-sidebartype="full" data-sidebar-position="fixed">
        <!-- Main wrapper -->
        <div class="body-wrapper">
            <header class="app-header">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                        <li class="nav-item dropdown">
                            <a class="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="{{ asset('images/profile/Logo_Asiatop.jpg') }}" alt="" width="35" height="35"
                                    class="rounded-circle">
                            </a>
                            <div class="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                                <div class="message-body">
                                    <a href="javascript:void(0)" class="d-flex align-items-center gap-2 dropdown-item">
                                        <i class="ti ti-user fs-6"></i>
                                        <p class="mb-0 fs-3">{{ Auth::user()->username }}</p>
                                        <p class="mb-0 fs-3">{{ Auth::user()->jabatan }}</p>
                                    </a>
                                    <a href="{{ route('logoutProcess') }}"
                                        class="btn btn-outline-primary mx-3 mt-2 d-block shadow-none">Logout</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
            <div class="container-fluid p-0 min-vh-100" id="container-home">
                <div class="card" id="fullscreen-card" style="margin: 0; padding: 0; border: none;">
                    <div class="card-body p-4 m-0">
                        <div id="tableau-wrapper" class="position-relative w-100">
                            <div class="container">
                                <div class="row ">
                                    @foreach ($permissionsLink as $menu)
                                    <div class="col-xl-6 col-lg-6">
                                        <a href=""><div class="card bs-light:#e7ecf0">
                                            <div class="card-statistic-3 p-4">
                                                <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div>
                                                <div class="mb-4">
                                                    <h5 class="card-title mb-0"></h5>
                                                </div>
                                                <div class="row align-items-center mb-2 d-flex">
                                                    <div class="col-8">
                                                        <h2 class="d-flex align-items-center mb-0 hover-grow">
                                                            {{$menu->name}}
                                                        </h2>
                                                    </div>

                                                    <div class="col-4 text-right">
                                                    </div>
                                                </div>
                                            </div>
                                        </div></a>
                                    </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer id="sticky-footer" class="flex-shrink-0 py-2 bg-dark text-white-50">
            <div class="container text-center">
                <small>Copyright by ast</small>
            </div>
        </footer>
    </div>

    <script src="{{ asset('libs/bootstrap/dist/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('libs/jquery/dist/jquery.min.js') }}"></script>
    <script src="{{ asset('js/sidebarmenu.js') }}"></script>
    <script src="{{ asset('js/app.min.js') }}"></script>
    <script src="{{ asset('libs/apexcharts/dist/apexcharts.min.js') }}"></script>
    <script src="{{ asset('libs/simplebar/dist/simplebar.js') }}"></script>
    <script src="{{ asset('js/dashboard.js') }}"></script>
</body>

</html>
