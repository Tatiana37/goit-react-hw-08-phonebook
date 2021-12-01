import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuth, component: C}) => {
    return (
        <>
            <h1>Ptivate</h1>
            {isAuth ? <C /> : <Navigate to="/login"/>}
        </>
    )
};
export default PrivateRoute;