import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './TodoList.css'
import AddTodo from './AddTodo'
import * as example from "./Database.json"
let Collection = example;
const TodoList = (props) => {
  const [Useritem, setUseritem] = useState(Collection.users);
  const [Norecord, setNorecord] = useState(Boolean);
  const [userid, setuserid] = useState(0);
  const [setEditor, setsetEditor] = useState({});
  const deletedlist = (event) => {
    var alltheitems = [...Useritem];
    alltheitems.splice(event, 1);
    setUseritem(alltheitems);
    // setuserid(userid-1); 
  }

  const getedittododata = (selectedUserId) => {
    var selectedUser = Useritem.find(
      (event) => {
        // pick the same id as it clicked on
        event.id ==selectedUserId;
      });
      // will take the object using id and store the object in the hook of setEditor
      setsetEditor(selectedUserId);
  }

  const AddTodoList = (check) => {
    return (
      <>
        <div className='tasks'>
          <div className='listed_task'>
            <li><span className='AddedTodos'>{check.UserTyped.Title}</span></li>
            <li>BY: <span className='AddedTodos'>{check.UserTyped.Creator}</span></li>
            <li>id: <span className='AddedTodos'>{check.UserTyped.id}</span></li>
          </div>
          <hr/>
          <div className='edit_delete'>
            <Button className='edit' onClick={(newUser) => { 
              getedittododata(check.UserTyped.id);
               }}>Edit</Button>
            <Button className='delete' onClick={() => deletedlist(check.index)}>Delete</Button>
          </div>
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
        {/* <div className='message-container'>
          <h4><b>`{think.thoughts.Title}`</b></h4>
          <p><q>{think.thoughts.Describe}</q></p>
          <small className='owner'>
            <code>~ {think.thoughts.Creator}</code>
          </small>
        </div> */}
      </>

    );
  }

  return (
    <>
      <div className='header'>
        <p>Welcome Mr. {props.User}</p>
        <Button onClick={() => props.setLoggedin(!props.Loggedin)}>Log Out</Button>
      </div>
      <hr />
      
      
          {/* <div className='Todo'>
        <Button onClick={AddTodo()}>Add To Do</Button>
      </div> */}
          <h3>To Do</h3>
       
        <div className='ListUsers'>

          <div className='Leftpanel'>
            <ul className='unordered'>

              {Norecord === false && <li><p><i><u><code>NO record Found</code></u></i></p></li>}


              {Useritem.map(
                (heading, index) => <AddTodoList UserTyped={heading} index={index} />
              )}
            </ul>
          </div>
          <div className='Rightpanel'>
            <h1>Today's Task</h1>
            {Useritem.map(
              (data) => <TakeALook thoughts={data} />
            )}
            <AddTodo username={props.User} WhatToDo={WriteYourTodo} setNorecord={setNorecord} setuserid = {setuserid} userid = {userid} Editor = {Editor}/>
          </div>

        </div>


    </>
  )
}

export default TodoList
