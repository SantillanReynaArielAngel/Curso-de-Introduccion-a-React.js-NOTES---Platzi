// 015 Manejo de efectos.mp4
//Documentacion: https://es.reactjs.org/docs/hooks-effect.html

//USEEFFECT:
// *Nos permite ejecutar una porcion de codigo despues de que se hara renderiazado el html de nuestra app.
// *La ejecucion de la porcion de codigo puede estar condicionada(enviandole como 2do argumento al useEffect un array de datos).
// *useEffect Se puede usar sobre todo para llmadas a una API, en la cual nuestra app puede tener estados de carga(loading(1er render html listo), loadingOk(2do render respuesta de la api con use effect))
// *Ejemplo: Hacer que localStorage y el estado tomen valores despues de ciertos segundos(analogia de llamada a una api). Teniendo estados de carga(espera)

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false); //Estdo de carga
  const [loading, setLoading] = React.useState(true); //Estdo de carga
  const [item, setItem] = React.useState(initialValue); //Estado de la data

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName); //verificacion si existe allgo en el localStorage
        let parsedItem; //var aux del estado

        if (!localStorageItem) {
          //si no existe info en localStorage, añadimos lo que nos llego de initialValue. como tambien en la var aux del estado.
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          //Si ya esxite info en localStorage se la pasamos a la var aux del estado
          parsedItem = JSON.parse(localStorageItem);
        }
        //Se  cambian los estados de carga(espera) y se actualiza el estado
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        // si exite algun error actualizamos el estado de error
        setError(true);
      }
    }, 1500);
  }, []); //Esta array vacio indica que solo una vez se ejecutara el useEffect()
}
