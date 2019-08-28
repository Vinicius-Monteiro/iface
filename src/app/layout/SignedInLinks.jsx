import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../store/actions/authActions";

const SignedInLinks = (props) => {
	return (
		<div className="collapse navbar-collapse" id="navbarNavDropdown">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item mx-3">
					<NavLink to="/createpost" className="nav-link btn">
						Novo Post
					</NavLink>
				</li>
				<li className="nav-item mx-3">
					<NavLink to={"/user/" + props.auth.uid} className="nav-link btn">
						Perfil
					</NavLink>
				</li>
				<li className="nav-item mx-3">
					<NavLink to="/">
						<button className="nav-link btn" onClick={props.signOut}>
							Sair
						</button>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
