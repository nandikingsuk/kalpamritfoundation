import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Environment = () => {
    return (
        <>
            <Header/>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/KF_3_3.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div>
                        <h2 className="text-white">WILDLIFE</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>    
        </>
    )
}

export default Environment
