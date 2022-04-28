// 018 Portales- teletransportación de componentes.mp4
// dicumentacion: https://es.reactjs.org/docs/portals.html#gatsby-focus-wrapper

// *Los portales nor permiten teletransportar(renderizar) componentes a otro nodo distinto(distinto al <div id="root"></div> del html);
// *Los portales on usados para css o MODALES, ETC.
// *LOs portales se pueden comunicar entre si atravez de props y estados(cambios de estados).

//Creando portal:
//Param1: Elemento o componente(lo que querramos) que queremos que se renderice.
//Param2: parametro:especificamos el nodo donde queremos renderizar
ReactDOM.createPortal(Param1, doParam2);
//creando un nuevo nodo en el html:
<div id="modal"></div>;

// EJEMPLO DE USO DE createPortal():
//*Cracion del componente modal:
import React from 'react';
import ReactDOM from 'react-dom';

function Modal(props) {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById('modal')
  );
}
export { Modal };
//Uso del componte Modal en otro lugar de la APP
import { Modal } from './ruta';
function ComponenteX() {
  return (
    <>
      <Modal>
        <p>
          Cualquier elemento, Componente o Estado el cual se renderizara en el
          nodo "modal" del html. Tambien podemos hacer uso de eventos(onClick)
          que pueden llamar directamente a los estados que estan en otro nodo
        </p>
      </Modal>
    </>
  );
}
export { ComponenteX };
