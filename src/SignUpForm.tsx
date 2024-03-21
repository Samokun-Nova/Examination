import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import carefinderImage from "./Image/Carefinder.jpg"
import docimage from './Image/docimage.png';
import './Signup.css';


const SignUpForm: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSignUp = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        try {
            if (!agreed) {
                console.error('Please agree to the terms and privacy policy.');
                return;
            }

            if (password !== confirmPassword) {
                console.error('Passwords do not match.');
                return;
            }

            await createUserWithEmailAndPassword(auth, email, password);

            setFirstName('');
            setSurname('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setAgreed(false);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className='signup-and-img'>
            <div className='doc-image'>
                <img src={docimage} alt="doctor" className='doc-img-sign' />
            </div>
            <div>
                <form onSubmit={handleSignUp} className='form-box'>
                    <div className='carefinder-logo-sign'>
                        <img src={carefinderImage} alt='logo' className='logo' />
                    </div>
                    <div className='box-adj'>
                        <input
                            className='input-box'
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}

                        />
                    </div>

                    <div>
                        <input
                            className='input-box'
                            type="text"
                            placeholder="Surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className='input-box'
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className='input-box'
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className='input-box'
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {/* </div> */}
                    <label className='label-check'>
                        <input
                            className='check-box'
                            type="checkbox"
                            checked={agreed}
                            onChange={() => setAgreed(!agreed)}
                        />
                        <p className='privacy-box'>I agree to the terms and privacy policy</p>
                    </label>
                    <button type="submit" className='signup-but'>Sign Up</button>

                </form>
            </div>
        </div>
    );
};

export default SignUpForm;



