import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import UserCard from './UserCard';
import profile1 from './images/image1.jpg';
import profile2 from './images/image2.jpg';
import profile3 from './images/image3.jpg';

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <div>Hello im Alex from Mexico</div>
            </UserCard>
            <UserCard>
            <SingleComment 
                name='Sarah' 
                date='Yesterday 5:00PM'
                text='It is amazing'
                profile={profile1}/>
            </UserCard>
            <UserCard>
            <SingleComment 
                name='Jack' 
                date='Today 3:00PM'
                text='Great job!!'
                profile={profile2}/>
            </UserCard>
            <UserCard>
            <SingleComment 
                name='Mike' 
                date='Today 4:00PM'
                text='Thanks....'
                profile={profile3}/>
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)