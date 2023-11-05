import React from 'react'
import Button from 'react-bootstrap/esm/Button';
// import './TodoList.css'
import './Addtodo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const AddTodo = (props) => {

  const AdditUp = (event) => {
    let Form = event.target;
    let Objective = Form.Add.value;
    let Desc = Form.desc.value;
    event.preventDefault();
    props.WhatToDo({ Title: Objective, Describe : Desc, Creator: props.username })
  }
  return (
    <>
      <form onSubmit={AdditUp}>
          <input type='text' id='Add' className='Title' placeholder='write✍ your ToDo Title here'/>
          <br/>
          <input type='text' id='desc' className='Title' placeholder='Describe✍ your Task here'/>
          
          <Button type='submit' className='Add'>Add ➕</Button>
        </form>
      {/* <form onSubmit={AdditUp}>
        <label htmlFor="Add">Title</label>
        <input type="text" id="add" name="title" placeholder="Write your text here" />
        
        <label htmlFor="desc">Description</label>
        <input type="text" id="Add" name="description" placeholder="Describe your todo" />
        
        <label htmlFor="task">Tasks Status</label>
        <select id="Add" name="taskStatus">
          <option value="--Select--">--Select--</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <br />
        <label htmlFor="status">Status</label>
        <br />
        
        <input type="radio" id="Add" name="status" value="Active" />
        <label>Active</label> 
        <br/>
        <input type="radio" id="Add" name="status" value="Deactive" />
        <label>Deactive</label>
        <br/>
        <label htmlFor="due">Due Date</label>
        <input type="text" id="Add" name="dueDate" placeholder="Enter the Due Date" />

        &nbsp;&nbsp;&nbsp;

        <Button type="submit" className="Add">Add ➕</Button>
      </form> */}

    </>
  )
}

export default AddTodo