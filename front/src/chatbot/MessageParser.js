class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("hola")) {
        this.actionProvider.greet();
      }
  
      if (lowercase.includes("contratar") || lowercase.includes("alta")) {
        this.actionProvider.handleJavascriptQuiz();
      }

      if (lowercase.includes("consultar") || lowercase.includes("confirmar")) {
        this.actionProvider.handleReactQuiz();
      }
    }
  }
  
  export default MessageParser;