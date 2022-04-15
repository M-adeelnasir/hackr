import Layouts from "../components/Layouts"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { addUser } from "../components/requests/user"
import { isAuth } from "../components/helpers/auth"


const Register = () => {

    const router = useRouter()
    useEffect(() => {
        isAuth() && router.push('/')
    })


    const [state, setState] = useState({
        name: "Adeel Nasir",
        email: "adnasirkbw@gmail.com",
        password: "123456hjh",
        error: "",
        success: "",
        buttonText: "Register",
        loading: false
    })



    const { name, email, password, error, success, buttonText, loading } = state

    const handleOnChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value, success: "", error: "", buttonText: "Register" })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setState({ ...state, loading: true })
        try {
            const res = await addUser(name, email, password)
            // console.log(res);
            setState({
                ...state,
                name: "",
                email: "",
                password: "",
                buttonText: "Submitted",
                success: res.data.data,
                loading: false
            })
        } catch (err) {
            // console.log(err.response);
            if (err.response.data.errors) {
                // console.log(err.response.data.errors);
                setState({ ...state, buttonText: "Register", error: err.response.data.errors })
                return
            }
            setState({ ...state, buttonText: "Register", error: err.response.data.data })
        }
    }

    const form = () => <form onSubmit={handleSubmit} className='mt-3'>
        <div className="form-group ">
            <input className="form-control" placeholder="Enter Your Name" type="text" name="name" value={name} onChange={handleOnChange} />
        </div>
        <div className="form-group mt-3 mb-2">
            <input className="form-control" placeholder="Enter Your Email" type="email" name="email" value={email} onChange={handleOnChange} />
        </div>
        <div className="form-group mt-3 mb-2">
            <input className="form-control" placeholder="Enter Your Password" type="password" name="password" value={password} onChange={handleOnChange} />
        </div>

        {loading ?

            <div className="d-flex justify-content-center mt-3 mb-2">
                <div className="spinner-border text-warning" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>

            : <button className="btn btn-outline-warning btn-block mt-3 mb-2">{buttonText}</button>}


        {error && <div className="alert alert-danger pt-1 pb-1 text-center" role="alert">
            {error}
        </div>}

        {success && <div className="alert alert-info pt-1 pb-1 text-center" role="alert">
            {success}
        </div>}

    </form>


    return (
        <Layouts>

            <div className="col-md-6 offset-md-3">
                <h1>Register</h1>
                {form()}
                <hr />
                {/* {JSON.stringify(state)} */}
            </div>
        </Layouts>
    )
}

export default Register