import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Dashboard from "./dashboard/Dashboard";
import PostDetails from "./posts/PostDetails";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import CreatePost from "./posts/CreatePost";
import UserDetails from "./users/UserDetails";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Dashboard}/>
						<Route path="/post/:id" component={PostDetails}/>
						<Route path="/user/:id" component={UserDetails}/>
						<Route path="/signin" component={SignIn}/>
						<Route path="/signup" component={SignUp}/>
						<Route path="/createpost" component={CreatePost}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
