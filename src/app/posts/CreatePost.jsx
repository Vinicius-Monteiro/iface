import React, { Component } from 'react';
import {connect} from "react-redux";
import {createPost} from "../../store/actions/postActions";
import {Redirect} from "react-router-dom";

class CreatePost extends Component {
	state = {
		title: "",
		content: ""
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createPost(this.state);
		this.props.history.push("/");
	}

	render() {
		const {auth} = this.props;
		if(!auth.uid) return <Redirect to="/signin"/>

		return (
			<div className="container mt-4">
				<form onSubmit={this.handleSubmit}>
					<h4>Novo Post</h4>
					<div className="form-group">
						<label htmlFor="title">Título</label>
						<input className="form-control" type="text" id="title" onChange={this.handleChange}/>
					</div>
					<div className="form-group">
						<label htmlFor="content">Conteúdo</label>
						<textarea className="form-control" id="content" onChange={this.handleChange}/>
					</div>
					<div className="form-group">
						<button className="btn form-control">Criar Post</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createPost: (post) => dispatch(createPost(post))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);