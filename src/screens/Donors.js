import React from 'react'
import Copyright from './Copyright'
import Footer from './Footer'
import Header from './Header'
import Helmet from 'react-helmet'

const Donors = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Donors - Kalpamrit Foundation</title>
                <link rel="canonical" href="https://kalpamritfoundation.com/donors/" />
            </Helmet>
            <Header/>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/KF_3_5.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div>
                        <h2 className="text-white">DONORS</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card border-0">
                    <div className="card-body mx-4">
                        <h3 className="card-title">Kalpamrit Marketing Private Limited</h3>
                        <hr className="p-1 bg-warning w-25"/>
                    </div>
            </div>
            <div className="card border-0">
                    <div className="card-body mx-4">
                        <h3 className="card-title">Kalpamrit Ayurved Private Limited</h3>
                        <hr className="p-1 bg-warning w-25"/>
                    </div>
            </div>
            <div className="card border-0">
                    <div className="card-body mx-4">
                        <h3 className="card-title">Rishipathy Ayurveda &amp; Yoga Wellness Centre</h3>
                        <hr className="p-1 bg-warning w-25"/>
                    </div>
            </div>
            {/* <div className="card border-0">
                    <div className="card-body mx-4">
                        <h3 className="card-title">Eficaz Projects LLP</h3>
                        <hr className="p-1 bg-warning w-25"/>
                    </div>
            </div>
            <div className="card border-0">
                    <div className="card-body mx-4">
                        <h3 className="card-title">Eficaz Holdings Pte Ltd</h3>
                        <hr className="p-1 bg-warning w-25"/>
                    </div>
            </div>
            <div className="card border-0">
                    <div className="card-body mx-4">
                        <h3 className="card-title">Kalpamrit Holdings Pte Ltd</h3>
                        <hr className="p-1 bg-warning w-25"/>
                    </div>
            </div> */}
            <div className="card border-0">
                    <div className="card-body mx-4">
                        <h3 className="card-title">Kalpamrit Nature Care Society</h3>
                        <hr className="p-1 bg-warning w-25"/>
                    </div>
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Donors
