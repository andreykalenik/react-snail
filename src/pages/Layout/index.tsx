
import {NavLink, Outlet} from 'react-router-dom';

const Layout = () => {
    return(
        <>
        <header>
            <NavLink to='/last'>last</NavLink>
            <NavLink to='/week'>week</NavLink>
        </header>
        <main>
            <Outlet/>
        </main>
        </>
        
    )
}

export {Layout}