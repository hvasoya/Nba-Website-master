import React from 'react';
import logo from '../assets/nba.webp'


const Home = () => {
    return (

        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                border: '1px solid rgba(0, 0, 0, 0.05)'
            }}
        >
            <img style={{
                display: 'flex',
                justifyContent: 'normal',
                alignItems: 'center',
                height: '75vh',
                width: '3000',
                fontStretch: 'extra-condensed',
                alignSelf: 'stretch',
                paddingTop: '50px',
                paddingLeft: '50px',
                paddingRight: '1px',
            }} src={logo} alt="logo" />,
            <h1 style={{
                display: 'inline-block',
                height: '100vh',
                paddingRight: '500px'
             


            }} >Welcome to NBA Database</h1>
        </div>
    );
};

export default Home;
