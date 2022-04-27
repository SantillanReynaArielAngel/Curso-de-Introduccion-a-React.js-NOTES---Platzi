// 013 Persistencia de datos con Local Storage.mp4

//LOCAL STORAGE
//*La propiedad de sólo lectura localStorage te permite acceder al objeto local Storage; los datos persisten almacenados entre de las diferentes sesiones de navegación.
//*localStorage es similar a sessionStorage (en-US).
//*La única diferencia es que, mientras los datos almacenados en localStorage no tienen fecha de expiración, los datos almacenados en sessionStorage son eliminados cuando finaliza la sesion de navegación - lo cual ocurre cuando se cierra la página.

//*Crear un elemento en local Storage:
localStorage.setItem('nameDato', 'stringValorDelDato');
//*Un truco para almacenar diferentes tipos de datos(arays,json,boleanos,etc) en localStorage es convertir estos datos en un string con "JSON.stringify()":
const tareasDefault = [
  { text: 'tarea 1', completed: true },
  { text: 'tarea 2', completed: true },
  { text: 'tarea 3', completed: true },
];
const stringTareasDefault = JSON.stringify(tareasDefault);
//*Almacenando el array de objetos en el localStorage:
localStorage.setItem('stringTareasDefault', stringTareasDefault);

//Nota: Para convertir un string a su tipo de dato(despues de haber usado JSON.stringify()):
JSON.parse(stringTareasDefault);

//UNA FORMA DE GUARDAR DATOS EN LOCALSTORAGE Y SINCRONIZARLO AL ESTADO ES:
function App() {
  const localStorageTareas = localStorage.getItem('TAREAS_V1');
  //*La siguiente variable sera para almacenar las tareas que estan en el localStorage, este mismo sera el dato por defecto de nuestro estado
  let parsedTareas;
  //*Verificamos si localStorage esta vacio(null,false o undefined), es decir no se creo nada en el localStorage.
  if (!localStorageTareas) {
    localStorage.setItem('TAREAS_V1', JSON.stringify([]));
    parsedTareas = [];
  } else {
    parsedTareas = JSON.parse(localStorageTareas);
  }

  //*estado:
  const [tareas, setTareas] = React.useState(parsedTareas);

  //*funcion para actualiar el estado y el localStorage:
  //*Esta funcion puede llamarse desde funciones de actualizar y eliminar.
  // *Esta funcion  recibe como parametro el "estado procesado" de las funciones actualizar y eliminar, con lo que saveTareas solo tendra que guardar dichos cambios
  const saveTareas = (newTareas) => {
    const stringifiedTareas = JSON.stringify(newTareas);
    localStorage.setItem('TAREAS_V1', stringifiedTareas);
    setTareas(newTareas);
  };
}
