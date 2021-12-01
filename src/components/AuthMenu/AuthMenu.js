import React from 'react';
import { NavLink } from 'react-router-dom';
const AuthMenu = () => {
    return (
        <div>
            <ul>
                <li>
            <NavLink
                to="/register"
                
            >
                Register
                </NavLink>
                </li>

                <li>
            <NavLink
                to="/login"
                
            >
                Login
            </NavLink>
                </li>
            </ul>
            
        </div>
    )
}

export default AuthMenu;