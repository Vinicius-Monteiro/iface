import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import {Redirect} from "react-router-dom";

class SignIn extends Component {
	state = {
		email: "",
		password: ""
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.signIn(this.state);
	};

	render() {
		const { auth, authError } = this.props;
		if(auth.uid) return <Redirect to="/"/>
		return (
			<div className="container mt-4">
				<form onSubmit={this.handleSubmit}>
					<h4 align="center">Entrar</h4>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							className="form-control"
							type="email"
							id="email"
							placeholder="exemplo@email.com"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Senha</label>
						<input
							className="form-control"
							type="password"
							id="password"
							placeholder="Senha"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<button className="btn form-control">Entrar</button>
						<div className="text-danger text-center mt-2">
							{authError ? <p>{authError}</p> : null}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth
	};
}

const mapDispatchToProps = dispatch => {
	return {
		signIn: creds => dispatch(signIn(creds))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignIn);
