import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';


import ChatBot from '../../chatbot/ChatBot'

function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <ChatBot />  
            <Footer />
        </>
    )
}

export default Home;