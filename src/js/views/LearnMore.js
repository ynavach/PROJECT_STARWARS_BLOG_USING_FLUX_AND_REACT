import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const LearnMore = props => {
	const [data, setData] = useState ([]);
	
	const {store, actions} = useContext (Context);
	const params = useParams();

	const getdata = async () =>
	{
		const API_URL = "https://www.swapi.tech/api"
		try {
			const response = await fetch (`${API_URL}/${params.tipo}/${params.id}`);
			
			if (response.ok == false){
				const error = response.json();
				throw new Error(error.message);
			}
			const body = await response.json();
			setData (body.result);
								
		}
		catch (error){
            console.log("Estatus de error: ", error);
		}
		
	}

	useEffect(()=>{
        getdata ()
	}, [params.id, params.tipo]);
	
return(
	<div className="position-absolute top-50 start-50 translate-middle mt-5 pt-5 ">
		{ data.properties ? (
			<div>
				<div className="card mb-3 border border-primary" style={{maxWidth: "5040px"}}>
  					<div className="row g-0">
    					<div className="col-md-4">
      						<img src={`https://starwars-visualguide.com/assets/img/${params.image}/${params.id}.jpg`} className="img-fluid rounded-start" alt="..."/>
    					</div>
    					<div className="col-md-8">
      						<div className="card-body">
        						<h3 className="card-title">{data.properties.name}</h3>
       							<p className="card-text">{data.description}</p>
        						
      						</div>
    					</div>
  					</div>
				</div>	
				{ params.tipo=="people" ? (
					<ul className="list-group list-group-horizontal border border-primary border-end border-start">
  					<li className="list-group-item"><b>Name:</b> {data.properties.name}</li>
 					<li className="list-group-item"><b>Birth Year:</b> {data.properties.birth_year} </li>
  					<li className="list-group-item"><b>Gender:</b> {data.properties.gender} </li>
					<li className="list-group-item"><b>Height:</b> {data.properties.height}</li>
 					<li className="list-group-item"><b>Skin Color:</b> {data.properties.skin_color} </li>
  					<li className="list-group-item"><b>Eye Color:</b> {data.properties.eye_color} </li>
					</ul>
				):
					params.tipo=="planets" ? (
					<ul className="list-group list-group-horizontal border border-primary">
 					<li className="list-group-item"><b>Name:</b> {data.properties.name}</li>
 					<li className="list-group-item"><b>Climate:</b> {data.properties.climate} </li>
  					<li className="list-group-item"><b>Population:</b> {data.properties.population} </li>
					<li className="list-group-item"><b>Orbital Period:</b> {data.properties.orbital_period}</li>
 					<li className="list-group-item"><b>Rotation Period:</b> {data.properties.rotation_period} </li>
  					<li className="list-group-item"><b>Diameter:</b> {data.properties.diameter} </li>
					</ul>
				):
					(
					<ul className="list-group list-group-horizontal border border-primary">
  					<li className="list-group-item"><b>Name:</b> {data.properties.name}</li>
 					<li className="list-group-item"><b>Manufacturer:</b> {data.properties.manufacturer} </li>
  					<li className="list-group-item"><b>Created:</b> {data.properties.created} </li>
					<li className="list-group-item"><b>Model:</b> {data.properties.model}</li>
 					<li className="list-group-item"><b>Length:</b> {data.properties.length} </li>
  					<li className="list-group-item"><b>Passengers:</b> {data.properties.passengers} </li>
					</ul>
				)
				}
			</div>
			):( 
				<div className="spinner-border text-primary" role="status">
  					<span className="visually-hidden">Loading...</span>
				</div>
								
			)}				

	</div>
	)
}
	
	LearnMore.propTypes = {
		match: PropTypes.object
	}
	