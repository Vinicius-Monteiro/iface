export const signIn = credentials => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch({ type: "LOGIN_SUCCESS" });
			})
			.catch(err => {
				dispatch({ type: "LOGIN_ERROR", err });
			});
	};
};

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: "SIGNOUT_SUCCESS" });
			});
	};
};

export const signUp = newUser => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase
			.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then(res => {
				return firestore
					.collection("users")
					.doc(res.user.uid)
					.set({
						firstName: newUser.firstName,
						lastName: newUser.lastName,
						uid: res.user.uid,
						bio: newUser.bio
					});
			})
			.then(() => {
				dispatch({ type: "SIGNUP_SUCCESS" });
			})
			.catch(err => {
				dispatch({ type: "SIGNUP_ERROR", err });
			});
	};
};

export const editProfile = user => {
	return (dispatch, getState, {getFirebase, getFirestore}) => {
		const firestore = getFirestore();

		firestore.collection("users").doc(user.uid).update({
			firstName: user.firstName,
			lastName: user.lastName,
			bio: user.bio
		}).then(() => {
			console.log("document updated");
		})
	}
}