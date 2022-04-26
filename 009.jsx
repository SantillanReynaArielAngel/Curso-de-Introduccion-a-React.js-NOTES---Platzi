// 009 Manejo del estado.mp4

//DECLARACION DE UN ESTADO USANDO REACT HOOK:
//*searchValue es el estado como tal y setSearchValue es la funcion que nos permite modificar el estado.
//*Iniciamente el estado se inicializa como vacio.
const [searchValue, setSearchValue] = React.useState('');

//ESTADO CONSUMIDO DESDE UN INPUT:
//*Cramos una funcion que recupera cada cambio del input y lo envia al estado:
const onSearchValueChange = (event) => {
  setSearchValue(event.target.value);
};
//*El input recupera el valor del estado en el atrubuto "value", este es visible del lado del navegador en tiempo real:
<input value={searchValue} onChange={onSearchValueChange} />;
//*La etiqueta p recupera y muestra el valor del estado en tiempo real:
<p>{searchValue}</p>;
