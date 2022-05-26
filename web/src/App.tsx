import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoute } from './Components/Routes/PrivateRoute'
import UserHome from './Pages/UserHome'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/" element={<UserHome />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
