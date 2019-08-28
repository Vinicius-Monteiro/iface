import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
	const { auth } = props;
	return (
		<nav className="navbar navbar-expand-lg">
			<Link to="/" className="navbar-brand text-white">
				iFace
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			{auth.uid ? <SignedInLinks auth={auth}/> : <SignedOutLinks />}
		</nav>
	);
};

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	};
};

export default connect(mapStateToProps)(Navbar);
