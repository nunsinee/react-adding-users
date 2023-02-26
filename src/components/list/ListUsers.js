import React from "react";
import styles from "./ListUsers.module.css";
import ItemUsers from "../item/ItemUsers";

const ListUsers = (props) => {
	if (props.data.length === 0) {
		return <h2> Found NO data!</h2>;
	}
	return (
		<ul className={styles["users-list"]}>
			{props.data.map((user) => (
				<ItemUsers
					key={user.id}
					id={user.id}
					onDelete={props.onDeleteitem}
				>
					<b>Name:</b> {user.name}
					<b> Age:</b>
					{user.age}
				</ItemUsers>
			))}
		</ul>
	);
};

export default ListUsers;
