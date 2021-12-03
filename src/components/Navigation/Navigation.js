import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuth } from '../../redux/Auth/auth-selectors';
import s from '../Navigation/Navigation.module.css';

const Navigation = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <div className={s.navBox}>
      <nav>
        <ul className={s.navList}>
          <li className={s.item}>
            <NavLink
              className={({ isActive }) => (isActive ? s.navActive : s.navLink)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          {isAuth && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? s.navActive : s.navLink
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
