import React from 'react';

const Scroll = (props) => {
	return (
		// dentro del div podemos definir estilos de CSS, el primer {} basicamente nos dice que vamos a correr javascript
		// y el segundo {} es un objeto que vamos a devolver, en este caso con propiedades de CSS
		// en este caso scroll nos permite crear una pequeña ventana de 500px, dentro de esta ventana es que vamos a poder
		// hacer scroll de los elementos que hay en props.children que basicamente son los mismos de CardList 
		// ya que Cardlist es el children de Scroll en App.js
		<div style = {{overflowY: 'scroll' , border: '1px solid black', height: '700px'}}>
			{props.children}
		</div>
	)
};

export default Scroll;
