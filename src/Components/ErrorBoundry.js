import React , {Component} from 'react';

class ErrorBoundry extends Component {

	constructor(props){
		super(props);
		this.state = {
			hasError: false,
		}
	}
	// componentDidCatch es como un try catch de JS, en caso de que haya algun error entonces se ejecuta
	// admite dos argumentos que son el error y la informacion
	// para nuestro caso solo vamos a cambiar el estado de has an error a true
	componentDidCatch(error, info){
		this.setState({hasError: true});
	}
	//le decimos qu si hasError es verdad entonces saque ups eso no esta bien
	// si no simplemente que nos retorne props.children y como el children es CardList entonces nos devuelve
	// las props de CardList.
	render(){
		return this.state.hasError ?
			<h1> Ups! that is not good...</h1>
			:
		 this.props.children
		
	}
};

export default ErrorBoundry;