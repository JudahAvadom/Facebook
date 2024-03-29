import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import { removeUserData, setUserData } from '../Utils'


const useUser = () => {
    const { userDispatch }: any = useContext(UserContext)
    
    const navigate = useNavigate()
    const handleLogin = useCallback((data: any) => {
        // Check is valited user
        const { token } = data
        if (token === 'false') {
            return console.log('Invalid Credentials')
        }
        else {
            localStorage.setItem('token', token)
        }
        location.reload();
    }, [])

    const handelLogout = useCallback(() => {
        removeUserData() // remove localstorage
        userDispatch({
            type: 'LOGOUT_USER'
        })
        localStorage.removeItem('token')
        navigate('/')
    }, [])
    let user;
    return {
        handleLogin,
        handelLogout
    }
}

export { useUser }
