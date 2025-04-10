// src/components/Task.js
function Task({ task, onDelete }) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button 
        className="delete" 
        onClick={() => onDelete(task.id)}
      >
        X
      </button>
    </div>
  );
}

export default Task;