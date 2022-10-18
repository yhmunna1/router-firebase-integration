import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Please Register Now!</h1>
            <form>
                <input type="text" placeholder='Your Name' />
                <br />
                <form action="email" placeholder='Your Email'></form>
                <br />
                <input type="password" placeholder='Type Your Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;