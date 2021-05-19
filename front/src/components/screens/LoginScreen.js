import { useState } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import "./LoginScreen.css";

const LoginScreen = ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [logueado, setLogueado] = useState(false);
    //const [usuario, setUsuario] = useState("");
    

    
    const loginHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        try {

            const {data} = await axios.post("/login", {email, password},
            config);

            localStorage.setItem("authToken", data.token);


        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 3000)
        }
    };

    const rutaPrivada = () => {

    const usuario = {
        email,
        password
    }

    fetch ("http://localhost:3001/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(usuario),
    }).then(function (res){
        return res.json();
    }).then(function (datos){
        console.log(datos);
        setLogueado(true);
        //setUsuario(datos.user)
    })
    }


    if(logueado===true){
        return <Redirect to="/pedido"/>
    }else {
    return(
    <div className="login-screen">
        <form onSubmit={loginHandler} className="login-screen__form">
            <h3 className="register-screen__title">Acceder</h3>
            {error && <span className="error-message">{error}</span>}

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" 
                        required id="email" 
                        placeholder="Introduce tu email" 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" 
                        required id="password" 
                        placeholder="Contraseña" 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)}
                />
            </div>

            <button onClick={rutaPrivada} className="btn btn-primary">Acceder</button>

            <span className="login-screen__subtext">¿Aún no estás dado de alta? <Link to="/register">Date de alta</Link></span>

        </form>
    </div>
    )
}
}


export default LoginScreen;