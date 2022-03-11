import React, {useState, useEffect} from "react";
import { ImgGaleria1 } from "../../UI/imagen/imageG1";
import { ImgGaleria2 } from "../../UI/imagen/imageG2";

export const CardsGaleria = () =>{
    const [card, setCard] = useState(0)

    const aumentar = () =>{
        setCard(card + 1);
    }

    useEffect(()=>{
        const imgG1 = document.getElementById("imgG1")
        const imgG2 = document.getElementById("imgG2")
        const btnG = document.getElementById("btnCambioG")

        if (card % 2 === 0) {
            imgG1.classList.add("pares");
            imgG1.classList.remove("impares");
            imgG2.classList.add("pares");
            imgG2.classList.remove("impares");
            btnG.classList.add("pares");
            btnG.classList.remove("impares");
        }else{
            imgG1.classList.remove("pares");
            imgG1.classList.add("impares");
            imgG2.classList.remove("pares");
            imgG2.classList.add("impares");
            btnG.classList.remove("pares");
            btnG.classList.add("impares");
        }

    }, [card]);

    return(
        <>
        <div className="bodyCards">
            <div className="card1">
                <h2 className="cards">Card1</h2>
                <ImgGaleria1/>
            </div>

            <div className="card2">
                <h2 className="cards">Card1</h2>
                <ImgGaleria2/>
            </div>

            <button id="btnCambioG" className="btnCambioG" onClick={aumentar}>{card}<p>boton</p></button>
        </div>
        </>
    )
}