import React, { useState } from 'react'
import { getUserData } from '../Utils'

const UserContext = React.createContext({})

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
