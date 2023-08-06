import { Button, Typography } from "@mui/material";
import { Fragment } from "react";
import AuthContext from "../../store/auth-context";
import {useContext} from "react";

const Home = ( ) => {
    const authCtx = useContext(AuthContext);
    const { logout, user } = authCtx;
    return (
        <Fragment>
            <Typography>
                {`Home Page Welcome ${user.username} !!`}
            </Typography>
            <Button onClick={logout}>Log out</Button>
        </Fragment>
        
    )
}
export default Home;