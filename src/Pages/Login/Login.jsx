import { yupResolver } from "@hookform/resolvers/yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import AuthContext from "../../store/auth-context";
import axios from "../../utility/axios-instance";
import { loginSchema } from "../../utility/validationSchemas";

const AuthlWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 30px;
    max-width: 100%;
`;
const FormHeading = styled.h2`
    font-size: 32px;
    line-height: 37px;
    font-weight: 700;
    margin-bottom: 26px;
    text-align: center;
`;
const FormBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 280px;
    margin: 0 auto;
    text-align: center;
`;

const ErrorMessage = styled.p`
    font-size: 14px;
    line-height: 1.4;
    margin-top: 10px;
    text-align: center;
    text-transform: capitalize;
    color: #df1338;
`;
const AppVersion = styled.h6`
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    color: #bbb;
    margin-bottom: 46px;
    text-align: center;
`

const Auth = (props) => {
    const authCtx = useContext(AuthContext);
    const { login } = authCtx;

    let location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const [ submitting, setSubmitting ] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null);

    const {
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm({
        mode: 'onChange',
        criteriaMode: "all",
        resolver: yupResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    const submitHandler = (data) => {
        // 'admin@example.com' should be the email
        // '123456' should be the password
        setSubmitting(true)
        axios
        .post("/auth/local", {
            identifier: data.username,
            password: data.password,
        })
        .then((res) => {
                login(res.data.jwt, res.data.user);
                navigate(from, { replace: true });
            })
            .catch((err) => {
                setSubmitting(false)
                setErrorMessage(err.response.data.message[0].messages[0].message);
            });
    };

    return (
        <AuthlWrapper>
            <form onSubmit={handleSubmit(submitHandler)}>
                <FormHeading>Login to your Account</FormHeading>
                <AppVersion>{`${import.meta.env.PACKAGE_VERSION}`}</AppVersion>
                <FormBody>
                    <Controller name="username" control={control} render={({ field }) => ( 
                        <TextField id="Username" label="Username" variant="outlined" error={!!errors.username?.message} helperText={ errors.username?.message } {...field} /> 
                    )} />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <FormControl  variant="outlined">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    error={!!errors.password?.message} {...field} 
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                                {errors.password?.message &&<FormHelperText id="password-error-text" error >{errors.password?.message}</FormHelperText>}
                            </FormControl>
                        )}
                    />
                    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                    <LoadingButton disabled={!isValid} loading={submitting} variant="contained" type="submit">
                        Login
                    </LoadingButton>
                </FormBody>
            </form>
        </AuthlWrapper>
    );
};

export default Auth;
