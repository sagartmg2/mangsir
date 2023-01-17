import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
const ProtectedRoute = () => {

    let logged_in = false;
    return logged_in ? <Outlet /> : <Navigate to="/login" />
    return (
        <div>
            Protec rote
        </div>
    );
}

export default ProtectedRoute;
