import './App.css'
import TodoInput from './TodoInput'
import { TodoList } from './TodoList'
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo (value) {
    if(value) {
      setTodos([...todos, { id : todos.length + 1, value  }]);
    }
  }

  function deleteTodo (id) {
    console.log(todos);
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  
  return (
    <>
      <TodoInput onSubmit={addTodo}/>

      <TodoList listOfTodos={todos} onDeleteTodo={deleteTodo}/>

    </>
  )
}

export default App
