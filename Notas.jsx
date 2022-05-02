// 019 Formulario para crear TODOs.mp4
// *prevState: Proporciona el estado actual antes de que setState haga efecto. Esto para garantizar que todas las actulizacion al estado correctos ordenadamente.
// Por ejemplo si temmos lo siguiente:
state = {
  count: 0,
};
updateCount = () => {
  this.setState({ count: this.state.count + 1 });
  this.setState({ count: this.state.count + 1 });
  this.setState({ count: this.state.count + 1 });
  this.setState({ count: this.state.count + 1 });
};

// En el código anterior, puede esperar que el valor de count sea 4, pero en realidad sería 1, ya que la última llamada a setState anulará cualquier valor anterior durante el procesamiento por lotes.
// Una forma de resolver esto es usando prevState:
updateCount = () => {
  this.setState((prevstate) => ({ count: prevstate.count + 1 }));
  this.setState((prevstate) => ({ count: prevstate.count + 1 }));
  this.setState((prevstate) => ({ count: prevstate.count + 1 }));
  this.setState((prevstate) => ({ count: prevstate.count + 1 }));
};
//prevState(recupera el estado actual) garantiza que cada setState inicie y culmine antes de pasar al siguiente.

//REPOSITORIO DEL CURSO: https://github.com/platzi/curso-intro-react
