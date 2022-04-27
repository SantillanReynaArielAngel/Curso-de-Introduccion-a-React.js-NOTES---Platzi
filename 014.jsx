// 014 Custom Hook para Local Storage.mp4

// *Haremos los ejemplos de la documentacion de react: https://es.reactjs.org/docs/hooks-custom.html
// *Construir tus propios Hooks te permite extraer la lógica del componente en funciones reutilizables.
// *Un Hook personalizado es una función de JavaScript cuyo nombre comienza con ”use”(para que react lo reconosca) y que puede llamar a otros Hooks.

// EJEMPLO: En una aplicacion de chat, tenemos 2  funciones: "FriendStatus" y "FriendListItem".
// *En ambas necesitamos una logica que muestre que si un amigo esta o no conectado.
// *Esta logica la podemos escribir en un Hook para que sea una funcion reutilizable.

// *Extrayendo un Hook personalizado:
import { useState, useEffect } from 'react';
function useFriendStatus(friendID) {
  // *El propósito de nuestro Hook useFriendStatus es suscribirnos al estado de un amigo. Por esto toma a friendID como un argumento, y devuelve si este amigo está conectado:
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
// *Usando un Hook personalizado:
// La lógica(duplicada) de los componentes FriendStatus y FriendListItem es que ambos quieren saber cuando un amigo está conectado.
// Ahora que hemos extraído esta lógica a un Hook useFriendStatus, podemos usarlo:
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id); //hook

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id); //hook

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>{props.friend.name}</li>
  );
}
