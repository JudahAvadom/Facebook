import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../../App'
import Home from '../../Pages/Home'

const PrivateRoute = () => {
    const { userState } = useContext(UserContext)
    console.log(userState.isLoggedIn);
    const UserLogged = () => {
        if (localStorage.getItem('token')) {
            return true
        }
        else {
            return false
        }
    }
    return UserLogged() ? <Outlet /> : <Home />
}

export { PrivateRoute }
