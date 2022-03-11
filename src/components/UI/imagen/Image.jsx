import React from "react";
import img1 from '../../../assets/img/DibujoZorro.jpeg';

export const Imagen = () =>{
    return(
        <>
        <figure>
            <img className="imgenCentral" src={img1} alt=""/>  
        </figure>
        </>
    );
};