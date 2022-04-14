import { withRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import Layouts from '../../../components/Layouts'
import { activateAccount } from '../../../components/requests/user'

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


    const handleAvtivate = async (e) => {
        e.preventDefault();

        try {
            const res = await activateAccount(token)
            console.log(res);
            setValues({ ...values, success: res.data.data })

        } catch (err) {
            console.log(err);
            setValues({ ...values, error: err.data.data })
        }

    }


    return (
        <Layouts>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Thanks'<span className='text-warning'>{name}</span> For registration Plesase Activate your account!</h4>
                    <br />
                    {success ?
                        (<button onClick={handleAvtivate} className="btn btn-outline-warning w-100">
                            Activated
                        </button>)
                        :
                        <button onClick={handleAvtivate} className="btn btn-outline-warning w-100">
                            Activate Account
                        </button>
                    }
                </div>
            </div>

            {/* {JSON.stringify(router)} */}

        </Layouts>
    )
}

export default withRouter(ActivateAccount)