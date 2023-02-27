import React, { useState } from "react";
import styles from "./InputUsers.module.css";
import Button from "../ui/Button";

import Card from "../ui/Card";
import ErrorModal from "../ui/ErrorModal";

const InputUsers = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const enteredNameValue = (event) => {
		setEnteredName(event.target.value);
	};

	const enteredAgeValue = (event) => {
		setEnteredAge(event.target.value);
	};

	const submitHandlers = (event) => {
		event.preventDefault();

		if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid Input",
				message: "Please enter a valid name and age (non-empty value)",
			});
			return;
		}

		if (+enteredAge < 1) {
			setError({
				title: "Invalid Age",
				message: "Please enter a valid age ( > 0)",
			});
			return;
		}

		// Alternative 2
		// const usersData = {
		// 	name: enteredName,
		// 	age: enteredAge,
		// 	id: Math.random().toString(),
		// };

		console.log(enteredName, enteredAge);

		// Alternative 2
		// props.onSaveUsers(usersData);

		props.onSaveUsers(enteredName, enteredAge);

		setEnteredName("");
		setEnteredAge("");
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card>
				<form onSubmit={submitHandlers}>
					<div className={styles["form-control"]}>
						<label htmlFor="name">UserName</label>
						<input
							type="text"
							id="name"
							value={enteredName}
							onChange={enteredNameValue}
						/>
					</div>
					<div className={styles["form-control"]}>
						<label htmlFor="age">Age (Years)</label>
						<input
							type="number"
							id="age"
							value={enteredAge}
							onChange={enteredAgeValue}
						/>
					</div>
					<Button type="submit">Add new user</Button>
				</form>
			</Card>
		</>
	);
};

export default InputUsers;
