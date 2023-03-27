import React, { useEffect, useState } from "react";

import {Card} from "./Card.jsx"

export const CardPlanets= () => {
	const [planets, setPlanets] = useState ([]);

	const getdatapla = async () =>
	{
		try {
			const response = await fetch ("https://www.swapi.tech/api/planets/");
			if (response.ok == false){
				const error = response.json();
				throw new Error(error.message);
			}
			const body = await response.json();
		
			setPlanets (body.results);
						
		}
		catch (error){
            console.log("Estatus de error: ", error);
		}
	}

	useEffect(()=>{
        getdatapla ()
	}, []);
	
	return (		
		<div className="container col-12 cards-container">
		
			{ planets ? (
				<div>	

					<h3 className=" mt-3 pt-2 pb-3">Planets</h3>
					<div className="card-scroll row flex-nowrap gap-4 bg-dark" style={{overflowX: "scroll"}} >
						{
						planets.map ((item,index)=>{
						let name=item.name;
						let url=item.url;
						let uid=item.uid;
						return(
						<Card name = {name} url ={url} uid={uid} key={index} image="planets" tipo="planets"/>
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
