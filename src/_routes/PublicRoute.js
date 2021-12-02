import { Navigate } from "react-router-dom";
const PublicRoute = ({ isAuth, component: Component, restricted = false }) => {
    const shouldRedirect = isAuth && restricted;
    return (
        <>
            {shouldRedirect ? <Navigate to="/contacts" /> : <Component />}
        </>
    )
};
export default PublicRoute;