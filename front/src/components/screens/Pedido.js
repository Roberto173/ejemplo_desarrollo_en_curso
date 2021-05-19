import React from 'react';
import {useState} from 'react';
import './Pedido.css';


const Pedido = () => {

const [nombreRemite, setNombreRemite] = useState ('');
const [movilRemite, setMovilRemite] = useState ('');
const [nombreDestino, setNombreDestino] = useState ('');
const [direccionRemite, setDireccionRemite] = useState ('');
const [direccionEntrega, setDireccionEntrega] = useState ('');
const [comentario, setComentario] = useState ('');

const pedidoHandler = async (e) => {
    e.preventDefault();
}

const nombreRemitePedido = (e) => {
    setNombreRemite(e.target.value);
    console.log(nombreRemite);
}

const movilRemitePedido = (e) => {
    setMovilRemite(e.target.value);
    console.log(movilRemite);
}

const nombreDestinoPedido = (e) => {
    setNombreDestino(e.target.value);
    console.log(nombreDestino);
}

const direccionRemitePedido = (e) => {
    setDireccionRemite(e.target.value);
    console.log(direccionRemite);
}

const direccionEntregaPedido = (e) => {
    setDireccionEntrega(e.target.value);
    console.log(direccionEntrega);
}

const comentarioPedido = (e) => {
    setComentario(e.target.value);
    console.log(comentario);
}

const nuevoPedido = () => {

    const pedido = {
        nombreRemite,
        movilRemite,
        nombreDestino,
        direccionRemite,
        direccionEntrega,
        comentario
    }

    console.log(pedido);

    fetch ("http://localhost:3001/pedido", {

        method: "POST",
        headers: {

            "Content-Type": "application/json",
        },

        body: JSON.stringify(pedido),

            }).then(function (res) {
                return res.json();
            }).then(function (datos){
                console.log(datos);
                if (datos.mensaje==="YA EXISTE UN CLIENTE CON ESTE CIF"){
                    let mensajeAltaNoCif=`<div>
                                        <h2>${datos.mensaje}</h2>
                                        </div>`;
                    document.getElementById("mensajeAltaCliente").innerHTML=mensajeAltaNoCif;
                }else {
                    let mensajeAltaSiCif=`<div>
                                            <h2>${datos.mensaje}</h2>
                                          </div>`;
                    document.getElementById("mensajeAltaCliente").innerHTML=mensajeAltaSiCif;
        }
    });
    //window.alert('Gracias por tu pedido');
}
    return (
    
    <div className="pedido-screen">

    <form onSubmit={pedidoHandler} className="register-screen__form">
        <h3 className="register-screen__title">Haz un pedido</h3>
            <div className="form-group">
            <input type="text" required placeholder="¿Cómo te llamas?" value={nombreRemite} onChange={nombreRemitePedido} />
            </div>
            <div className="form-group">
            <input type="text" required placeholder="Déjanos tu nº de móvil" value={movilRemite} onChange={movilRemitePedido} />
            </div>
            <div className="form-group">
            <input type="text" required placeholder="¿A quién le tengo que hacer la entrega?" value={nombreDestino} onChange={nombreDestinoPedido} />
            </div>
            <div className="form-group">
            <input type="text" required placeholder="Dirección de recogida... Calle, nº y C.P." value={direccionRemite} onChange={direccionRemitePedido} />
            </div>
            <div className="form-group">
            <input type="text" required placeholder="Dirección de entrega... Calle, nº y C.P." value={direccionEntrega} onChange={direccionEntregaPedido} />
            </div>
            <div className="form-group">
            <input type="text" required placeholder="¿Algo que debamos tener en cuenta?" value={comentario} onChange={comentarioPedido} />
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={nuevoPedido}>Confirmar Datos</button>
        
    </form>

    </div>
    )
}

export default Pedido;