const initState = {
	posts: [
		{
			id: "1",
			title: "primeiro post",
			content: "esse é o primeiro de todos!"
		},
		{
			id: "2",
			title: "segundo post",
			content: "esse é o segundo de todos!"
		},
		{
			id: "3",
			title: "terceiro post",
			content: "esse é o terceiro de todos!"
		}
	]
};

const postReducer = (state = initState, action) => {
	switch (action.type) {
		case "CREATE_POST":
			console.log("created post", action.post);
			return state; 
		case "CREATE_POST_ERROR":
			console.log("create post error", action.err);
			return state;
		default: 
			return state;
	}
};

export default postReducer;
