import React from 'react'
import { getCookie } from '../Utils/cookieUtils'
import { ProtectedRoute } from './ProtectedRoute';

const ACCESS_TOKEN = "TodoAccessToken";

interface Props {
    children: JSX.Element
    redirectTo: string
}

export function RequireAuth({ children, redirectTo }: Props) {
    const isAuthenticated = getCookie(ACCESS_TOKEN) ? true : false;
    return (
        <ProtectedRoute redirectTo={redirectTo} allowCondition={isAuthenticated}>
            {children}
        </ProtectedRoute>
    );
}
export function OnlyPublicAuth({ children, redirectTo }: Props) {
    const isAuthenticated = getCookie(ACCESS_TOKEN) ? true : false;

    return (
        <ProtectedRoute redirectTo={redirectTo} allowCondition={!isAuthenticated}>
            {children}
        </ProtectedRoute>
    );
}
