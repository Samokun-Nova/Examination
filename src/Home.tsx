
import React from 'react';
import docimage from './Image/docimage.png';
import carefinderImage from "./Image/Carefinder.jpg"
import { Link } from 'react-router-dom';
import './Home.css';
// import Reason from './Reason';
// import SearchButton from './SearchButton';

const Home: React.FC = () => {

    return (
        <div className='page'>
            <div className='nav-box'>
                <div className='img-nav-sign'>
                    <div className='carefinder-logo'>
                        <img src={carefinderImage} alt='logo' className='logo' />
                    </div>
                    <nav className='nav-bar'>
                        <ul>
                            <li>
                                <div>Home</div>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>

                            <li>
                                <a href='#features'>Features</a>
                            </li>
                            <li>
                                <div>Testimonials</div>
                            </li>
                            <li>
                                <div>FAQ</div>
                            </li>
                            <li>
                                <div>Contact Us</div>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <ul className='sign-up-in'>
                            <li className='sign-in'><a href="#SignIn">SignIn</a>Sign In</li>
                            <li className='sign-up'><a href="#SignUp">SignUP</a>Sign Up</li>
                            {/* <Link to="/signup">Sign Up</Link> */}
                            <Link to="/signup">Sign Up</Link>
                            <Link to='/signin'>Sign In</Link>
                        </ul>

                    </div>

                </div>
                <section className='search-about'>
                    <div>
                        <h1 className='major-heading'>Navigating healthcare shouldn't be a maze <br></br> <span>Find</span> the right care with <span>ease</span> </h1>
                        <p className='sub-heading'> Carefinder helps you easily search, compare and access Hospitals<br></br>accross Nigeria. Your Health journey starts here</p>
                    </div>
                    <div className='search-hospitals'>
                        <button className='search-button' id='Search'>Start Your Search Now</button>
                       
                    </div>


                </section>

                <section className='doc-img-vec'>
                    <div className='doc-image'>
                        <img src={docimage} alt="doctor" className='doc-img' />
                    </div>
                </section>
                <div>
                {/* <SearchButton /> */}
                </div>
            </div>
            <div id='features'></div>
        </div>
       
    );

};

export default Home;