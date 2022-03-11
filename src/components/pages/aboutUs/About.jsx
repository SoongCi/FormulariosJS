import React from "react";
import { Imagen2 } from "../../UI/imagen/image2";
import { Header } from "../../layouts/header/Header";
import { Footer } from "../../layouts/footer/Footer"


export const About = () => {
    return(
        <>
        <div className="bodyPag">
            <Header/>
            <Imagen2/>
            <Footer/>
        </div>
        </>
    )
}
