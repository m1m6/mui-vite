// The RequireAuth component ( From ) functionality does not work on nested components so we use the component on the first level

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../store/auth-context";

export default function RequireAuth({ children }) {
    let authCtx = useContext(AuthContext);
    let location = useLocation();

    if (!authCtx.token) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}