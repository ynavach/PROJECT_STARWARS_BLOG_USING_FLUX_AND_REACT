import React, { useEffect, useState } from "react";

import {Card} from "./Card.jsx"

export const CardPeople= () => {
	const [people, setPeople] = useState ([]);

	const getdatap = async () =>
	{
		try {
			const response = await fetch ("https://www.swapi.tech/api/people/");
			if (response.ok == false){
				const error = response.json();
				throw new Error(error.message);
			}
			const body = await response.json();
	
			setPeople (body.results);
						
		}
		catch (error){
            console.log("Estatus de error: ", error);
		}
	}

	useEffect(()=>{
        getdatap ()
	}, []);
		
	return (
		
		<div className="container col-12 cards-container">
			{ people ? (
				<div>	

					<h3 className=" mt-5 pt-5  pb-3"> <br /> <br />Characters</h3>
					<div className="card-scroll row flex-nowrap gap-4 bg-dark" style={{overflowX: "scroll"}} >
						{
						people.map ((item,index)=>{
						let name=item.name;
						let url=item.url;
						let uid=item.uid;
				
						return(
						<Card name={name} url ={url} uid={uid} key={index} image="characters" tipo="people"/>
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
