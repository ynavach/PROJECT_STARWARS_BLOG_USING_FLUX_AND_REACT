import React from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import {CardPeople} from "../component/CardPeople.jsx";
import {CardPlanets} from "../component/CardPlanets.jsx";
import {CardVehicles} from "../component/CardVehicles.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<CardPeople/>
		<CardPlanets/>
		<CardVehicles/>
	</div>
);
