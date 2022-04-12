import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
const Layouts = ({ children }) => {

    const head = () => {
        return <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
        </Head>
    }

    return (
        <React.Fragment>
            {head()}
            <div className="nav nav-tabs bg-warning">
                <li className="nav-item">
                    <Link href='/'>
                        <a className="nav-link  text-dark">Home</a>
                    </Link>

                </li>
                <li className="nav-item">
                    <Link href='/login'>
                        <a className="nav-link  text-dark">Login</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href='/register'>
                        <a className="nav-link  text-dark">Register</a>
                    </Link>
                </li>
            </div>
            <div className='container pt-5 pb-5'>{children}</div>
        </React.Fragment>

    )
}

export default Layouts  