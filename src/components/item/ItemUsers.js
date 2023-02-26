import React from "react";
import styles from "./ItemUsers.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";

const ItemUsers = (props) => {
	const deleteHandler = () => {
		props.onDelete(props.id);
	};
	return (
		<li className={styles["user-item"]}>
			{props.children}

			<RiDeleteBin6Line
				onClick={deleteHandler}
				size={30}
				style={{ color: "white", marginLeft: "1rem" }}
			/>
		</li>
	);
};

export default ItemUsers;
