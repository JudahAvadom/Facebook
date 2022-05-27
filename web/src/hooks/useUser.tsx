import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../Context/UserContext'
import { removeUserData, setUserData } from '../Utils'

const useUser = () => {
    const { user, setUser }: any = useContext(UserContext)
    
    const navigate = useNavigate()
    const handleLogin = useCallback((data: any) => {
        // Check is valited user
        const { token } = data
        if (token === 'false') return console.log('Invalid Credentials')

        // Login Success
        const user = setUserData(data) // Save into localstorage
        //setUser(() => user)
        location.reload();
    }, [])

    const handelLogout = useCallback(() => {
        removeUserData() // remove localstorage
        setUser((): any => null) // set state user as null
        navigate('/')
    }, [])

    return {
        isLogged: user !== null,
        handleLogin,
        handelLogout
    }
}

export { useUser }
