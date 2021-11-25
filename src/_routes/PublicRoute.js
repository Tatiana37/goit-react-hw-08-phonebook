import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../redux/Auth/auth-selectors";
const PublicRoute = ({ component: Component }) => {
    const isAuth = useSelector(getIsAuth);
    return (
        <>
            <h1>Public</h1>
            {isAuth ? <Navigate to="/" /> : <Component />}
        </>
    )
};
export default PublicRoute;