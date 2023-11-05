import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Addtodo.css'

const TodoLogin = (props) => {

  const CheckUser = function () {
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if (username !== props.userid || password !== props.passwd) {
      alert(`try to Enter valid username & password 😓. You typed Username: "${username}" and Password "${password}" which is not correct`);
      props.setLoggedin(false)
    }
    else {
      alert(`oh! look 🧐 you have Successfully Logged In.`);
      props.setLoggedin(true)
    }
  }

  return (
    <>

      <h1>Hello this for react login page</h1>
      <form onSubmit={CheckUser}>
        <label>{props.username}</label><br />
        <input type='text' placeholder='Enter your Username' title='username please' id='user' /><br /><br /><br />
        <label>{props.password}</label><br />
        <input type='password' placeholder='Enter your Password' title='Password please' id='pass' /><br /><br />
        {/* <input type='submit' /> */}
        <Button type='submit'>Submit</Button>
      </form>

    </>
  )
}

export default TodoLogin
