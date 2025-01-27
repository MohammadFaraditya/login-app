<aside class="left-sidebar">
    <div class="scroll-sidebar" data-simplebar>
        <div class="d-flex mb-2 align-items-center justify-content-between">
            <a href="index.html" class="text-nowrap logo-img ms-0 ms-md-1">
                <img src="{{ asset('/images/logos/HomeAsiatop.png') }}" width="100" alt="">
            </a>
            <div class="close-btn  d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                <i class="ti ti-x fs-8"></i>
            </div>
        </div>
        <nav class="sidebar-nav ">
            <ul id="sidebarnav" class="mb-4 pb-2">
                <li class="nav-small-cap">
                    <i class="ti ti-dots nav-small-cap-icon fs-5"></i>
                    <span class="hide-menu">Home</span>
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link sidebar-link primary-hover-bg" href="" aria-expanded="false">
                        <span class="aside-icon p-2 bg-light-primary rounded-3">
                            <i class="ti ti-layout-dashboard fs-7 text-primary"></i>
                        </span>
                        <span class="hide-menu ms-2 ps-1">User</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link sidebar-link primary-hover-bg" href="{{ route('tableau') }}"
                        aria-expanded="false">
                        <span class="aside-icon p-2 bg-light-primary rounded-3">
                            <i class="ti ti-aperture fs-7 text-primary"></i>
                        </span>
                        <span class="hide-menu ms-2 ps-1">Tabelau</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
