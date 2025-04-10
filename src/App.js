// src/App.js
import { useState } from "react";
import TaskList from "./components/TaskList";
import CategoryFilter from "./components/CategoryFilter";
import NewTaskForm from "./components/NewTaskForm";

const initialTasks = [
  { id: 1, text: "Buy rice", category: "Food" },
  { id: 2, text: "Save a tenner", category: "Money" },
  { id: 3, text: "Build a todo app", category: "Code" },
  { id: 4, text: "Build todo API", category: "Code" },
  { id: 5, text: "Get an ISA", category: "Money" },
  { id: 6, text: "Cook rice", category: "Food" },
  { id: 7, text: "Tidy house", category: "Misc" },
];

const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const filteredTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(cat => cat !== "All")} 
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;