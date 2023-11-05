import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import './TodoList.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const AddTodo = (props) => {

  const AdditUp = (event) => {
    let Form = event.target;
    let TypedData = Form.Add.value;
    event.preventDefault();
    props.WhatToDo({Todo: TypedData,Creator : props.username})
  }
  return (
    <>  
        <form onSubmit={AdditUp}>
          <input type='text' id='Add' placeholder='write✍ your text here'/>
          &nbsp;&nbsp;&nbsp;
          <Button type='submit' className='Add'>Add ➕</Button>
        </form>
    </>
  )
}

export default AddTodo