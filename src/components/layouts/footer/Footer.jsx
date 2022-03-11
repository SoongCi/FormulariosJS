import React from "react";
import { BtnInferiores } from "../../UI/botones/BotonesInferiores";
import { NavLink } from "react-router-dom";


export const Footer = () => {
    return(
        <>
        <NavLink to='/Contador'><BtnInferiores contenido = 'Contador'/></NavLink>
        <NavLink to='/Galeria'><BtnInferiores contenido = 'Galeria'/></NavLink>
        <NavLink to='/Login'><BtnInferiores contenido = 'Login'/></NavLink>
        <NavLink to='/Registro'><BtnInferiores contenido = 'Registrarse'/></NavLink>
        </>
    );
};