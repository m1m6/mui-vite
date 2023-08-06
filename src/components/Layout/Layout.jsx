import "react-toastify/dist/ReactToastify.css";
import { StyledToastifyContainer } from '../UI/StyledToastContainer/StyledToastContainer.styled';
import { Main } from "./Layout.styled";



const Layout = props => {

    return (
        <Main dir={props.dir}>
            <StyledToastifyContainer 
                position="bottom-right" autoClose={4000} hideProgressBar={true} 
                newestOnTop={false} closeOnClick rtl={false} pauseOnHover={false} 
                progress={undefined}  draggable={false}
            />
            {props.children}
        </Main>
    )
};


export default Layout;