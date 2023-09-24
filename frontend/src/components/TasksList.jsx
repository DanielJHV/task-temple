import { useEffect, useState } from "react";
import {
  completeTask,
  deleteTask,
  getAllTasks,
  refreshTask,
} from "../services/TaskService";
import { useNavigate } from "react-router-dom";

function TasksList() {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

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

  function addNewTask() {
    navigate("/add-task");
  }

  function updateTask(id) {
    navigate(`/update-task/${id}`);
  }

  function removeTask(id) {
    deleteTask(id)
      .then((response) => {
        listTasks();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function markAsCompleted(id) {
    completeTask(id)
      .then((response) => {
        listTasks();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function markAsPending(id) {
    refreshTask(id)
      .then((response) => {
        listTasks();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="tasks-list">
      <h1 className="heading-primary">Tasks</h1>

      <div className="btn-add-box">
        <button className="btn-add" onClick={addNewTask}>
          Add task
        </button>
      </div>
      {tasks.map((task) => {
        return (
          <div className="task" key={task.id}>
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
              <button
                className="task__btn"
                onClick={() => markAsPending(task.id)}
              >
                <img src="images/refresh-btn.svg" alt="Restart button" />
              </button>

              <button className="task__btn" onClick={() => removeTask(task.id)}>
                <img src="images/delete-btn.svg" alt="Delete button" />
              </button>
              <button className="task__btn" onClick={() => updateTask(task.id)}>
                <img src="images/assets/edit-btn.svg" alt="Edit button" />
              </button>
              <button
                className="task__btn"
                onClick={() => markAsCompleted(task.id)}
              >
                <img
                  src="images/assets/complete-btn.svg"
                  alt="Complete button"
                />
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
