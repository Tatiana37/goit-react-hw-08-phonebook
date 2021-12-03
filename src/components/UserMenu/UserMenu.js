import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { logOut } from '../../redux/Auth/auth-operations';
import { getUsername } from '../../redux/Auth/auth-selectors';
import defaultAvatar from '../../images/user-icon.jpg';
import s from '../UserMenu/UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const avatar = defaultAvatar;
  const handleLogout = () => {
    dispatch(
      logOut(toast.success(`${name}, you have logged out successfully`)),
    );
  };
  return (
    <div className={s.box}>
      <img src={avatar} alt="avatar" width="32" className={s.icon} />
      <span className={s.text}>Welcome {name}!</span>
      <button className={s.btn} type="button" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}
