import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface Props {
    children: JSX.Element
    redirectTo: string
    allowCondition: boolean
}

export function ProtectedRoute({ children, redirectTo, allowCondition }: Props) {

  const location = useLocation();
  
  return allowCondition ? (
    children
  ) : (
    <Navigate to={{ pathname: redirectTo }} />
  );
}