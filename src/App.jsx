import './App.css'
import TodoInput from './TodoInput'
import { TodoList } from './TodoList'
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([{ id : 1 , value : 'Learn React' }]);

  function addTodo (value) {
    if(value) {
      setTodos([...todos, { id : todos.length + 1, value  }]);
    }
  }

  return (
    <>
      <TodoInput onSubmit={addTodo}/>

      <TodoList listOfTodos={todos}/>

    </>
  )
}

export default App
