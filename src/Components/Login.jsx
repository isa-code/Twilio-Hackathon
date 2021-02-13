import React from'react';

function Login(){
    return(
        <div className='login'>
    
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password' />

                    <button type='submit'  className='login__signInButton'>Sign In</button>
                </form>

        </div>
    )
}

export default Login;