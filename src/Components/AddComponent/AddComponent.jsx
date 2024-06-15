import { useEffect, useState } from "react";
import "./styles.css";

export default function AddComponent({
	taskBox,
	setTaskBox,
	taskCount,
	setTaskCount,
	setformVisibility,
}) {
	const [taskName, setTaskName] = useState("");
	const [taskDescription, setTaskDescription] = useState("");

	const handleTaskChange = (e) => {
		setTaskName(e.target.value);
	};
	const handleTaskDescriptionChange = (e) => {
		setTaskDescription(e.target.value);
	};
	const handleAddTask = (taskName, taskDescription) => {
		if (taskName !== "" && taskDescription !== "") {
			const taskObj = { taskName, taskDescription };

			setTaskBox((current) => {
				return [taskObj, ...current];
			});
		}
		setTaskName("");
		setTaskDescription("");
	};

	const handleReturn = () => {
		setformVisibility(false);
	};

	useEffect(() => {
		setTaskCount(taskBox.length);
	}, [taskBox]);

	return (
		<div className="add--container">
			<form className="add--input-container">
				<label
					htmlFor="task-name"
					className="label-box"
				>
					Task
				</label>
				<br />
				<input
					type="text"
					className="input-box"
					name="task-name"
					id="task-name"
					maxLength={15}
					value={taskName}
					onChange={(e) => handleTaskChange(e)}
				/>
				<br />
				<label
					htmlFor="task-description"
					className="label-box"
				>
					Description
				</label>
				<br />
				<input
					type="text"
					className="input-box"
					name="task-description"
					id="task-description"
					value={taskDescription}
					onChange={(e) => handleTaskDescriptionChange(e)}
				/>
			</form>
			<p className="box">Task added</p>
			<button
				className="add--task-button"
				onClick={() => handleAddTask(taskName, taskDescription)}
			>
				Add Task
			</button>
			<button
				className="add--task-button"
				onClick={() => handleReturn()}
			>
				Done
			</button>
		</div>
	);
}
