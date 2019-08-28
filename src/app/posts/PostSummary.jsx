import React from 'react';
import moment from "moment";

const PostSummary = ({post}) => {
	return (
		<div className="card mb-2 project-summary">
			<div className="card-body">
				<h5 className="card-title">{post.title}</h5>
				<p>Postado por {post.authorFirstName} {post.authorLastName}</p>
				<p className="text-muted">{moment(post.createdAt.toDate()).calendar()}</p>
			</div>
		</div>
	);
}

export default PostSummary;