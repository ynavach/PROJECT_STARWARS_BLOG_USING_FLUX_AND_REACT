import React, {useState, useEffect, useContext}  from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import {LearnMore} from "../views/LearnMore";

export const Card = (props) => {

	const {store, actions}=useContext(Context);
	let tipo=props.tipo;
	let id=props.uid;
	let img=props.image;
	let name=props.name; 

	return(
		<div className="card mt-2 mb-2 ms-2 me-2" style={{width: "15em"}}>
			<img onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
			}}
				src={`https://starwars-visualguide.com/assets/img/${props.image}/${props.uid}.jpg`}
				className="card-img-top mt-2 rounded" style={{height:"20em"}} alt="" />
  								
  			<div className="card-body" >
    			<h5 className="card-title">{props.name}</h5>
    			<p className="card-text">{props.url}</p>
			</div>
			<div className="card-footer bg-transparent border-warning d-flex justify-content-between " >							
				<Link to={`/LearnMore/${tipo}/${id}/${img}`}>
						<span className="btn btn-primary text-warning" 
						>Learn more!</span>
				</Link>
				<span className="btn btn-primary fa fa-heart text-warning m-1"
					onClick={()=>actions.addFavorite(props.tipo, props.uid, props.image,props.name)} role="button"></span>
			</div>
								
		</div>
	
	)
}
	