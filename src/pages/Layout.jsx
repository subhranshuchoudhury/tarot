import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>

            <nav>
                <ul>
                    <button>
                        <Link to="/">Home</Link>
                    </button>
                    <li>
                        <Link to="/fortune">Fortune</Link>
                    </li>
                    <li>
                        <Link to="/result">Result</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />

        </>
    )
};

export default Layout;