// 010 Contando y buscando TODOs.mp4

const tareasDefault = [
  { text: 'tarea 1', completed: true },
  { text: 'tarea 2', completed: true },
  { text: 'tarea 3', completed: true },
];
function App() {
  const [tareas, setTareas] = React.useState(tareasDefault);
  const [searchValue, setSearchValue] = React.useState('');

  // CONTANDO ELEMENTOS X DE UN ARRAY:
  //*funcion para para filtrar la cantidad de elementos:
  const tareasCompletadas = tareas.filter((tarea) => !!tarea.completed).length; //!!tarea.completed es lo mismo que tarea.completed===true
  const totalTareas = tareas.length;

  //*filtrando un elemento de una lista:
  let searchedTareas = [];
  if (!searchValue.length >= 1) {
    //Si no se escribio nada en el inputSearch
    searchedTareas = tareas; //Se copia todas las tareas en un array auxiliar
  } else {
    searchedTareas = tareas.filter((tarea) => {
      const tareaText = tarea.text.toLowerCase(); //Del array original se copian todas las tareas con texto en minuscula a "tareaText".
      const searchText = searchValue.toLowerCase(); //El texto escrito en el inputSearch se convierte en minuscula y se copia a "searchText"
      return tareaText.includes(searchText); //se compraran si hay coincidencias entre tareaText y searchText, de ser asi estos se retornan a searchedTareas
    });
  }
}

//*Compoenente lista de tareas, que mostrara todas las tareas que coincidad con el texto ingresado al inputSearch
<TareasList>
  {searchedTareas.map((tarea) => (
    <TareaItem key={tarea.text} text={tarea.text} completed={tarea.completed} />
  ))}
</TareasList>;

//COMO ENVIAR ESTADOS A OTROS COMPONETES PARA PODER  SER MODIFICADOS DESDE AHI:
function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      {/* Se envia el estado y su funcion resectiva en forma de propiedades, para que esta informacion pueda ser procesada dentro del componente TareasSearch */}
      <TareasSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </>
  );
}
