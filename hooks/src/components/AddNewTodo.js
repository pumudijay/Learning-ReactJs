import React, { useState } from 'react';

const AddNewTodo = ({ addTodo }) => {
    const[ todos, setTodos ] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();
        addTodo(todos);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>Todo</label>
            <input type='text' value={todos} id='todo' onChange={(e) => setTodos(e.target.value)}></input>
            <input type='submit'></input>
        </form>
    )
}

export default AddNewTodo;