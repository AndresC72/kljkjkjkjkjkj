import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navStyles from "./../../assets/styles/navBarmiEvento.module.css";


export const navBarMiEvento = () => {
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
                <NavLink
                            className={navStyles.navItem}
                            activeClassName={navStyles.isActive}
                            to="/mievento"
                        >
                           <span className={navStyles.inFront}>Buscar Eventos</span> 
            </NavLink>
        
            <NavLink
                            className={navStyles.navItem}
                            activeClassName={navStyles.isActive}
                            to="/buscarEventos"
                        >
                           <span className={navStyles.inFront}>Buscar Eventos</span> 
            </NavLink>

                        <NavLink
                            className={navStyles.navItem}
                            activeClassName={navStyles.isActive}
                            to="/eventos"
                        >
                           <span className={navStyles.inFront}>Eventos Pasados</span> 
            </NavLink>

                        <NavLink
                            className={navStyles.navItem}
                            activeClassName={navStyles.isActive}
                            to="/patrocinadores"
                        >
                          <span className={navStyles.inFront}>Tu Calendario</span>   
            </NavLink>

                        <NavLink
                            className={navStyles.navItem}
                            activeClassName={navStyles.isActive}
                            to="/contacto"
                        >
                           <span className={navStyles.inFront}>Tu tienda</span> 
            </NavLink>
            <NavLink
                            className={navStyles.navItem}
                            activeClassName={navStyles.isActive}
                            to="/configuracion"
                        >
                           <span className={navStyles.inFront}>Configuracion</span> 
            </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default navBarMiEvento;
