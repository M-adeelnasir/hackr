import Cookie from 'js-cookie'
import Router from 'next/router'


//set cookies
export const setCookie = (key, value) => {
    if (typeof window !== "undefined") {
        Cookie.set(key, value, {
            expires: 7
        })
    }
}

// remove cookies
export const removeCookie = (key) => {
    if (typeof window !== 'undefined') {
        Cookie.remove(key)
    }
}

//get cookie data such token
export const getCookie = (key) => {
    if (typeof window !== 'undefined') {
        return Cookie.get(key)
    }
}


//local Storage

//set user and token in cookie
export const setInLoacalStorage = (key, value) => {
    if (typeof window !== 'undefined') {
        return localStorage.setItem(key, JSON.stringify(value))
    }
}


//remove from loacal Strorage
export const removefromLocalStorage = (key) => {
    if (typeof window !== "undefined") {
        return localStorage.removeItem(key)
    }
}
//remove from loacal Strorage
export const gettokenfromlocal = (key) => {
    if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem(key))
    }
}

//authenticat use after sign in and store it in cooki and local strorage

export const authenticate = (res, next) => {
    setCookie('token', res.data.token)
    setInLoacalStorage('token', res.data.token)
    setInLoacalStorage('user', res.data.user)
    next()
}


// access user info from localstorage
export const isAuth = () => {
    if (typeof window !== 'undefined') {
        const checkIfToken = getCookie('token');
        if (checkIfToken) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'))
            }
        }
    }
}



//logout

export const logoutUser = () => {
    if (typeof window !== 'undefined') {
        removeCookie('token')
        removefromLocalStorage('user')
        Router.push('/')
    }
}