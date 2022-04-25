// 005 JSX- componentes vs. elementos (y props vs. atributos).mp4

//PROPS:
// Las props contienne todos los atributos definidos en nuestro componente.
// Los tributos sirven ara pasar informacion al componente y esta la procesa.
// Los atributos son accedidos en el componente atravez de props, El cual debe ser declarado como atributo de la funcion del componente.
<App atributo="cualquier atributo" />;
function App(props) {
  console.log(props.atributo);
}

//CHILDREN:
//La propiedad children es todos los elementos hijos que contienen un componente.
//El children de un componenete tambien puede ser capturado atravez de props
<App>
  <h1> Esto h1 es un children</h1>
</App>;
