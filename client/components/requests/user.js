import axios from 'axios'
export const addUser = async (name, email, password) => {
    return await axios.post(`http://localhost:4000/api/v1/register`,
        { name, email, password }
    )
}