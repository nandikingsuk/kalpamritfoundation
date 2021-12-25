import React from 'react'
import Copyright from './Copyright'
import Footer from './Footer'
import Header from './Header'
import Helmet from 'react-helmet'

const Termsandconditions = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Terms &amp; conditions - Kalpamrit Foundation</title>
                <link rel="canonical" href="https://kalpamritfoundation.com/terms-and-conditions/" />
            </Helmet>
            <Header/>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/KF_3_7.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div>
                        <h2 className="text-white text-decoration-none">TERMS &amp; CONDITIONS</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card border-0">
                    <div className="card-body m-4">
                        <h3 className="card-title">Terms &amp; Conditions</h3>
                        <hr className="p-1 bg-warning w-25"/>
                        <p className="card-text">This website is available for use only under the following conditions. By using this website, you agree to these terms:</p>
                        <p className="card-text">The material available on our website is provided solely for general information and is not intended, and should not be construed, as legal advice. It does not constitute an offer to provide legal advice or services to website users.</p>
                        <p className="card-text">The outcomes of our work described on the website depend on specific circumstances and other factors that are unique to each situation—they do not predict or guarantee similar results in other situations.</p>
                        <p className="card-text">Transmitting information to Kalpamrit by any means does not create an attorney-client relationship with Kalpamrit or any member of its legal staff. Visitors who want to consult Kalpamrit about a possible representation should contact a member of our legal staff directly. If Kalpamrit agrees to represent you, that agreement will be separately confirmed.</p>
                        <p className="card-text">Do not send confidential information to Kalpamrit by email, even using the email links provided on the website, as email messages may not be secure and no privilege or other legal protection against disclosure of the message may apply.</p>
                        <p className="card-text">You use our services at your disclaimer and agree to the privacy policy that we follow. For more information visit our Privacy Policy.</p>
                    </div>
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Termsandconditions
