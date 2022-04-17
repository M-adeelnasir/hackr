import axios from 'axios'
export const addUser = async (name, email, password) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_API_REQUEST_URL}/register`,
        { name, email, password }
    )
}

export const activateAccount = async (token) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_API_REQUEST_URL}/register/activate`,
        { token }
    )
}


export const loginUser = async (email, password) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_REQUEST_URL}/login`,
        { email, password }
    )
}


//midleware
export const checkAuths = async (authToken) => {
    return await axios.get(`${process.env.NEXT_PUBLIC_API_REQUEST_URL}/user`,
        {
            headers: {
                authorization: `Bearer ${authToken}`,
                contentType: 'application/json'

            }
        }
    )
}
