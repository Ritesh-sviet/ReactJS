import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './TodoList.css'
import AddTodo from './AddTodo'
import * as example from "./Database.json"
let Collection = example;
const TodoList = (props) => {
  const [Useritem, setUseritem] = useState(Collection.users);

  const AddYourTodo = (para) => {
    para.id = Useritem.length + 1;
    setUseritem([...Useritem, para]);
  }

  const TakeALook = (think) => {
    return (

      <>
        <div className='message-container'>
          <h4><q>{think.thoughts.Todo}</q></h4>
        </div>
      </>

    );
  }

  return (
    <>

      {/* <p>Welcome Mr. {props.User}</p>
        <h1>This is another file for TodoList</h1>
        <p>Here we will create our List and other tasks</p> */}
      {/* console.log(props.Loggedin); */}

        <p>Welcome Mr. {props.User}</p>
        <div className='ListUsers'>
          <div className='Leftpanel'>
            <ul>
              <li><Button className='AddedTodos'>Hello</Button></li>
              <li><Button className='AddedTodos'>Hello</Button></li>
              <li><Button className='AddedTodos'>Hello</Button></li>
              <li><Button className='AddedTodos'>Hello</Button></li>
              <li><Button className='AddedTodos'>Hello</Button></li>
            </ul>
          </div>
        </div>
        <div className='Rightpanel'>
          <h1>Todday's Task</h1>
          {Useritem.map(
            (data) => (<TakeALook thoughts={data} />)
          )}
          <AddTodo username={props.User} WhatToDo={AddYourTodo} />
        </div>
      
        <Button onClick={() => props.setLoggedin(!props.Loggedin)} className='Logout'>Log Out</Button>
    </>
  )
}

export default TodoList
