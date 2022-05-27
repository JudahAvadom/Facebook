import React from 'react'
import { Outlet } from 'react-router-dom'
import { useUser } from '../../Hooks/useUser'
import Home from '../../Pages/Home'

const PrivateRoute = () => {
    const { isLogged } = useUser()
    
    return isLogged ? <Outlet /> : <Home />
}

export { PrivateRoute }
