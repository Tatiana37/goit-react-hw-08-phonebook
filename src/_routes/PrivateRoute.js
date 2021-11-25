import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuth, component: Component }) => {
    return (
        <>
            <h1>Ptivate</h1>
            {isAuth ? <Component/> : <Navigate to="/login"/>}
        </>
    )
};
export default PrivateRoute;