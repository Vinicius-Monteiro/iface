import React, { Component } from "react";
import { editProfile } from "../../store/actions/authActions";
import { connect } from "react-redux";

class SameUser extends Component {
	state = {
		firstName: "",
		lastName: "",
		bio: "",
		error: null,
		uid: this.props.id
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		if (!this.state.firstName || !this.state.lastName || !this.state.bio) {
			this.setState({ error: true });
		} else {
			this.setState({ error: false });
			this.props.editProfile(this.state);
		}
	};

	render() {
		const { user } = this.props;
		let err = null,
			str = null;
		if (this.state.error === false && this.state.error !== null) {
			err = <p>Perfil Editado !</p>;
			str = "text-success";
		} else if (this.state.error === true && this.state.error !== null) {
			err = <p>Os campos não podem estar vazios !</p>;
			str = "text-danger";
		}
		if (!user) return <p>Loading</p>;
		else {
			return (
				<div className="container card mt-4 helper">
					<form onSubmit={this.handleSubmit} className="m-1">
						<h4 align="center">Perfil</h4>
						<div className="form-group">
							<label htmlFor="firstName">Primeiro Nome</label>
							<input
								className="form-control"
								type="text"
								id="firstName"
								placeholder={user.firstName}
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="lastName">Último Nome</label>
							<input
								className="form-control"
								type="text"
								id="lastName"
								placeholder={user.lastName}
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="bio">Bio</label>
							<textarea
								className="form-control"
								rows="3"
								id="bio"
								placeholder={user.bio}
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<button className="btn form-control">
								Editar Perfil
							</button>
							<div className={"text-center mt-2 " + str}>
								{err}
							</div>
						</div>
					</form>
				</div>
			);
		}
	}
}

const mapDispatchToProps = dispatch => {
	return {
		editProfile: user => dispatch(editProfile(user))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(SameUser);
