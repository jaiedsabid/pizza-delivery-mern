import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { userLogout } from '../redux/ActionCreators';

function Logout() {
    localStorage.removeItem('currentUser');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userLogout());
    }, []);

    return <Redirect to="/" />;
}

export default Logout;
