
import { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  function addTask() {
    if (task.trim() === '') return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false
      }
    ]);

    setTask('');
  }

  function toggleTask(id) {
    setTasks(tasks.map(item =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    ));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(item => item.id !== id));
  }

  return (
    <div>
      <h1>To-Do List</h1>

      <input
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(item => (
          <li key={item.id}>
            <span
              onClick={() => toggleTask(item.id)}
              style={{
                textDecoration: item.completed
                  ? 'line-through'
                  : 'none'
              }}
            >
              {item.text}
            </span>

            <button onClick={() => deleteTask(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
