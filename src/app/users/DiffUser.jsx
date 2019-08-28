import React, { Component } from "react";

class SameUser extends Component {
	render() {
		const { user } = this.props;
		if (!user) return <p>Loading</p>;
		else {
			return (
				<div className="container card mt-4 helper">
					<form className="m-1">
						<h4 align="center">Perfil</h4>
						<div className="form-group">
							<label htmlFor="firstName">Primeiro Nome</label>
							<input
								className="form-control"
								type="text"
								id="firstName"
								placeholder={user.firstName}
								onChange={this.handleChange}
								readOnly
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
								readOnly
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
								readOnly
							/>
						</div>
					</form>
				</div>
			);
		}
	}
}

export default SameUser;
