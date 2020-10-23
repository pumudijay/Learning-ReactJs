import React from 'react';

class SearchInput extends React.Component {

    state = { entry:'' }

        /*Arrow function bind this to its function*/
    onFormSubmit = ( event) => {
        event.preventDefault()
        console.log(this.state.entry)
    }
    render(){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form' action="">
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input 
                                type="text" 
                                placeholder='search...'
                                onChange={(event) => this.setState({entry: event.target.value})}
                                value={this.state.entry}
                                />                            
                            <i className='search icon'></i>
                        </div>
                    </div>                    
                </form>
            </div>
        )
    }
}

export default SearchInput;