import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navStyles from "./../../assets/styles/navBar.module.css";
import logo from './../../assets/img/logo.png'

export const navBar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav>
            <a
                className={`${isOpen && navStyles.isActive}`}
                onClick={() => setOpen(!isOpen)}
            ></a>
            <div
                className={`${navStyles.navbarMenu} ${isOpen && navStyles.isActive}`}
            >
                             
                <div className={navStyles.start}>
                <NavLink className={`${navStyles.navItem}  ${navStyles.logo}`} to="/">
                            <img src={logo} alt="logo"/>
            </NavLink>
            <NavLink
                            className={navStyles.navItem}
                            activeClassName={navStyles.isActive}
                            to="/login"
                        >
                           <span className={navStyles.inFront}>INICIAR SESIÓN</span> 
            </NavLink>

                        <NavLink
                            className={navStyles.navItem}
                            activeClassName={navStyles.isActive}
                            to="/eventos"
                        >
                           <span className={navStyles.inFront}>EVENTOS</span> 
            </NavLink>

                        <NavLink
                            className={navStyles.navItem}
                            activeClassName={navStyles.isActive}
                            to="/patrocinadores"
                        >
                          <span className={navStyles.inFront}>PATROCINADORES</span>   
            </NavLink>

                        <NavLink
                            className={navStyles.navItem}
                            activeClassName={navStyles.isActive}
                            to="/contacto"
                        >
                           <span className={navStyles.inFront}>CONTACTO</span> 
            </NavLink>
                        <NavLink
                            className={navStyles.navItem}
                            activeClassName={navStyles.isActive}
                            to="/miPerfil"
                        >
                            ICONO
            </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default navBar;
