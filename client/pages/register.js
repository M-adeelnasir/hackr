import Layouts from "../components/Layouts"
import { useState } from "react"
import { addUser } from "../components/requests/user"


const Register = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: "",
        buttonText: "Register"
    })

    const { name, email, password, error, success, buttonText } = state

    const handleOnChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value, error: "", success: "", buttonText: "Register" })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(name, email, password)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })


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

        <button className="btn btn-outline-warning btn-block mt-3 mb-2">{buttonText}</button>

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