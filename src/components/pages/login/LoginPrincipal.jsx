import React from "react";
import { Login } from "../../layouts/componentesInferiores/Login";
import { Footer } from "../../layouts/footer/Footer";
import { Header } from "../../layouts/header/Header";

export const LoginPrincipal = () =>{
    return(
        <>
        <div className="bodyPagLogin">
            <Header/>
            <Login/>
            <Footer/>
        </div>
        </>
    )
}