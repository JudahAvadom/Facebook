import React, { useState } from 'react'
import { getUserData } from '../Utils'

const UserContext = React.createContext({})

export const initialUserState : any = {
    users: [],
    isLoggedIn: false,
}

export const UserReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                users: action.payload,
                isLoggedIn: true
            }
        default:
            break;
    }
}

export function UserContextProvider({ children } : any) {
    const [user, setUser] = useState(getUserData())
    return (
        <UserContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
