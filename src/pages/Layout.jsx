import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="nav-link active navbar-brand" to="/tarot">🔮</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/tarot">🏠 Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/tarot/fortune">🔮 Fortune</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="https://github.com/subhranshuchoudhury/tarot">🧑‍💻 Source code</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <audio src="/tarot/Assets/sounds/mysterious_sound.mp3" id="audioPlayer"></audio>
            <audio src="/tarot/Assets/sounds/magical.mp3" id="audioPlayer2"></audio>
            <audio src="/tarot/Assets/sounds/mysterious_bg.mp3" id="audioPlayer3"></audio>

            <Outlet />
            <a style={{ textDecoration: "none" }} href="https://about.me/subhranshu"><p style={{ color: "#aaa" }}>SSC@{new Date().getFullYear()}</p></a>
        </>
    )
};

export default Layout;
