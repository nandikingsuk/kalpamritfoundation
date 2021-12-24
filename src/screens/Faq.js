import React from 'react'
import Copyright from './Copyright'
import Footer from './Footer'
import Header from './Header'

const Faq = () => {
    return (
        <>
            <Header/>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/KF_3_9.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div>
                        <h2 className="text-white text-decoration-none">FREQUENTLY ASKED QUESTIONS</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card border-0">
                    <div className="card-body m-4">
                        <h3 className="card-title">Frequently asked questions</h3>
                        <hr className="p-1 bg-warning w-25"/>
                    </div>
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Faq
