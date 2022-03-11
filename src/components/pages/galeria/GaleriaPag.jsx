import React from "react";
import { CardsGaleria } from "../../layouts/componentesInferiores/Galeria";
import { Footer } from "../../layouts/footer/Footer";
import { Header } from "../../layouts/header/Header";

export const PagGaleria = () =>{
    return(
        <>
        <Header/>
        <CardsGaleria/>
        <Footer/>
        </>
    )
}