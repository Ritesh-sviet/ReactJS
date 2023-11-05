import React from 'react'

const TodoList = (props) => {
  return (
    <>
      <>Welcome Mr. {props.User}</>
      <h1>This is another file for TodoList</h1>
      <p>Here we will create our List and other tasks</p>
      <button onClick={() => props.setLoggedin(!props.Loggedin)} variant="primary">Log Out</button>{' '}
      {/* console.log(props.Loggedin); */}
      <div className='ListTodos'>
        <table>
          <thead>
            <th>Todos</th>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default TodoList
