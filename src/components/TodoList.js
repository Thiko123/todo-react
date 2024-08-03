import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo =todo =>{
        if(!todos.text|| /^\s*$/.test(todo.text)){
         return;   
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(todo, ...todos)
    }
  return (
    <div>
        <h1>
            How would you like to spend your day today?
        </h1>
        <TodoForm onSubmit={addTodo}/>
    </div>
  )
}

export default TodoList