import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link class="nav-link active navbar-brand" to="/tarot">🔮</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/tarot">🏠 Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/tarot/fortune">🔮 Fortune</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="https://github.com/subhranshuchoudhury/tarot">🧑‍💻 Source code</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
            <p style={{ color: "#aaa" }}>SSC@{new Date().getFullYear()}</p>
        </>
    )
};

export default Layout;
