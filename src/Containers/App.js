import React,{Component} from 'react';
import CardList from '../Components/CardList';
import CajaBusca from '../Components/CajaBusca'; 
import Scroll from "../Components/Scroll";
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';

class App extends Component{
	constructor(){
		// siempre que se tiene una clase se debe declarar un constructor, la idea es declarar el estado(STATE) aqui dentro
		// del constructor. No olvidar que como app esta heredando de Component, siempre se debe llamar a Super(que es el
		//constructor de la super clase)
		super()
		// aqui creamos el objeto con los esados, robots que va a tener todos los objetos con la descripcion de los robots
		// y searchfield que va a ser el que obtenga lo que escribamos en la CajaBusca, inicialmente vacio para que
		// se muestren todos los robots. Este estado es el que se va a pasar como propiedades a los elementos hijos
		// como nota aparentemente los estados se deben llamar state porque probando con otros numbres no sirve
		this.state = {
			'robots' : [],
			'searchfield' : ''
		}
	}

	// el componentDidMount se corre automaticamente despues del constructor y antes del render por el 
	// lifecycle de react. asi primero ponemos todo en blanco en el estado inicial y cuando carge la pagina
	// le pedimos que haga lo que esta adentro de componentDidMount, en este caso que actualice 
	// el estado de robots con los valores de la URL especificada y actualizamos el estado para poder mostrar
	// los robots.
	componentDidMount(){
		// Fetch va y busca los usuarios en esa URL con el then obtenemos una respuesta y luego se hace 
		//"magia" con el response.json Fetch es un objeto del window de los objetos y nos permite
		// hacer requests a servidores web y este https://jsonplaceholder.typicode.com/users es un servidor 
		// que nos retorna un listado de usuarios que podemos usar en nuestra aplicacion
		fetch('https://jsonplaceholder.typicode.com/users').then(response => {
			   return response.json();
		})
		// luego hacemos un update con el setState para obtener los usuarios y tenerlos en 
		// la propiedad robot que tenemos en el estado
		.then(users=>{
			this.setState({robots : users})
		})
		
	}
 

 		// la idea es que cada vez que cambie el atributo input se dispare un evento(que aqui llamamos evento)
		// vamos a pasar esto como propiedad a CajaBusca
		// siempre que se tenga un evento se puede poner.target.value para obtener el valor de dicho evento 
	cambioEnBusqueda = (evento) => {
		// setState es un metodo incluido en react para actualizar los valores de los estados
		// basicamente le estamos diciendo que el estado de searchfield va a ser el valor del evento regresado
		// en este caso el valor de ese evento esta dado por lo que se escriba en el input en cajabusca
		// esto viene de estar definido en la propiedad y que en Caja Busca se tiene un evento onChange de HTML en el input
		// a mi por alguna razon no me sirvio el .setState
		this.setState({searchfield : evento.target.value});
	
	}

	render(){
		// aqui hacemos destructuring para obtener las propiedades robots y searchfield thel estado actual o sea 
		// de this.state
		const {robots, searchfield} = this.state;

		const robotsFiltrados = robots.filter( robot => {
		// si el nombre del robot en minusula incluye alguna letra del searchfield en minuscula entonces
		// retorne esos nombres se usa this.estado.searchfield ara aceder a esa propiedad de estado.
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		// ahora accederemos a los datos desde el estado es decir this.estado.robots(el elemento robots del objeto estado) y
		// este valor es el props que le damos al componente cardlist
		// como estamos dentro de la clase se debe usar la sintaxis this.loquesea para decir que nos referimos a lo que esta 
		// dentro de la clase. Se ve como si la clase fuera un objeto y para acceder a cambio en busqueda 
		//entonces this.cambioEnBusqueda, ahora toca ir a CajaBusca y agregar esta propiedad a la funcion.

		// como se realizo destructuring y pues tenemos una funcion robotsFiltrados que me regresa solo los robots que
		// contienen la lo que se escriba en el textbox entonces es esta funcion la que se pasa como props al CardList 
	
		// el !robots.lenght lo que esta mirando es si se tiene algun elemento dentro del array robots
		// si esta vacio robots.lenght botaria false y con el ! entonces se vuelve true por lo que 
		// se ejecutaria <h1>
		// si tuviera algo botaria true y con el ! se vuelve false entonces saltaria el <h1> y se iria
		// a renderizar las cartas <div.... 
		return !robots.length ?
		// esto es una funcion tipo si xx true entonces yy si no zz donde xx es lo que esta antes del ? 
		// si !robots.length verdadero entonces <h1> si no <div className...

		 <h1>Loading</h1> :

		(
// se pasa robotsFiltrados lo cual es solamente los robots que contengan lo que se va escribiendo en el input
			<div className='tc'> 
				<h1 className='f2'> Robofriends </h1>
				<CajaBusca cambioBusqueda={this.cambioEnBusqueda}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots = {robotsFiltrados} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);		
	}

}

export default App;