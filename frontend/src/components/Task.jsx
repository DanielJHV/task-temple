import { useState } from "react";
import { addTask } from "../services/TaskService";
import { useNavigate, useParams } from "react-router-dom";

function Task() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  function pageTitle() {
    if (id) {
      return <h2 className="heading-secondary">Edit task</h2>;
    } else {
      return <h2 className="heading-secondary">Add task</h2>;
    }
  }

  function saveTask(e) {
    e.preventDefault();

    const task = { title, description, completed };
    console.log(task);

    addTask(task)
      .then((response) => {
        navigate("/tasks");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form className="form">
      {pageTitle()}

      <div className="form-section">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoComplete="off"
        ></input>
      </div>

      <div className="form-section">
        <label>Description</label>

        <input
          type="text"
          name="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          autoComplete="off"
        ></input>
      </div>

      <div className="form-section">
        <label>Status</label>

        <select
          className="select"
          value={completed}
          onChange={(e) => setCompleted(e.target.value)}
        >
          <option value="false">In progress</option>
          <option value="true">Completed</option>
        </select>
      </div>

      <button className="btn-save" onClick={saveTask}>
        Save task
      </button>
    </form>
  );
}

export default Task;
