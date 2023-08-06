import Axios from './axios-instance';


// Login Api
export const loginApi = (data) => {
    let response = Axios.post('/auth/local', data)

    return response;
}

// Signup Api
export const signupApi = (data) => {
    let response = Axios.post('/auth/local/register', data)

    return response;
}

// Get All Orders Api
export const getAllOrdersApi = () => {
    let response = Axios.get('/orders')

    return response;
}

// Get One Order Api
export const getOneOrderApi = (id) => {
    let response = Axios.get(`/orders/${id}`)

    return response;
}


// Create Order Api
export const createOrderApi = (data) => {
    let response = Axios.post('/orders', data)

    return response;
}