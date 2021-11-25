import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../redux/Auth/auth-selectors";

const PrivateRoute = ({ component: Component }) => {
    const isAuth = useSelector(getIsAuth);
    return (
        <>
            <h1>Ptivate</h1>
            {isAuth ? <Component/> : <Navigate to="/login"/>}
        </>
    )
};
export default PrivateRoute;