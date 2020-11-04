import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

class TodoList extends React.Component {
    static contextType = ThemeContext;

    render(){
        const { isDarkTheme, darkTheme, lightTheme } = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;

        return(
            <div style={{background:theme.background, color:theme.text, height:'140px', textAlign:'center'}}>
                <p className='item'>Plan a family trip</p>
                <p className='item'>Go for shopping for dinner</p>
                <p className='item'>Go for a walk</p>
            </div>
        )
    }
}
export default TodoList;