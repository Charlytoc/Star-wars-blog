import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Character from "../component/characters.jsx";
import Planets from "../component/planets.jsx";



export const Home = () => (



<>
	<h1 className="text-danger">Characters</h1>
	<div className="container-flex mt-5 d-flex">
		<Character />
		<Character />
		<Character />
		<Character />
		
	</div>
	<h1 className="text-danger">Planets</h1>
	<div className="container-flex text-center mt-5 d-flex">
		<Planets />
		<Planets />
		<Planets />
		<Planets />
	</div>
	</>
);
