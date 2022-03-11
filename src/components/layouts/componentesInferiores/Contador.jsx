import React, {useState, useEffect} from "react";
import { Imagen3 } from "../../UI/imagen/image3";

export const Contador = () =>{
    
    const [contador, setContador] = useState(0);

    const sumar = () =>{
        setContador(contador+1);
    }

    const resetear = () =>{
        setContador(0)
    }

    const restar = () =>{
        setContador(contador-1)
    }

    useEffect(()=>{
        const img = document.getElementById('imgContador');

        if(contador >= 5){
            img.classList.add('inactivo');
            img.classList.remove('activo');
        }else{
            img.classList.remove('inactivo');
            img.classList.add('activo');
        };
    }, [contador]);

    return(
        <>
        <div className="contenedorContador">
            <h1>Contador</h1>
            <Imagen3/>
            <h2 className="contador">{contador}</h2>
            <button className="btnCambio" onClick={restar}>-</button>
            <button className="btnCambio" onClick={resetear}>Resetear</button>
            <button className="btnCambio" onClick={sumar}>+</button>
        </div>
        </>
    )
}