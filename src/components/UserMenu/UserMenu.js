import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../../redux/Auth/auth-operations";
// import { getUsername } from "../../redux/Auth/auth-selectors"
import defaultAvatar from '../../images/user-icon.jpg';
export default function UserMenu() {
    const dispatch = useDispatch();
    // const name = useSelector(getUsername);
    const avatar = defaultAvatar;
    const handleLogout = () => {
        console.log("click")
        dispatch(logOut());
    }
    return (
        <div>
            <img src={avatar} alt="avatar" width="32"/>
            <span>Welcome !</span>
            <button type="button" onClick={handleLogout}>
                Log Out
            </button>
        </div>
    )
}