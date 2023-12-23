import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../../../firebase.init';
import { getAuth } from 'firebase/auth'
import { Navigate, useLocation } from 'react-router-dom';

const auth = getAuth(app);

const Requireauth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();



    if (loading) {
        console.log('loading');
    }

    if (!user && !loading) {
        console.log('!user', user);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;



};

export default Requireauth;