
import { useState, useEffect } from 'react'
import { forgotPassword } from '../../../components/requests/user'
import Layouts from '../../../components/Layouts'


const forgot = () => {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        forgotPassword(email).then((res) => {
            setSuccess(res.data.data)
            setLoading(false)
            // console.log(res);
        }).catch(err => {
            // console.log(err.response);
            setError(err.response.data.data)

        })

    }

    const form = () => <form onSubmit={handleSubmit} >
        <div className="form-group">
            <input type="email" className="form-control" autoFocus placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>


        {error && <div className="alert alert-danger pt-1 pb-1 mt-2 text-center" role="alert">
            {error}
        </div>}
        {success && <div className="alert alert-info pt-1 pb-1 mt-2 text-center" role="alert">
            {success}
        </div>}
        {loading ? <button className="btn btn-outline-warning w-100 mt-1 "> Submiting...</button> : <button className="btn btn-outline-warning w-100 mt-1 ">Submite</button>}
    </form>


    return (

        <Layouts>

            <div className="col-md-6 offset-md-3">
                <h3>Forgot Password</h3>
                <br />
                {form()}
            </div>
        </Layouts>
    )
}

export default forgot