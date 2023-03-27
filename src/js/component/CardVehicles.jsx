import React, { useEffect, useState } from "react";

import {Card} from "./Card.jsx"

export const CardVehicles= () => {
	const [vehicles, setVehicles] = useState ([]);
	
	const getdatav = async () =>
	{
		try {
			const response = await fetch ("https://www.swapi.tech/api/vehicles/");
			if (response.ok == false){
				const error = response.json();
				throw new Error(error.message);
			}
			const body = await response.json();

			setVehicles (body.results);
						
		}
		catch (error){
            console.log("Estatus de error: ", error);
		}
	}

	useEffect(()=>{
        getdatav ()
	}, []);
	
	return (
		<div className="container col-12 cards-container">
			{ vehicles ? (
				<div>
					<h3 className=" mt-3 pt-2 pb-3">Vehicles</h3>
					<div className="card-scroll row flex-nowrap gap-4 bg-dark" style={{overflowX: "scroll"}} >
						{
						vehicles.map ((item,index)=>{
						let name=item.name;
						let url=item.url;
						let uid=item.uid;
						return(
						<Card name = {name} url ={url} uid={uid} key={index} image="vehicles" tipo="vehicles"/>
						)
						})
						}
					</div>
				</div>
			):( 
				<div className="spinner-border text-primary" role="status">
  					<span className="visually-hidden">Loading...</span>
				</div>
			)}		
		</div>
	)
};
