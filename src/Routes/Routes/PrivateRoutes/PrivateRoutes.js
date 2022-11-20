import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const PrivateRoutes = ({ children }) => {

    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center space-x-2 my-20">
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoutes;