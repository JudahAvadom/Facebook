import React, { createContext, useReducer } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoute } from './Components/Routes/PrivateRoute'
import { initialUIState, UIReducer } from './Context/UIContext'
import { UserContextProvider } from './Context/UserContext'
import UserHome from './Pages/UserHome'

export const UIContext = createContext(undefined)

const App = () => {
    const [uiState, uiDispatch] = useReducer(UIReducer, initialUIState)
    return (
        <UIContext.Provider value={{ uiState, uiDispatch }}>
            <UserContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PrivateRoute />}>
                            <Route path="/" element={<UserHome />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </BrowserRouter>
            </UserContextProvider>
        </UIContext.Provider>
    )
}

export default App
