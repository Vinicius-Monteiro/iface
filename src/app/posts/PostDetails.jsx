import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { Link } from "react-router-dom";

const PostDetails = props => {
	const { post, auth } = props;
	if (!auth.uid) return <Redirect to="/signin" />;

	if (post) {
		return (
			<div className="container section project-details mt-2">
				<div className="card">
					<h5 className="card-header" align="center">
						{post.title}
					</h5>
					<div className="card-body">
						<p className="card-text">{post.content}</p>
					</div>
					<div className="card-footer">
						<div>
							Postado por
							<span>
								{" "}
								<Link className="handle" to={"/user/" + post.authorId}>
									{post.authorFirstName} {post.authorLastName}{" "}
								</Link>
							</span>
							<div className="text-muted">
								{moment(post.createdAt.toDate()).calendar()}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container mt-2">
				<p>Loading project...</p>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	//console.log(state);
	const id = ownProps.match.params.id;
	const posts = state.firestore.data.posts;
	const post = posts ? posts[id] : null;
	return {
		post: post,
		auth: state.firebase.auth
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: "posts" }])
)(PostDetails);
