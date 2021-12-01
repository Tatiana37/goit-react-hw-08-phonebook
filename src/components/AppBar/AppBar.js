import { useSelector } from "react-redux";
import AuthMenu from "../AuthMenu/AuthMenu";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import { getIsAuth } from "../../redux/Auth/auth-selectors";

const AppBar = () => {
    const isAuth = useSelector(getIsAuth);
    console.log(isAuth)
    return (
        <header>
            <Navigation />
            {isAuth ? <UserMenu /> : <AuthMenu />}
        </header>
    )
}
export default AppBar;
