import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/chatbotOptions/Options";
import Quiz from "../components/chatbotQuiz/Quiz";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hola ¿Puedo ayudarte? Elige una opción`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "¿Te has fijado si estoy ahora mismo en tu localidad?",
            answer:
              "¿Sí? Contrata ahora mismo una recogida y recibirás un obsequio.",
            id: 1,
          },
          {
            question: "¿Necesitas un servicio urgente?",
            answer:
              "Envía un WhatsApp al 77777777 y nos pondremos en contacto contigo",
            id: 2,
          },
        ],
      },
    },
    {
        widgetName: "reactQuiz",
        widgetFunc: (props) => <Quiz {...props} />,
        props: {
          questions: [
            {
              question: "Queremos que cuentes con nosotros. Si no cumplimos, te devolvemos el dinero.",
              answer:
                "¿Ya nos conoces? Gracias por volver",
              id: 1,
            },
            {
              question: "¿Aún no?",
              answer:
                "Entra en nuestras redes sociales y descubre lo que opinan nuestros clientes",
              id: 2,
            },
          ],
        },
      },
  ],
};

export default config;