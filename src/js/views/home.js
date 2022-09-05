import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Character from "../component/characters.jsx";
import Planets from "../component/planets.jsx";
import { useState } from "react";
import { useEffect } from "react";

export const FavoritesContext = React.createContext();

export const Home = () => {

	const [planets, setPlanets] = useState([])
	const [people, setPeople] = useState([])
	const [prueba, setPrueba] = useState([])


// 	const obtenerDatos = () => {
// 		fetch("https://www.swapi.tech/api/planets/")
// .then(res => res.json())
// .then(data => setPlanets(data) )
// .then(data => console.log(planets))
// .catch(err => console.error(err))
// 	}

	const obtenerDatos = () => {
		fetch("https://www.swapi.tech/api/planets/")
    	.then((response) => response.json()) //lo transformamos en un json
    	.then((data) => setPlanets(data.results)) //lo guardamos en un objeto


		// for (let i=1; i<=10; i++ ) {
		// 	fetch(`https://www.swapi.tech/api/planets/${i}`)
    	// .then((response) => response.json()) //lo transformamos en un json
    	// .then((data) => setPlanets([...planets, data.results]))}

		fetch("https://www.swapi.tech/api/people/")
    	.then((response) => response.json()) //lo transformamos en un json
    	.then((data) => setPeople(data.results)) //lo guardamos en un objeto
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

//  console.log(planets)
//  console.log(people)
//  const showsPrueba = () => {
// 	console.log(prueba)
// 	console.log(planets)
//  }
	let listOfFavorites = ["1", "2"]

	return (
		<>
		<FavoritesContext.Provider value={listOfFavorites}>
	<h1 className="text-danger">Characters</h1>
	{/* <button onClick={ampliarDatos}>PRUBEA</button>
	<button onClick={(showsPrueba)}>Mostrar estado actual</button> */}

	<div className="container-flex mt-5 d-flex">
		{people.map( (item) => {return <Character key={item.uid} peopleName={item.name} />})}
		
		
	</div>
	<h1 className="text-danger">Planets</h1>
	<div className="container-flex text-center mt-5 d-flex">
		{planets.map( (item) => {return <Planets planetUrl={item.url} key={item.uid} planetName={item.name} />}  )}
	</div>
	</FavoritesContext.Provider>
	</>
	)
}

