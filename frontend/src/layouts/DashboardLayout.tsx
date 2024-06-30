import {Outlet} from 'react-router-dom';

function MainLayout() {
    return (
        <div>
            <header>Dashboard Header</header>
            <main>
                <Outlet/>
            </main>
            <footer>Dashboard Footer</footer>
        </div>
    );
}

export default MainLayout