import React, {useState} from 'react';
import AddNewTodo from './AddNewTodo';

const TodoList = (text) => {
    const [todos, setTodos] = useState([
        {text:'Pay bills', id:1 },
        {text:'Do homework', id:2 },
        {text:'Feed the dog', id:3 },
    ]);
const addToDo = (text) => {
    setTodos([
        ...todos,
        { text, id:Math.random() }
    ]);
}

    return(
        <div>
            <ul>
                {
                    todos.map((todo) => {
                        return(
                        <li key={todo.id}>{todo.text}</li>
                        )
                    })
                }
            </ul>
            <AddNewTodo addTodo={addToDo}/>
        </div>
    )
}

export default TodoList;