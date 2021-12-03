import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../AuthMenu/AuthMenu.module.css';
const AuthMenu = () => {
  return (
    <div className={s.authBox}>
      <ul className={s.authList}>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.authActive : s.authLink)}
            to="/register"
          >
            Register
          </NavLink>
        </li>

        <li className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.authActive : s.authLink)}
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthMenu;
