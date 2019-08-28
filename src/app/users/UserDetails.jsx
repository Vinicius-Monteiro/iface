import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import SameUser from "./SameUser";
import DiffUser from "./DiffUser";

const UserDetails = props => {
	const { id, user, auth } = props;
	const same = props.auth.uid === props.id;
	return (
		<div className="container-fluid mt-2">
			{same ? <SameUser id={id} user={user} auth={auth} /> : <DiffUser id={id} user={user} auth={auth} />}
		</div>
	)
};

const mapStateToProps = (state, ownProps) => {
	return {
		id: ownProps.match.params.id,
		user: state.firestore.data.users ? state.firestore.data.users[ownProps.match.params.id] : null,
		auth: state.firebase.auth
	};
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: "users" }])
)(UserDetails);
