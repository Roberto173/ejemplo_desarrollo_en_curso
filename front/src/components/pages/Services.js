import React from 'react';
import '../../App.css';

import Footer from '../Footer';

import CardItem from '../CardItem.js'

function Services() {
    return (
        <>
            <div className="cards">
            <h1>A esto nos dedicamos...</h1>
            
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/vehiculo_electrico.jpg"
                            text="Calidad en el servicio y... Cuidado del medioambiente.
                            Nuestros vehículos son eléctricos."
                            label="Servicio Excelente"
                            path='/servicios' 
                        />
                        <CardItem
                            src="images/bisonte_altamira.jpg"
                            text="En toda Cantabria, en menos de 2 horas"
                            label="Recogidas y entregas express"
                            path='/servicios' 
                        />
                        <CardItem
                            src="images/todolist.jpg"
                            text="Recogemos tus pedidos porque valoramos tu tiempo"
                            label="Recados"
                            path='/servicios' 
                        />
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Services;