import React from 'react'
import { Navigate } from 'react-router-dom';

export default function privateRoute({loggedin,children}) {
    if(loggedin){
        return children
    }else{
        return <Navigate to="/login"></Navigate>
    }
}
