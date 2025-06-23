<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Dashboard')</title>
    <link rel="shortcut icon" type="image/png" href="{{ asset('assets/images/logos/favicon.png') }}" />
    <link rel="stylesheet" href="{{ asset('css/styles.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/styleTable.min.css') }}" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <style>
        /* Default untuk container-fluid */
        @media (min-width: 961px) {
            #container-home {
                max-width: 960px;
                margin: 0 auto;
            }

            #card {
                height: 700px;
            }
        }

        @media (min-width: 1141px) {
            #container-home {
                max-width: 1100px;
                margin: 0 auto;
            }
            #card {
                height: 750px;
            }
        }

        /* Ketika layar lebih besar dari 1300px */
        @media (min-width: 1301px) {
            #container-home {
                max-width: 1300px;
                margin: 0 auto;
            }

            #card {
                height: 800px;
            }
        }

        @media (min-width: 1501px) {
            #container-home {
                max-width: 1600px;
                height: 1000px;
                margin: 0 auto;
            }

            #card {
                height: 850px;
            }
        }

    </style>
</head>

<body>
    <div class="page-wrapper show-sidebar" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6"
        data-sidebartype="full" data-sidebar-position="fixed">
        @include('layoutsTableau.sidebar') <!-- Include Sidebar -->

        <!-- Main wrapper -->
        <div class="body-wrapper">
            @include('layoutsTableau.header') <!-- Include Header -->

            @yield('content') <!-- Content will be inserted here -->
        </div>

        @include('layoutsTableau.footer') <!-- Include Footer -->
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
