import "./App.css";
import Header from "./components/Header";
import Registration from "./components/Registration";
import Task from "./components/Task";
import TasksList from "./components/TasksList";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TasksList />}></Route>
          <Route path="/tasks" element={<TasksList />}></Route>
          <Route path="/add-task" element={<Task />}></Route>
          <Route path="/update-task/:id" element={<Task />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
