import React from "react";
import { BtnSuperiores } from "../../UI/botones/BotonesSuperiores";
import { NavLink } from "react-router-dom";


export const Header = () =>{
    return(
        <>
        <NavLink to='/'><BtnSuperiores contenido = 'Home'/></NavLink>
        <NavLink to='/AboutUs'><BtnSuperiores contenido = 'About us'/></NavLink>
        <NavLink to='/Contact'><BtnSuperiores contenido = 'Contact'/></NavLink>
        </>
    );
};