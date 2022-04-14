import { withRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import Layouts from '../../../components/Layouts'


const ActivateAccount = ({ router }) => {

    const [values, setValues] = useState({
        name: "",
        success: "",
        error: "",
        token: "",

    })
    const { name, success, error, token } = values;


    useEffect(() => {
        // console.log(JSON.stringify(router), null, 4)
        let token = router.query.id;
        //decode the name of user fromtoken
        const { name } = jwt.decode(token)
        setValues({ ...values, name: name, token: token, })
    }, [])


    const handleAvtivate = (e) => {
        e.preventDefault();

    }


    return (
        <Layouts>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3>Thanks'{name} For registration Activate your account!</h3>
                    <br />
                    <button onClick={handleAvtivate} className="btn btn-outline-warning w-100">
                        Activate Account
                    </button>
                </div>
            </div>

            {/* {JSON.stringify(router)} */}

        </Layouts>
    )
}

export default withRouter(ActivateAccount)