import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/tasks";

export const getAllTasks = () => axios.get(BASE_REST_API_URL);

export const addTask = (task) => axios.post(BASE_REST_API_URL, task);
