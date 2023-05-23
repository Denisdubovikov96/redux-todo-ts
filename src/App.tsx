import React from 'react';
import { useAppDispatch, useAppSelector } from './store';
import { addTask, taskSelector, updateTaskStatus } from './store/taskList.module';

import './App.css';
import AddTask from './components/AddTask';
import Task from './components/Task';



function App() {
  const tasks = useAppSelector(taskSelector);
  const dispatch = useAppDispatch();

  
  const sorted = [...tasks].sort((a,b) => {
    if(a.isDone || b.isDone) {
      return Number(a.isDone) - Number(b.isDone)
    }
    
    return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
  })
  
  return (
    <div className="App">
      <div className='container'>
      <h2 className='title'>ADD TASK</h2>
      <AddTask onAdd={(data) => dispatch(addTask(data))}/>
      </div>

      <div className='container'>
        <h2 className='title'>TASKS</h2>
        <div className='list'>

        {sorted.map((task) => {
          
          return(
            <Task
              title={task.title}
              body={task.body}
              status={task.isDone}
              onStatusChange={(status) => dispatch(updateTaskStatus({id: task.id, isDone: status}))}
            />
          )
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
