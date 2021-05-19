class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hola. Selecciona una de las opciones.");
      this.addMessageToState(message);
    };
  
    handleJavascriptQuiz = () => {
      const message = this.createChatBotMessage(
        "¡Genial! Rellena el formulario",
        {
          widget: "javascriptQuiz",
        }
      );
  
      this.addMessageToState(message);
    };

    handleReactQuiz = () => {
        const message = this.createChatBotMessage(
          "No somos mensajeros... Somos tus colaboradores",
          {
            widget: "reactQuiz",
          }
        );
    
        this.addMessageToState(message);
      };

  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;