import React from 'react';
// al usar destructuring {} nos permite usar las propiedades del objeto, en este caso cambioBusqueda
const CajaBusca = ({cambioBusqueda}) => {
	return (
		<div className = 'pa2'>
			<input className = 'pa3 ba b--green bg-lightest-blue'
				type = 'search'
				placeholder = 'Search Robots'
				onChange={cambioBusqueda}
				// onChange es un evento de HTML en el cual estamos siempre escuchando a que haya un cambio en el input
				// asi entonces siempre que se tenga algun cambio en el input lo vamos a asignar a cambio busqueda
			/>
		</div>
	)
}

export default CajaBusca;