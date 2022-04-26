// 008 Manejo de eventos.mp4
// Todos los eventos en react empiezan con la letra "on" y son escritas en camelCase, ejemplos: onClick, onChange, etc
// Los eventos estan dentro de {}.
// Por lo general el código js dentro de las {} tiene que ser envuelta o ejecutarse por una función, esto para evitar que se auto ejecute, se tienen lo siguientes casos:

//onClick:
// 1) El arroy function nos sirve para evitar que la función se autoejecute:
    onClick={ () => codigoJS } 
// 2) El evento no se autoejecuta por que eventoFuncion ya es una función:
    const eventoFuncion =()=>{ codigoJS }; onClick={ eventoFuncion }
// 3) Para funciones que reciben parámetros, se necesita usar arrowFunction para evitar la autoejecucion de eventoFuncion(param):
    const eventoFuncion =(paran)=>{ codigoJS }; onClick={ ()=> eventoFuncion(paran) }

//onChange:
// El evento onchange recibe por parámetro un evento “event”, este contiene varios valores dentro de los cuales se tiene “event.target.value” este contiene cada cambio que se hizo en un input. Ej:
// Se imprimirá cada cambio(letra,borrado) del input al instante:
const onChangeFunction = (event) =>{ console.log(event.target.value); }; 
return ( <input onChange={onChangeFunction} /> );
