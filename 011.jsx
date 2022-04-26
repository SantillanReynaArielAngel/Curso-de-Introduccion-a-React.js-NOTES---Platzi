// 011 Completando y eliminando TODOs.mp4

//EDITAR VALORES DEL ARAY DE OBJETOS DEL ESTADO:
//*Para usar la funcion solo debemos llamarlo desde un componente o evento
const completeTareas = (textUnico) => {
  //*encontramos el index de la tarea en especifico
  const tareaIndex = tareas.findIndex((tarea) => tarea.text === textUnico);
  //*se copian todas las tareas existendes(el estado) en una varible auxiliar:
  const newTareas = [...tareas];
  //*CABIAMOS UN VALOR ESPECIFICO DE UN ARRAY DE OBJETOS(la copia del estado):
  newTareas[tareaIndex].completed = true;
  //*ACTUALIZAMOS EL ESTADO
  setTareas(newTareas);
};

//ELIMINAR ELEMENTOS DE UN ARRAY DE OBJETOS DEL ESTADO:
const deleteTareas = (textUnico) => {
  //*encontramos el index de la tarea en especifico
  const tareaIndex = tareas.findIndex((tarea) => tarea.text === textUnico);
  //*se copian todas las tareas existendes(el estado) en una varible auxiliar:
  const newTareas = [...tareas];
  //*ELIMINAMOS LA TAREA CON EL INDEX EN ESPCIFICO.
  newTareas.splice(tareaIndex, 1);
  //*ACTUALIZAMOS EL ESTADO
  setTareas(newTareas);
};
