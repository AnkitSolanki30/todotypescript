import React from 'react'

import { Route, Routes } from "react-router-dom";

import { OnlyPublicAuth, RequireAuth } from './Base/RequirAuth';

import AppRoute from './Components/AppRoute/AppRoute';
import Login from './Components/Authentication/Login/Login'
import SignUp from './Components/Authentication/SignUp/SignUp'
import NotFound from './Components/NotFound/NotFound';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={
                <OnlyPublicAuth redirectTo={"/"}> 
                    <Login />
                </OnlyPublicAuth>
            } />
            <Route path="/signup" element={
                <OnlyPublicAuth redirectTo={"/"}>
                    <SignUp />
                </OnlyPublicAuth>
            } />
            <Route path="*" element={
                <RequireAuth redirectTo="/login">
                    <AppRoute></AppRoute>
                </RequireAuth>
            } />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes