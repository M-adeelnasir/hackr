import { resetPassword } from "../../../../components/requests/user";
import { useState, useEffect } from 'react'
import jwt from "jsonwebtoken";
import { withRouter } from "next/router";
import Layouts from "../../../../components/Layouts";
import { toast } from "react-toastify";
import Link from "next/link";

const ResetPassdword = (props) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [success, setSuccess] = useState('')


    useEffect(() => {
        if (props.router.isReady) {
            let token = props.router.query.id
            // console.log(token);
            setToken(token)
            const { name } = jwt.decode(token)
            setName(name)
        }
    }, [props.router.isReady])


    const handleSubmite = (e) => {
        e.preventDefault();
        resetPassword(password, token)
            .then((res) => {
                // console.log(res.data.data);
                setSuccess(res.data.data)
                toast.success(res.data.data)
            }).catch((err) => {
                toast.error(err.response.data.errors ? err.response.data.errors : err.response.data.data)
            })
    }

    const form = () => <form onSubmit={handleSubmite}>

        <div className="form-group">
            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn btn-outline-warning w-100 mt-3">Reset</button>

        {success && <div className='mt-2 float-right'>

            <Link href='/login' ><a className='text-danger' >Login</a></Link>
        </div>}
    </form>


    return (
        <Layouts>
            <div className="col-md-6 offset-md-3">
                <h3>Hey, {name}! Submite your new Password</h3>

                {form()}


            </div>

        </Layouts>
    )

}



export default withRouter(ResetPassdword)