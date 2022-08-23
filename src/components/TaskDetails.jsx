import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
	const params = useParams();
	const history = useHistory();

	const handleBackButtonClick = () => {
		history.goBack();
	};

	return (
		<>
			<div className="back-button-container">
				<Button onClick={handleBackButtonClick}>Voltar</Button>
			</div>
			<div className="task-details-container">
				<h3>{params.taskTitle}</h3>
				<p>Lorem ipsum dolor sit amet,
					 consectetur adipisicing elit. 
					 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex minima, possimus illo, assumenda architecto amet quam officia repellat dolor ipsa velit quos ratione tenetur error itaque, delectus incidunt fugiat.
					
				</p>
			</div>
		</>
	);
};

export default TaskDetails;