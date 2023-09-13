import { useState } from "react";

function Task() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let id = 4;
  function pageTitle() {
    if (id) {
      return <h2 className="heading-secondary">Edit task</h2>;
    } else {
      return <h2 className="heading-secondary">Add task</h2>;
    }
  }

  function saveTask(e) {
    e.preventDefault();
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

      <button className="btn-save" onClick={saveTask}>
        Save task
      </button>
    </form>
  );
}

export default Task;
