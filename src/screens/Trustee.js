import React from 'react'
import Copyright from './Copyright'
import Footer from './Footer'
import Header from './Header'

const Trustee = () => {
    return (
        <>
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
            <div class="card-group my-4">
                <div class="card my-4 border-0">
                    <img src="./assets/trustee_balkrishanarya.png" class="card-img-top w-50 mx-auto" alt="..."/>
                    <div class="card-body mx-auto">
                    <h5 class="card-title">Balkrishan Arya</h5>
                    </div>
                </div>
                <div class="card my-4 border-0">
                    <img src="./assets/trustee_sudeshji.png" class="card-img-top w-50 mx-auto" alt="..."/>
                    <div class="card-body mx-auto">
                    <h5 class="card-title">Dr. Sudesh Kumar</h5>
                    </div>
                </div>
                <div class="card my-4 border-0">
                    <img src="./assets/trustee_satyapalji.png" class="card-img-top w-50 mx-auto" alt="..."/>
                    <div class="card-body mx-auto">
                    <h5 class="card-title">Satyapal Yadav</h5>
                    </div>
                </div>
                <div class="card my-4 border-0">
                    <img src="./assets/nitin_rathi.png" class="card-img-top w-50 mx-auto" alt="..."/>
                    <div class="card-body mx-auto">
                    <h5 class="card-title">Nitin Rathi</h5>
                    </div>
                </div>
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Trustee
