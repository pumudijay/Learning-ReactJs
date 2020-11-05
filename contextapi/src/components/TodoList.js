import React, {useContext, useState} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import AuthContextProvider, { AuthContext } from '../context/AuthContext';
import { TodoListContext } from '../context/TodoListContext';

/*class TodoList extends React.Component {
    static contextType = ThemeContext;

    render(){
        return(
            <AuthContext.Consumer>{(authContext) => {
                return(
                    <ThemeContext.Consumer>{( themeContext ) => {
                        const { isDarkTheme, darkTheme, lightTheme, changeTheme } = themeContext;
                        const { isLoggedIn, changeAuthStatus } = authContext;
                        const theme = isDarkTheme ? darkTheme : lightTheme;
                        return(
                            <div style={{background:theme.background, color:theme.text, height:'140px', textAlign:'center'}}>
                                <h4 
                                    onClick={changeAuthStatus} 
                                    style={{textAlign:'end'}}>
                                        { isLoggedIn ? 'logged in' : 'logged out' }
                                </h4>
                                <p className='item'>Plan a family trip</p>
                                <p className='item'>Go for shopping for dinner</p>
                                <p className='item'>Go for a walk</p>
                                <button className='ui button primary' onClick={changeTheme}>change the theme</button>
                            </div>
                        )
                    }}
    
                    </ThemeContext.Consumer>
                )
            }}
                
            </AuthContext.Consumer>
            
        )
    }
}*/

const TodoList = () => {
    const [todo, setTodo] = useState('');
    const { todos, addTodo, removeTodo } = useContext(TodoListContext);
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
    }

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        removeTodo(id)
    }

    return(
        <div style={{background:theme.background, color:theme.text, textAlign:'center'}}>
            <h4 onClick={changeAuthStatus} style={{textAlign:'end'}}>
                { isLoggedIn ? 'logged in' : 'logged out' }
            </h4>
            {
                todos.length ? (
                    todos.map((todo) => {
                        return <p id={todo.id} key={todo.id} onClick={handleRemoveTodo} className='item'>{todo.text}</p>
                    })
                ) : (
                    <div>You have no todo</div>
                )
            }
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='todo'>Add todo: </label>
                <input type='text' id='todo' onChange={handleChange}></input>
                <input type='submit' value='ADD TODO' className='ui button primary'></input>
            </form>
            <button className='ui button primary' onClick={changeTheme}>change the theme</button>
        </div>
    );
};
export default TodoList;