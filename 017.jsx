// 017 useContext.mp4
// *documentacion: https://es.reactjs.org/docs/hooks-reference.html#usecontext
// *Acepta un objeto de contexto (el valor devuelto de React.createContext) y devuelve el valor de contexto actual. El valor actual del contexto es determinado por la propiedad value del <MyContext.Provider>
// *No olvides que el argumento enviado a useContext debe ser el objeto del contexto en sí mismo:  useContext(MyContext);
// *Un componente que llama a useContext siempre se volverá a renderizar cuando el valor del contexto cambie. Si volver a renderizar el componente es costoso, puedes optimizar esto usando memorización.
// *useContext(MyContext) solo te permite leer el contexto y suscribirte a sus cambios. Aún necesitas un <MyContext.Provider> arriba en el árbol para proveer el valor para este contexto.

// PARTES IMPORTANTES PARA USAR useContext: https://es.reactjs.org/docs/context.html#api
// React.createContext:
// *El argumento defaultValue es usado únicamente cuando un componente no tiene un Provider superior a él en el árbol.
const MyContext = React.createContext(defaultValue); //creacion de un objeto context
// Context.Provider:
// *Cada objeto Context viene con un componente Provider(MyContext.Provider) de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto.
// *El componente Provider acepta una prop value que se pasará a los componentes consumidores que son descendientes de este Provider
// *Nota: pasar undefined como valor al Provider no hace que los componentes que lo consumen utilicen defaultValue.
<MyContext.Provider value={ESTADO_GLOBAL_PARA_TODOS_COMPONENTES_DESCENDIENTES}>
  <AlgunComponente /> {/* o {props.children} */}
</MyContext.Provider>;

//EJEMPLO PRACTICO DE useContext:
import React from 'react';
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext();

function ThemeProvider(props) {
  //props en caso que lo utilicemos
  return (
    <ThemeContext.Provider value={themes.dark}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeProvider };

//Un componente (puede ser el App) que encierra otros(o todos) componentes que usaran el contexto(estado):
import React from 'react';
import { ThemeProvider } from './ruta';
import { ThemedButton } from './ruta';

function App(props) {
  return (
    <div>
      <ThemeProvider>
        {/* //Ahora ThemedButton y todos sus hijos podran acceder al contexto(estado) */}
        <ThemedButton />
      </ThemeProvider>
    </div>
  );
}
export default App;

// Compoenente final que necesita y hera el contexto:
import React from 'react';
import { ThemeContext } from './ruta';
function ThemedButton() {
  //useContext() sirve para consumir(utilizar) el contexto(estado)
  //"theme" contiene "themes.dark" y este a la vez tiene 2 propiedades(foreground y background) que seran usadas mas adelante.
  const theme = React.useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
