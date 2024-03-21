import React from "react";
import './Reason.css';

const Reason: React.FC = () => {

    return (
        <section>
            <div className="main-reason">
                <h1>Why you should use <span>CareFinder </span></h1>
                <p>CareFinder simplifies your healthcare journey by providing easy access to comprehensive
                    hospital information across Nigeria. Search, compare, and connect with the care you need, all in one place:</p>
            </div>
            <div className="main-reason-box">
                <div className="reason-box">
                    <h2 className="info-reason">Effortless Search</h2>
                    <p>Navigate with ease using our intuitive search tools.
                        Find hospitals near you in seconds, or browse by
                        city with comprehensive listings. No more struggling through endless directories or outdated information</p>
                </div>
                <div className="reason-box">
                    <h2 className="info-reason">Detailed Hospital Profile</h2>
                    <p>Gain a clear picture of each hospital with our in-depth listings. Compare hospitals based on essential details like contact information, offered specialties, available
                        amenities, and patient reviews. Make informed decisions with all the information you need at your fingertips.</p>
                </div>
                <div className="reason-box">
                    <h2 className="info-reason">Seamless Sharing and Export</h2>
                    <p>hare your hospital shortlist with loved ones effortlessly. Export your search results as a CSV file for offline access,
                        ensuring you have the information you need, even without an internet connection.</p>
                </div>
                <div className="reason-box">
                    <h2 className="info-reason">Reliable and Verified Data</h2>
                    <p>Access accurate and up-to-date hospital information you can trust. We partner
                        with credible sources and verify data to ensure you make informed decisions based on reliable facts.</p>
                </div>
            </div>


        </section>
    )


};

export default Reason;