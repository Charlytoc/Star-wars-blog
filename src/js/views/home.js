import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Character from "../component/characters.jsx";
import Planets from "../component/planets.jsx";
import { useState } from "react";
import { useEffect } from "react";
import Vehicles from "../component/vehicles.js";

export const FavoritesContext = React.createContext();

export const Home = () => {

	const [planets, setPlanets] = useState([])
	const [people, setPeople] = useState([])
	const [prueba, setPrueba] = useState([])
	const [vehicle, setVehicles] = useState([])



	const obtenerDatos = () => {
		fetch("https://www.swapi.tech/api/planets/")
    	.then((response) => response.json()) //lo transformamos en un json
    	.then((data) => setPlanets(data.results)) //lo guardamos en un objeto

		// NO FUNCIONÓ, SE SOBRECARGÓ LA PÁGINA
		// for (let i=1; i<=10; i++ ) {
		// 	fetch(`https://www.swapi.tech/api/planets/${i}`)
    	// .then((response) => response.json()) //lo transformamos en un json
    	// .then((data) => setPlanets([...planets, data.results]))}

		fetch("https://www.swapi.tech/api/people/")
    	.then((response) => response.json()) //lo transformamos en un json
    	.then((data) => setPeople(data.results)) //lo guardamos en un objeto

		fetch("https://www.swapi.tech/api/vehicles/")
    	.then((response) => response.json()) //lo transformamos en un json
    	.then((data) => setVehicles(data.results)) //lo guardamos en un objeto
	}

 useEffect( ()=>{obtenerDatos()}, [])

//  const ampliarDatos = () => {
// 	planets.forEach( (item) => {
// 		// console.log(item.url)

// 		let urlToFetch = item.url.toString()
// 		// console.log(urlToFetch)

// 		fetch(urlToFetch)
//     	.then((response) => response.json()) //lo transformamos en un json
//     	.then((data) => setPrueba(...prueba, data.result.properties)) //lo guardamos en un objeto
// })
//  }

// 

	return (
		<>
	<h1 className="text-danger">Characters</h1>
	{/* <button onClick={ampliarDatos}>PRUBEA</button>
	<button onClick={(showsPrueba)}>Mostrar estado actual</button> */}

	<div className="container-flex mt-5 d-flex">
		{people.map( (item) => {return <Character key={item.uid} peopleImage={item.uid}  peopleName={item.name} />})}
		
		
	</div>
	<h1 className="text-danger">Planets</h1>
	<div className="container-flex text-center mt-5 d-flex">
		{planets.map( (item) => {return <Planets planetUrl={item.url} planetImage={item.uid} key={item.uid} planetName={item.name} />}  )}
	</div>

	<h1 className="text-danger">Vehicles</h1>
	<div className="container-flex text-center mt-5 d-flex">
		{vehicle.map( (item) => {return <Vehicles vehicleUrl={item.url} vehicleImage={item.uid} key={item.uid} vehicleName={item.name} />}  )}
	</div>
	</>
	)
}

