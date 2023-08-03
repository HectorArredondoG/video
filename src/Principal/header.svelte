<main>
<div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-black fixed-top">
        <ul class="inavbar-nav mx-auto barra">
            <ul class="navbar-nav">
                <li class="nav-item text">
                    <a class="nav-link" href="Inicio">Inicio</a>
                </li>

                <li class="nav-item text">
                    <a class="nav-link" href="/#/Noticias">Noticias</a>
                </li>

                <li class="nav-item text">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a
                        class="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Consolas
                    </a>
                    <ul class="dropdown-menu bg-black">
                        <li>
                            <a class="dropdown-item" href="/#/Ps">PlayStation</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/#/Nintendo">Nintendo</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/#/Xbox">Xbox</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </ul>
    </nav>
</div>
</main>
<style>
    .barra {
        padding-top: 20px;
    }
    .text {
        margin-top: 20px;
    }
    a {
        color: white;
    }
    .dropdown-menu{
        margin-left: 63rem;
    }
</style>
