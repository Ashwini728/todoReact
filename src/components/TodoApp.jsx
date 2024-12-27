import React, { useState } from 'react';
import "./TodoApp.css";
function TodoApp(){
  const[tasks,setTasks]=useState([]);
  const[newTasks,setNewTask]=useState("");

  function handleaddlist(event){
       
    setNewTask(event.target.value);
  }
    function addtask(){
        if(newTasks.trim()!==""){
          setTasks(t=>[...t,newTasks]);
          setNewTask("")
        }
        }
    function deltask(index){
        const updatedTasks = tasks.filter((element,i)=>i!==index);
        setTasks(updatedTasks);
    }
    return(
      <>
      <div className='todo'>
      <h1>TodoApp</h1>
      <input type="text" placeholder='Enter the task...' onChange={handleaddlist}/>
      <button onClick={addtask}>ADD</button>
      <ul>
        { tasks.map((task,index)=>
         <li key={index}>
             {task}
          <button className='bu' onClick={()=>deltask(index)}>del </button>
         </li>
        )}
      </ul>
      </div>
      </>
    )
  }

export default TodoApp;