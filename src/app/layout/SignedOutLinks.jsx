import React from 'react';
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
	return (
		<div className="collapse navbar-collapse" id="navbarNavDropdown">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item mx-3">
					<NavLink to="/signup" className="nav-link btn text-white">Cadastrar</NavLink>
				</li>
				<li className="nav-item mx-3">
					<NavLink to="/signin" className="nav-link btn text-white">Entrar</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default SignedOutLinks;