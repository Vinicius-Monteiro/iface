import React from 'react';
import moment from "moment";
import { Link } from "react-router-dom";

const Notifications = (props) => {
	const {notifications} = props;
	return (
		<div className="card my-2">
			<div className="card-body">
				<div className="card-title">Notificações</div>
				<ul className="notifications">
					{notifications && notifications.map(item => {
						return (
							<li key={item.id}>
								<Link to={"/user/" + item.userId}>
									<span className="handle">{item.userName} </span>
								</Link>
								<span>{item.content}</span>
								<div className="text-muted">
									{moment(item.time.toDate()).fromNow()}
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Notifications;