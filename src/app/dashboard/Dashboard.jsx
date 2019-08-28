import React, { Component } from "react";
import Notifications from "./Notifications";
import PostList from "../posts/PostList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
	render() {
		const { posts, auth, notifications } = this.props;
		if (!auth.uid) return <Redirect to="/signin" />;
		return (
			<div className="dashboard container-fluid">
				<div className="row">
					<div className="col-12 col-md-8">
						<div className="container-fluid mt-2">
							<div className="row">
								<div className="col-11">
									<PostList posts={posts} />
								</div>
								<div className="col">
									<div className="vl"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4">
						<div className="container-fluid mt-2">
							<Notifications notifications={notifications}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.firestore.ordered.posts,
		auth: state.firebase.auth,
		notifications: state.firestore.ordered.notifications
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: "posts", orderBy: ["createdAt", "desc"]},
		{ collection: "notifications", limit: 7, orderBy: ["time", "desc"]}
	])
)(Dashboard);
