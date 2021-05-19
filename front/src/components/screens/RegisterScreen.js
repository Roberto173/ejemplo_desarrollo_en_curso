import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./RegisterScreen.css";

const RegisterScreen = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const registerHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        if(password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("")
            }, 3000);
            return setError("Las contraseñas no coinciden");
        }

        try {

            const {data} = await axios.post("/register", {nombre, email, password},
            config);

            localStorage.setItem("authToken", data.token);


        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 3000)
        }
    };
    
    const registrado = () => {

    const usuario = {
        nombre,
        email,
        password
    }

    fetch ("http://localhost:3001/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(usuario),

    }).then(function (res){
        return res.json();
    }).then(function (datos){
        console.log(datos);
    })
    //window.alert('Registrado correctamente');
}

    return(
    <div className="register-screen">
        <form onSubmit={registerHandler} className="register-screen__form">
            <h3 className="register-screen__title">Regístrate</h3>
            {error && <span className="error-message">{error}</span>}
            <div className="form-group">
                <label htmlFor="name">Nombre de usuario:</label>
                <input type="text" 
                        required id="name" 
                        placeholder="Nombre de usuario" 
                        value={nombre} 
                        onChange={(e)=>setNombre(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" 
                        required id="email" 
                        placeholder="Email" 
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

            <div className="form-group">
                <label htmlFor="confirmpassword">Introduzca de nuevo la contraseña:</label>
                <input type="password" 
                        required id="confirmpassword" 
                        placeholder="Repita la contraseña" 
                        value={confirmPassword} 
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                />
            </div>

            <button onClick={registrado} className="btn btn-primary">Regístrate</button>

            <span className="register-screen__subtext">¿Ya estás dado de alta? <Link to="/login">Acceder</Link></span>

        </form>
    </div>
    )
}

export default RegisterScreen;