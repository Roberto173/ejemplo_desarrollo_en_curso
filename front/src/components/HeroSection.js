import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>TU MENSAJERÍA KM0</h1>
            <p>¿A qué estás esperando?</p> 
            <div className="hero-btns">
                <Button 
                    className="btns" 
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    Contrata un envío/recogida
                </Button>
                <Button 
                    className="btns" 
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    ...Y relájate. Nosotros nos encargamos <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
