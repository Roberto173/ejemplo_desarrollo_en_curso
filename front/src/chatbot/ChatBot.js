import React from 'react';
import Chatbot from 'react-chatbot-kit';

import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';



const ChatBot = () => {
    return (
        <div className="chatbot">
            <div style={{maxWidth: "300px"}}>
                <Chatbot
                    config={config}
                    actionProvider={ActionProvider}
                    messageParser={MessageParser}
                />
            </div>
        </div>

    )
}

export default ChatBot;