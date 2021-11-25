import { Navigate } from "react-router-dom";
const PublicRoute = ({ isAuth, component: Component }) => {
    return (
        <>
            <h1>Public</h1>
            {isAuth ? <Navigate to="/" /> : <Component />}
        </>
    )
};
export default PublicRoute;