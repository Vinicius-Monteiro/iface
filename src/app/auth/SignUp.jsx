import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signUp} from "../../store/actions/authActions";

class SignUp extends Component {
	state = {
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		bio: ""
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.signUp(this.state);
	}

	render() {
		const { auth, authError } = this.props;
		if(auth.uid) return <Redirect to="/"/>
		return (
			<div className="container mt-4">
				<form onSubmit={this.handleSubmit}>
					<h4 align="center" className="text-white">Cadastrar</h4>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input className="form-control" type="email" id="email" placeholder="exemplo@email.com" onChange={this.handleChange}/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Senha</label>
						<input className="form-control" type="password" id="password" placeholder="Senha" onChange={this.handleChange}/>
					</div>
					<div className="form-group">
						<label htmlFor="firstName">Primeiro Nome</label>
						<input className="form-control" type="text" id="firstName"placeholder="Primeiro nome" onChange={this.handleChange}/>
					</div>
					<div className="form-group">
						<label htmlFor="lastName">Último Nome</label>
						<input className="form-control" type="text" id="lastName" placeholder="Último nome" onChange={this.handleChange}/>
					</div>
					<div className="form-group">
						<label htmlFor="bio">Bio</label>
						<textarea className="form-control" rows="3" id="bio" placeholder="Fale sobre você !" onChange={this.handleChange}/>
					</div>
					<div className="form-group">
						<button className="btn form-control">Cadastrar</button>
						<div className="text-danger text-center mt-2">
							{authError ? <p>{authError}</p> : null}
						</div>
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signUp: newUser => dispatch(signUp(newUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);