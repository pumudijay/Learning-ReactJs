import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import AuthContextProvider, { AuthContext } from '../context/AuthContext';

class TodoList extends React.Component {
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
}
export default TodoList;