import React, { useState } from "react";
import "./App.css";
import InputUsers from "./components/form/InputUsers";
import ListUsers from "./components/list/ListUsers";

const App = () => {
	const [usersList, setUsersList] = useState([]);

	// const addUsersHandler = (enteredData) => {
	// 	setUsersList((prevUsers) => {
	// 		const updatedUsers = [...prevUsers];
	// 		updatedUsers.unshift({
	// 			...enteredData,
	// 		});
	// 		return updatedUsers;
	// 	});
	// };

	//alternativ writting code: addUsersHandler
	const addUsersHandler = (uName, uAge) => {
		setUsersList((prevUsers) => {
			return [
				...prevUsers,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};

	const deleteUsersHandler = (userId) => {
		setUsersList((prevUsers) => {
			const updatedUsers = prevUsers.filter((user) => user.id !== userId);
			return updatedUsers;
		});
	};

	let content = (
		<h2 style={{ textAlign: "center", color: "navy" }}>
			No user found here. Maybe add one?
		</h2>
	);

	if (usersList.length > 0) {
		content = (
			<ListUsers data={usersList} onDeleteitem={deleteUsersHandler} />
		);
	}

	return (
		<div className="App">
			<h1>Adding Users and reuseable components</h1>
			<section id="users">
				<InputUsers onSaveUsers={addUsersHandler} />
			</section>
			<section id="users-form">
				{content}
				{/* <ListUsers data={usersList} onDeleteitem={deleteUsersHandler} /> */}
			</section>
		</div>
	);
};

export default App;
