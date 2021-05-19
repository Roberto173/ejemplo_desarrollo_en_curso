import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Hacer un envío",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Descubre cómo podemos ayudarte", 
    handler: props.actionProvider.handleReactQuiz, 
    id: 2 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;