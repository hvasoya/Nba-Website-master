import React from 'react';
import logo from '/Users/tejassingh/proj412_1/Nba-Website-master/src/assets/bw_logo.png';

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
                    width: 400,
                    height: 'auto',
                    marginLeft: 1,
                    marginTop: 10,
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'flex-start',
                    cursor: 'pointer'
                }}>
                    <img src={logo} style={{
                        marginLeft: -540,
                        width: 150,
                        height: 50
                    }}/>
                </div>
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/nbaplayer' activeStyle>
                        NBA Players
                    </NavLink>
                    <NavLink to='/nbasalary' activeStyle>
                        NBA Player Salaries
                    </NavLink>
                    <NavLink to='/nbateam' activeStyle>
                        NBA Teams
                    </NavLink>
                    <NavLink to='/nbachamp' activeStyle>
                        NBA Championships
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
            </Nav>
        //</>
    );
};

export default Navbar;