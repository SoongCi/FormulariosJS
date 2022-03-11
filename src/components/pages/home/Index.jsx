import React from "react";
import { Header } from "../../layouts/header/Header";
import { MainPag } from "../../layouts/main/Main";
import { Footer } from "../../layouts/footer/Footer";

export const Home = () => {
    return(
        <>
            <div className="bodyPag">
                <Header/>
                <MainPag/>
                <Footer/>
            </div>

        </>
    )
}