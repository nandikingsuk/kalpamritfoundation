import React from 'react'
import Copyright from './Copyright'
import Footer from './Footer'
import Header from './Header'

const Donateus = () => {
    return (
        <>
            <Header/>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/KF_3_6.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div>
                        <h2><a className="text-white text-decoration-none" href="https://kalpamritfoundation.com/contact/">DONATE US</a></h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Donateus