import React from 'react';
import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

function NavBar() {

    let url = window.location.pathname;

    return (
        <div className={style.bar}>
            <NavLink to='/' className={style.link}>
                {/* <img src='https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg' className={style.image} alt='logo'></img> */}
                <div className={style.titleContainer}>
                    <h2 className={style.title}>CODER CAMP</h2>
                </div>
            </NavLink>

            <NavLink
                to='/home'
                className={(url === '/home') ? style.mainActive : style.main}
            >Catalog
            </NavLink>
            
            {/* <NavLink
                to='/home'
                className={(url === '/home') ? style.createActive : style.create}
            >Cart
            </NavLink> */}
        </div>
    );
};

export default NavBar;

