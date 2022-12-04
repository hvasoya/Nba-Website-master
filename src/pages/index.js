import React from 'react';
import logo from '../assets/nba.webp'


const Home = () => {
    return (

        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '85vh',
                border: '1px solid rgba(0, 0, 0, 0.05)'
            }}
        >
             
            <img style={{
                display: 'flex',
                justifyContent: 'normal',
                alignItems: 'center',
                height: '90vh',
                width: '300',
                fontStretch: 'extra-condensed',
                alignSelf: 'stretch',
                paddingTop: '0px',
                paddingLeft: '0px',
                paddingRight: '10px',
            }} src={logo} alt="logo" />,

            <section>
                 <h1> Welcome to the NBA Database!</h1>
                 <button type="button" to='/nbaplayer'>  
                    Check out the NBA Players Page
                </button>
            </section>
                
        </div>
    );
};

export default Home;
