import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './TodoList.css'
import AddTodo from './AddTodo'
import * as example from "./Database.json"
let Collection = example;
const TodoList = (props) => {
  const [Useritem, setUseritem] = useState(Collection.users);
  // const [AnyList, setAnyList] = useState(false)
  // const [Add, setAdd] = useState(false)
  
  const AddTodoList = (check) => {
    return(
      <>
        <div>
        
        <li><Button className='AddedTodos'>{check.UserTyped.Title}</Button></li>
        </div>
      </>
    )
  }
  
  const WriteYourTodo = (para) => {
    para.id = Useritem.length + 1;
    setUseritem([...Useritem, para]);
  }

  const TakeALook = (think) => {
    return (

      <>
        <div className='message-container'>
          <h4><b>`{think.thoughts.Title}`</b></h4>
          <p><q>{think.thoughts.Describe}</q></p>
          <small className='owner'>
            <code>~ {think.thoughts.Creator}</code> 
          </small>
        </div>
      </>

    );
  }

  return (
    <>
      <div className='header'>
        <p>Welcome Mr. {props.User}</p>
        <Button onClick={() => props.setLoggedin(!props.Loggedin)}>Log Out</Button>
      </div>
      <hr/>

      {/* <div className='Todo'>
        <Button onClick={AddTodo()}>Add To Do</Button>
      </div> */}
      <h3>To Do</h3>
      <div className='ListUsers'>

        <div className='Leftpanel'>
          <ul>
            
            {/* <li><p><i><u><code>NO record Found</code></u></i></p></li> */}
            
            {Useritem.map(
              (heading)=> <AddTodoList UserTyped = {heading} />
            )}
            {/* <li><Button className='AddedTodos'>NO record Found</Button></li> */}
          </ul>
        </div>
        <div className='Rightpanel'>
          <h1>Today's Task</h1>
          {Useritem.map(
            (data) => <TakeALook thoughts={data} />
          )}
          <AddTodo username={props.User} WhatToDo={WriteYourTodo} />
        </div>

      </div>


    </>
  )
}

export default TodoList
