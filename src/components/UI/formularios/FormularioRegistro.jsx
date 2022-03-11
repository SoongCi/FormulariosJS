import React, {useState} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

export const FormularioR = () => {

    const [state, setState] = useState({
        form:{
        "username":"",
        "password":"",
        "name":"",
        },
        error:false,
        errorMsg:""
    })

    const submitM=e=>{
        e.preventDefault()
    }

    const cambioM = async e=>{
        await setState({
        form:{
            ...state.form,
            [e.target.name]: e.target.value
        }
        })
    }

    const botonM=()=>{
        const url="https://backend-edw.herokuapp.com/usuario"
        axios.post(url, state.form)
        .then(response => {
            console.log(response);
            if(response.data.status === "ok"){
            
            }else{
                setState({
                error:true,
                errorMsg:response.data.Message
            })
        }
    }).catch(error =>{
        console.log(error);
        setState({
            error:true,
            errorMsg:"Error al conectar con el API"
        })
    })
    }

    return (
        <form className='formLogin' onSubmit={submitM}>

            <div className='txt_field'>
                <input type="text" id="name" required autoComplete='off' name="name" onChange={cambioM}/>
                <label className='labelForm'htmlFor="name">Nombre</label>
                <span></span>
            </div>

            <div className='txt_field'>
                <input type="text" id="email" required autoComplete='off' name="username" onChange={cambioM}/>
                <label className='labelForm'htmlFor="email">E-mail</label>
                <span></span>
            </div>

            <div className='txt_field'>
                <input type="password" id="password" required autoComplete='off' name="password" onChange={cambioM}/>
                <label className='labelForm' htmlFor="password">contraseña</label>
                <span></span>
            </div>
        
            <div className='divbtn'>
                <button id='btnLogin' type="submit" onClick={botonM}>Registrarse</button>
                <NavLink to="/Login"><button className='btnSubmit'>Iniciar sesion</button></NavLink>
            </div>

            {state.error === true &&
            <div className="alerta">
                <p>{state.errorMsg}</p>
            </div>
            }
        </form>
    )
}