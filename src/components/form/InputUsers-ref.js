import React, { useState, useRef } from "react";
import styles from "./InputUsers.module.css";
import Button from "../ui/Button";

import Card from "../ui/Card";
import ErrorModal from "../ui/ErrorModal";

// import Wrapper from "../helpers/Wrapper";

const InputUsers = (props) => {
	/* Reading value from DOM (Input) useRef insted of useState is better solution
	useState is clear code but code will be longer*/

	const nameInputRef = useRef();
	const ageInputRef = useRef();

	// const [enteredName, setEnteredName] = useState("");
	// const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	// const enteredNameValue = (event) => {
	// 	setEnteredName(event.target.value);
	// };

	// const enteredAgeValue = (event) => {
	// 	setEnteredAge(event.target.value);
	// };

	const submitHandlers = (event) => {
		event.preventDefault();
		const enteredUserName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;

		if (
			enteredUserName.trim().length === 0 ||
			enteredUserAge.trim().length === 0
		) {
			setError({
				title: "Invalid Input",
				message: "Please enter a valid name and age (non-empty value)",
			});
			return;
		}

		if (+enteredUserAge < 1) {
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

		// console.log(enteredName, enteredAge);

		// Alternative 2
		// props.onSaveUsers(usersData);

		props.onSaveUsers(enteredUserName, enteredUserAge);
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<React.Fragment>
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
							// value={enteredName}
							// onChange={enteredNameValue}
							ref={nameInputRef}
						/>
					</div>
					<div className={styles["form-control"]}>
						<label htmlFor="age">Age (Years)</label>
						<input
							type="number"
							id="age"
							// value={enteredAge}
							// onChange={enteredAgeValue}
							ref={ageInputRef}
						/>
					</div>
					<Button type="submit">Add new user</Button>
				</form>
			</Card>
		</React.Fragment>
	);
};

export default InputUsers;
