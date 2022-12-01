import React from 'react';
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
