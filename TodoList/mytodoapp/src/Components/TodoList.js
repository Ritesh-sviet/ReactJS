import React from 'react'

const TodoList = (props) => {
  return (
    <>
        <>Welcome Mr. {props.User}</>
        <h1>This is another file for TodoList</h1>
        <p>Here we will create our List and other tasks</p>
        <button onClick={() => props.setLoggedin(!props.Loggedin)}>Log Out</button>
        {/* console.log(props.Loggedin); */}
    </>
  )
}

export default TodoList
