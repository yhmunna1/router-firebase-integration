import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();

    return (
        <div>
            <h1>Please Login</h1>
            <div>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="text" placeholder='Your Name' />
                <br />
                <form action="email" placeholder='Your Email'></form>
                <br />
                <input type="password" placeholder='Type Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;