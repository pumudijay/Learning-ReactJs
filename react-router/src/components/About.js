import React from 'react';
import './Modal.css';

const About = () => {
    return(
        <div>
            <div className='modal'>
                <div className='modal-content'>
                    <h3>I am modal</h3>
                </div>
            </div>
           <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
            <h3 className='ui header'>About</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lacus non elit auctor dignissim. Nunc laoreet vehicula est lacinia lobortis. Nullam placerat condimentum felis. Etiam eu diam mi. Nam ac turpis auctor, porttitor est a, mollis diam. Proin luctus nunc in arcu accumsan, nec varius quam pharetra. Aenean vel justo vel eros consectetur commodo eget quis urna. Sed tempus sem vitae urna congue, a pellentesque sapien faucibus. Donec vitae ligula in diam bibendum vestibulum tempor nec turpis. Morbi vestibulum tempor mauris, non varius erat dignissim ac. Morbi dapibus diam non risus ullamcorper, ac fringilla magna accumsan. Maecenas ornare dapibus mauris, eu congue justo sollicitudin eu. Suspendisse laoreet mauris non facilisis pulvinar. Fusce vulputate auctor felis in imperdiet.
            </p>
        </div> 
        </div>
        
    )
}

export default About;