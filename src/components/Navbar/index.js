import React from 'react';
import logo from '../Navbar/lbj.jpg';

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';

const Navbar = () => {
    return (
        //<>
            <Nav>
                <Bars />
                <div style={{
                    width: 1200,
                    height: 'auto',
                    marginLeft: 1,
                    marginTop: 10,
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'flex-start',
                    cursor: 'pointer'
                }}>
                    <img src={logo} style={{
                        width: 60,
                        height: 50
                    }}/>
                </div>
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/nbaplayer' activeStyle>
                        Nbaplayer
                    </NavLink>
                    <NavLink to='/nbasalary' activeStyle>
                        Nbasalary
                    </NavLink>
                    <NavLink to='/nbacoach' activeStyle>
                        Nbacoach
                    </NavLink>
                    <NavLink to='/nbachamp' activeStyle>
                        Nbachamp
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
            </Nav>
        //</>
    );
};

export default Navbar;
