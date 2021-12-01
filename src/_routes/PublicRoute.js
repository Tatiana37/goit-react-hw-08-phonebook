import { Navigate } from "react-router-dom";
const PublicRoute = ({ isAuth, component: Component }) => {
    return (
        <>
            <h1>Public</h1>
            {isAuth ? <Navigate to="/contacts" /> : <Component />}
        </>
    )
};
export default PublicRoute;