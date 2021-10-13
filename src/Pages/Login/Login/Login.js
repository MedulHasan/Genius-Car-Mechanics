import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.form || '/';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                // setUsers(result.user);
                history.push(redirect_url);
            })

    }
    return (
        <div>
            <h2>Please login</h2>
            <button className="btn btn-warning" onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;