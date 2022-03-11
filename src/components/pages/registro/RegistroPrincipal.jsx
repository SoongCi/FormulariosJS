import React from "react";
import { Registro } from "../../layouts/componentesInferiores/Registro";
import { Footer } from "../../layouts/footer/Footer";
import { Header } from "../../layouts/header/Header";

export const RegistroPrincipal = () =>{
    return(
        <>
        <div className="bodyPagLogin">
            <Header/>
            <Registro/>
            <Footer/>
        </div>
        </>
    )
}