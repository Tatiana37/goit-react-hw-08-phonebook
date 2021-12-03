import { useSelector } from 'react-redux';
import AuthMenu from '../AuthMenu/AuthMenu';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import { getIsAuth } from '../../redux/Auth/auth-selectors';
import s from '../AppBar/AppBar.module.css';

const AppBar = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <header className={s.header}>
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};
export default AppBar;
