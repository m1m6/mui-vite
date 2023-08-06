import * as yup from "yup";

export const loginSchema = yup.object({
    username: yup.string().required("Username is required").min(6, "Username must be at least 6 characters"),
    password: yup.string().min(6, "Password must be at least 6 characters").required('Password is required'),
}).required();