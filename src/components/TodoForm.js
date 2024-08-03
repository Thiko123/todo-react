import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const handleChange = e => {
        setInput(e.target.value);
      };
      const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
        });
        setInput('');
     };
  return (
    <form className= "todo-form" onSubmit={handleChange}>
        
        <input
        type ='text'
        placeholder='Add to-do'
        value={input}
        name='text'
        onChange= {handleChange}
        className='todo-input'
        />
        <button
        className='todo-button'>
            Add To-Do
        </button>

    </form>
  )
}

export default TodoForm