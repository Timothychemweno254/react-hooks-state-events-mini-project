// src/components/TaskList.js
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task 
          key={task.id}  // Make sure this key is unique
          task={task}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;