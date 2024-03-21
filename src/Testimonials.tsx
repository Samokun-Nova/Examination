// src/components/Testimonials.tsx
import React from 'react';
import './Testimonials.css';
import Reason from './Reason';

const Testimonials: React.FC = () => {
    return (
        <div id='#features'>
            <h2>FEATURES</h2>
            <div className='features-gen-box'>
                <section className='characteristic-1'>
                    <div className='character-1'>
                        <h4 className='character-1-h4'>Informed Decision</h4>
                        <p className='character-1-p'>Compare hospitals and choose the best option for your needs.</p>
                    </div>
                    {/* <div className='character-1-img'>
        </div> */}
                </section>
                <section className='characteristic-2'>
                    <div className='character-2'>
                        <h4 className='character-2-h4'>Accessible Health Care</h4>
                        <p className='character-2-p'>No matter your location, find quality healthcare nearby</p>
                    </div>
                    {/* <div className='character-2-img'>
        </div> */}
                </section>
                <section className='characteristic-3'>
                    <div className='character-3'>
                        <h4 className='character-3-h4'>Saves Time and Effort</h4>
                        <p className='character-3-p'>Stop researching, start finding the care you need quickly and efficiently </p>
                    </div>
                    {/* <div className='character-3-img'>
        </div> */}
                </section>
            </div>
        </div>







    );
};

export default Testimonials;
