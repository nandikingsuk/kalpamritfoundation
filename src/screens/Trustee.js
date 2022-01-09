import React from 'react'
import Copyright from './Copyright'
import Footer from './Footer'
import Header from './Header'
import Helmet from 'react-helmet'

const Trustee = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Trustee - Kalpamrit Foundation</title>
                <link rel="canonical" href="https://kalpamritfoundation.com/trustee/" />
            </Helmet>
            <Header/>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/KF_3_4.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div>
                        <h2 className="text-white">TRUSTEE</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card-group my-4">
                <div className="card my-4 border-0">
                    <img src="./assets/trustee_balkrishanarya.png" className="card-img-top w-50 mx-auto" alt="..."/>
                    <div className="card-body mx-auto">
                    <h5 className="card-title">Balkrishan Arya</h5>
                    </div>
                </div>
                <div className="card my-4 border-0">
                    <img src="./assets/trustee_sudeshji.png" className="card-img-top w-50 mx-auto" alt="..."/>
                    <div className="card-body mx-auto">
                    <h5 className="card-title">Dr. Sudesh Kumar</h5>
                    </div>
                </div>
                <div className="card my-4 border-0">
                    <img src="./assets/trustee_deepakji.png" className="card-img-top w-50 mx-auto" alt="..."/>
                    <div className="card-body mx-auto">
                    <h5 className="card-title">Deepak Sharma</h5>
                    </div>
                </div>
                <div className="card my-4 border-0">
                    <img src="./assets/trustee_satyapalji.png" className="card-img-top w-50 mx-auto" alt="..."/>
                    <div className="card-body mx-auto">
                    <h5 className="card-title">Satyapal Yadav</h5>
                    </div>
                </div>
                <div className="card my-4 border-0">
                    <img src="./assets/nitin_rathi.png" className="card-img-top w-50 mx-auto" alt="..."/>
                    <div className="card-body mx-auto">
                    <h5 className="card-title">Nitin Rathi</h5>
                    </div>
                </div>
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Trustee
