import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const SignIn: React.FC = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

            setLoginEmail('');
            setLoginPassword('');

            alert('Logged In Successfully');
        } catch (error) {
            console.error('Error signing in:'
                // , error.message
            );
            alert('Error signing in. Please try again.');
        }
    };

    return (
        <div className='signin-section'>
            <section>
                <div id="SignIn" className='signin'>SIGN IN</div>
                <div className='email-and-pass'>
                    <div className='sign-box'>
                        <label>Enter Your Email
                            <input
                                className='signin-input'
                                type="email"
                                value={loginEmail}
                                placeholder='Enter Email'
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Enter Password
                            <input type="password" className='signin-input' placeholder='Enter Password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <button className='signin-button' onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignIn;
