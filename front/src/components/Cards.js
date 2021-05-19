import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>¿Aún no nos conoces?</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/servicio_excelente.jpg"
                            text="Garantía de calidad y servicio"
                            label="Servicio Excelente"
                            path='/servicios' 
                        />
                        <CardItem
                            src="images/puerta_puerta.jpg"
                            text="Mensajería y paquetería puerta a puerta"
                            label="Recogidas y entregas express"
                            path='/servicios' 
                        />
                        <CardItem
                            src="images/enlacola.jpg"
                            text="Tu tiempo es valioso. No hagas colas"
                            label="Recados"
                            path='/servicios' 
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
