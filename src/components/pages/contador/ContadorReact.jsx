import React from "react";
import { Footer } from "../../layouts/footer/Footer";
import { Contador } from "../../layouts/componentesInferiores/Contador";
import { Header } from "../../layouts/header/Header";

export const ContadorR = () =>{
    return(
        <>
        <div className="bodyContador">
            <Header/>
            <Contador/>
            <Footer/>
        </div>

        </>
    )
}