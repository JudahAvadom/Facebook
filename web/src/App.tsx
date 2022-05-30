import React, { createContext, useReducer } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoute } from './Components/Routes/PrivateRoute'
import { initialUIState, UIReducer } from './Context/UIContext'
import { initialUserState, UserReducer } from './Context/UserContext'
import UserHome from './Pages/UserHome'

export const UIContext = createContext(undefined)
export const UserContext = createContext(undefined)

const App = () => {
    const [uiState, uiDispatch] = useReducer(UIReducer, initialUIState)
    return (
        <UIContext.Provider value={{ uiState, uiDispatch }}>
            <UserContext.Provider value={{initialUserState, UserReducer}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PrivateRoute />}>
                            <Route path="/" element={<UserHome />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </UIContext.Provider>
    )
}

export default App
