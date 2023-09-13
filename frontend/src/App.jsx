import "./App.css";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TasksList />}></Route>
          <Route path="/tasks" element={<TasksList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
