import {Outlet} from 'react-router-dom';
import { Link } from "react-router-dom";

function MainLayout() {
    return (
        <div>
            <header>Main Header</header>
            <div className="flex flex-row gap-3">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/admin">Admin</Link>
            </div>
            <main>
                <Outlet/>
            </main>
            <footer>Main Footer</footer>
        </div>
    );
}

export default MainLayout