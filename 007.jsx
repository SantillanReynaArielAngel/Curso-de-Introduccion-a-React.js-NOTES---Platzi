// CSS en React
// Los estilos por lo general son objetos json. Ej:
const styles = { color: 'red', backGround: 'yellow' };
<Componente style={styles} />;
//Los componentes si reciben estilos directamente en el componente se debe encerrar dicho css en otros {}. Las propiedades css se escriben en camelCase. Ej: backGround:"yellow"
<Componente style={{ color: 'red', backGround: 'yellow' }} />;
//APRENDER METODOLOGIA BEN DE CSS, esta suele ser más corta como si  utilizariamos el operador ternario(?), envés de eso usamos “&&”. Ademas se usa mucho en las plantillas.
