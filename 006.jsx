//006 Componentes de TODO Machine.mp4

//REACT.FRAGMENT:
//Sirve para envolver todos los elementos que contienen el return de un componente, ya que react solo debe retornar un solo elemento
//Se utiliza Fragment para evitar crear div innecesarios(caso contrario esto podria generar conflictos)
// Un forma de declarar el <React.Fragment> es usando: <>
function App() {
  return (
    <React.Fragment>
      <h1>Elemento h1</h1>
      <input />
      <button>Esto es un boton</button>
    </React.Fragment>
  );
}
//O tambien
function App() {
  return (
    <>
      <h1>Elemento h1</h1>
      <input />
      <button>Esto es un boton</button>
    </>
  );
}

//ESPORTACION E IMPORTACION DE COMPONENTES:
//Podemos exportar de 2 maneras, por default y export nombrados
//1 Por default: export default componete; esto nos dara la posibilidad de renombrar el componente al momento de importarlo desde otro archivo.
function App() {
  render();
}
export default App;
import { array } from 'prop-types';
//En otro archivo
import renombrandoCompoente from 'ruta/006.jsx';

//2 Por export nombrados: export {compoente}; esto nos obligara a que importemos desde otro archivo el comoponete con su mismo nombre.
function App() {
  render();
}
export { App };
//En otro archivo
import { App } from 'ruta/006.jsx';


//RENDERIZANDO UN COMPONETE POR CADAD ELLEMNTO DE UN ARRAY
const platos=[
    {id:1, name:"plato 1"},
    {id:2, name:"plato 2"},
    {id:3, name:"plato 3"}
]
<ListaPlatos>
    {platos.map(item=>(
        <TarjetaPlato key={id} nombre={item.name}/>
    ))}
</ListaPlatos>
    