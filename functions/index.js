const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const createNotification = notification => {
	return admin
		.firestore()
		.collection("notifications")
		.add(notification)
		.then(doc => {
			console.log("notification added", doc);
		});
};

exports.postCreated = functions.firestore
	.document("posts/{postId}")
	.onCreate(doc => {
		const post = doc.data();
		const notification = {
			content: "Criou um novo post",
			userName: `${post.authorFirstName} ${post.authorLastName}`,
			userId: post.authorId,
			time: admin.firestore.FieldValue.serverTimestamp()
		};

		return createNotification(notification);
	});

exports.newUserJoined = functions.firestore
	.document("users/{userId}")
	.onCreate(doc => {
		const newUser = doc.data();
		const notification = {
			content: "Criou uma conta",
			userName: `${newUser.firstName} ${newUser.lastName}`,
			userId: newUser.uid,
			time: admin.firestore.FieldValue.serverTimestamp()
		};

		return createNotification(notification);
	});
