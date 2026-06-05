export const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#0d6ea8" }}
        >
            <div className="container-fluid">
                {/* Logo / Brand */}
                <a className="navbar-brand fw-semibold" href="#">
                    Luv 2 Read
                </a>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Search Books
                            </a>
                        </li>
                    </ul>

                    {/* Right Side Button */}
                    <button className="btn btn-outline-light">
                        Sign in
                    </button>
                </div>
            </div>
        </nav>

    );
}