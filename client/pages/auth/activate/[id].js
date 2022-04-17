import { withRouter } from 'next/router'
import { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import router from 'next/router'
import Layouts from '../../../components/Layouts'
import { activateAccount } from '../../../components/requests/user'
import Link from 'next/link'

const ActivateAccount = (props) => {

    const [values, setValues] = useState({
        name: "",
        success: "",
        error: "",
        token: "",
    })
    const { name, success, error, token } = values;


    useEffect(() => {
        // console.log(props.router.isReady);
        // console.log("Router==>", props)
        // console.log(props.router.query.id);
    }, [props.router.isReady])


    useEffect(() => {
        if (props.router.isReady) {
            // console.log(JSON.stringify(router), null, 4)
            let token = router.query.id;
            // console.log(token);
            //decode the name of user fromtoken
            const { name } = jwt.decode(token)
            setValues({ ...values, name: name, token: token, })
        }
    }, [props.router.isReady])


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
                    {error && <div className="alert alert-danger  pt-1 pb-1 text-center" role="alert">
                        {error}
                    </div>}

                    {success && <div className="alert alert-info mt-3 pt-1 pb-1 text-center" role="alert">
                        Registration Complete. {<Link href='/login'><a className='text-warning'>please Login</a></Link>}
                    </div>}
                </div>
            </div>

            {/* {JSON.stringify(router)} */}

        </Layouts>
    )
}

export default withRouter(ActivateAccount)