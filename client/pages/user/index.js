import React, { useEffect, useState } from 'react'
import Layouts from '../../components/Layouts'
import { checkAuths } from '../../components/requests/user'



const User = ({ user }) => {

    return (
        <Layouts>
            <h4>{JSON.stringify(user)}</h4>
        </Layouts>
    )
}



User.getInitialProps = async (context) => {

    const token = context.req.cookies.token
    // console.log(context.req.cookies.token);
    try {
        const res = await checkAuths(token);
        console.log("resolved");
        return { user: res.data }
    } catch (err) {
        // console.log("Erooooor======>", err);
        return { user: "no User" }

    }

}


export default User