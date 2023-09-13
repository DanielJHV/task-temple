import { useEffect, useState } from "react";
import { getAllTasks } from "../services/TaskService";

function TasksList() {
  //   const date = new Date();
  //   const now = 5;

  useEffect(() => {
    listTasks();
  }, []);

  function listTasks() {
    getAllTasks()
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const [tasks, setTasks] = useState([]);

  return (
    <div className="tasks-list">
      <h1 className="heading-primary">Tasks</h1>
      {/* <p className="greeting">
        {now >= 5 && now < 12
          ? "Good morning!"
          : now > 12 && now < 18
          ? "Good afternoon!"
          : "Good evening!"}
      </p> */}

      <div className="btn-add-box">
        <button className="btn-add">Add task</button>
      </div>
      {tasks.map((task) => {
        return (
          <div className="task">
            <span
              className={`task-status ${
                task.completed ? "task-completed" : "task-pending"
              } `}
            >
              {task.completed ? "Completed" : "Pending"}
            </span>

            <div className="task-text">
              <span className="task__title">{task.title}</span>
              <p className="task__description">{task.description}</p>
            </div>

            <div className="task-options">
              <button className="task__btn">
                <img src="/src/assets/refresh-btn.svg" alt="Restart button" />
              </button>

              <button className="task__btn">
                <img src="/src/assets/delete-btn.svg" alt="Delete button" />
              </button>
              <button className="task__btn">
                <img src="/src/assets/edit-btn.svg" alt="Edit button" />
              </button>
              <button className="task__btn">
                <img src="/src/assets/complete-btn.svg" alt="Complete button" />
              </button>
            </div>
          </div>
        );
      })}
      <div></div>
    </div>
  );
}

export default TasksList;
