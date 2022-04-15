import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { isAuth, logoutUser } from './helpers/auth'



const Layouts = ({ children }) => {

    Router.onRouteChangeStart = url => NProgress.start();
    Router.onRouteChangeComplete = url => NProgress.done();
    Router.onRouteChangeError = url => NProgress.done();


    const head = () => {
        return <Head>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
            <link rel='stylesheet' href='/static/css/styles.css' />
        </Head>
    }

    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);



    return (
        <React.Fragment>
            {head()}
            <nav className="navbar nav-tabs navbar-expand-lg bg-warning justify-content-between">
                <ul className='navbar-nav mr-auto'>
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
                </ul>



                <ul className="navbar-nav ml-auto">
                    {
                        !isSSR && (isAuth() && isAuth().role === 'admin' && (
                            <li className="nav-item ">
                                <Link href='/admin/dashboard'>
                                    <a className="nav-link  text-dark">{isAuth().name}</a>
                                </Link>
                            </li>
                        ))

                    }
                    {
                        !isSSR && (isAuth() && isAuth().role === 'subscriber' && (
                            <li className="nav-item ">
                                <Link href='/user'>
                                    <a className="nav-link  text-dark">{isAuth().name}</a>
                                </Link>
                            </li>
                        ))

                    }


                    {!isSSR && (isAuth() && <li className="nav-item">

                        <a style={{ cursor: 'pointer' }} onClick={logoutUser} className="nav-link text-dark">Logout</a>
                    </li>)}
                </ul>



            </nav>
            <div className='container pt-5 pb-5'>{children}</div>
        </React.Fragment>

    )
}

export default Layouts  