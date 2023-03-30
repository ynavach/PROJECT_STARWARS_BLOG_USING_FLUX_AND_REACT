import React, {useState, useEffect, useContext}  from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import starImage from "../../img/starImage.png"; 

export const Navbar = () => {
	const [List, setList]=useState([]);
	const {store, actions}=useContext(Context);

	useEffect (() => {
		setList(store.favorite);
	},[])

	const updateFavorite =() => {
		setList (store.favorite);
		}
	
	return (
		<nav className="navbar navbar-dark bg-dark fixed-top" style={{height:"9em"}}>
			<Link to="/">
				<img style={{width:"10em"}} src= {starImage}/>
				<span className="navbar-brand text-warning bg-dark px-5 h1">May the force be with you..</span>
			</Link>

			<div className="dropdown">
				<button className="btn btn-warning dropdown-toggle me-3" type="button" 
  					id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" 
  					onClick={()=>{updateFavorite()}}>
    					Favorites <span className="bg-primary rounded p-1">{store.favorite.length}</span>
 				</button>
  				<ul className="dropdown-menu dropdown-menu-end">
					{ store.favorite.map((item,index)=>{
						let tipo=item.tipo;
						let id=item.uid;
						let img=item.image;
						let name=item.name;
						return( 
							<li key={index} className="d-flex justify-content-between align-items-center ps-1">
								<Link to={`/LearnMore/${tipo}/${id}/${img}`}>
								 {name}
								</Link>			
								<button className= "btn" onClick={(event)=>actions.deleteFavorite(id,tipo)}>
                                    <i className= "fas fa-trash-alt pe-3"></i>
                                </button>							
							</li>
						)})
					}			
   				</ul>
			</div>
		</nav>
	);
};
