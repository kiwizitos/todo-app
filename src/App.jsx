import { useEffect, useState } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
import TaskDetails from './Components/TaskDetails';

function App() {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');

  //     setTasks(data);
  //   };

  //   fetchData();
  // }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {...task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAdd = (taskTitle) => {
    const newTask = [...tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTask);
  };

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks);
  }

  return (
    <Router>
      <div className='container'>
        <Header />
        <Route 
        path="/" 
        exact 
        render={() => (
          <>
            <AddTask handleTaskAdd={handleTaskAdd} />
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
          </>
        )} 
        />
        <Route path="/:taskTitle" component={TaskDetails}/>
      </div>
    </Router>
  )
}

export default App
