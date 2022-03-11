import React from "react";
import { FormularioC } from "../../UI/formulario/FormularioC";
import { Header } from "../../layouts/header/Header";
import { Footer } from "../../layouts/footer/Footer";

export const Contacto = () =>{
    return(
        <>
        <div className="bodyPag">
            <Header/>
            <FormularioC/>
            <Footer/>
        </div>
        </>
    )
}