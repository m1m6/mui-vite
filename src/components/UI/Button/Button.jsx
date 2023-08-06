import { CustomButton, CustomLinkButton } from "./Button.styled";
import { NavLink } from "react-router-dom";

const Button = ({  children, ...props }) => {
    if (props.link) {
        return (
            <NavLink to={props.link}>
                <CustomLinkButton { ...props } >{children}</CustomLinkButton>
            </NavLink>
        );
    }

    return <CustomButton { ...props } >{children}</CustomButton>;
};
export default Button;
