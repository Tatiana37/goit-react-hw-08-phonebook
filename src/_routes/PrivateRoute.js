import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuth, component: C}) => {
    return (
        <>
            {isAuth ? <C /> : <Navigate to="/login"/>}
        </>
    )
};
export default PrivateRoute;