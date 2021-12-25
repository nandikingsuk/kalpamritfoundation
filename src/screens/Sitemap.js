import React from 'react'
import Copyright from './Copyright'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

const Sitemap = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Site map - Kalpamrit Foundation</title>
                <link rel="canonical" href="https://kalpamritfoundation.com/sitemap/" />
            </Helmet>
            <Header/>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/KF_3_11.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div>
                        <h2 className="text-white text-decoration-none">SITEMAP</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card border-0">
                    <div className="card-body m-4">
                        <h3 className="card-title">Sitemap</h3>
                        <hr className="p-1 bg-warning w-25"/>
                    </div>
            </div>
            <div class="card-group mx-4 mb-4">
                <div class="card border-0">
                    <ul class="list-group">
                        <li class="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/"><span class="material-icons align-bottom">check_circle_outline</span> Home</Link></li>
                        <li class="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/about-us"><span class="material-icons align-bottom">check_circle_outline</span> About Us</Link></li>
                        <li class="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/mission"><span class="material-icons align-bottom">check_circle_outline</span> Mission</Link></li>
                        <li class="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/wildlife"><span class="material-icons align-bottom">check_circle_outline</span> Wildlife</Link></li>
                        <li class="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/environment"><span class="material-icons align-bottom">check_circle_outline</span> Environment</Link></li>
                        <li class="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/trustee"><span class="material-icons align-bottom">check_circle_outline</span> Trustee</Link></li>
                        <li class="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/donors"><span class="material-icons align-bottom">check_circle_outline</span> Donors</Link></li>
                        <li class="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/donate-us"><span class="material-icons align-bottom">check_circle_outline</span> Donate us</Link></li>
                    </ul>
                </div>
                <div class="card border-0">
                    <ul class="list-group">
                        <li class="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/terms-and-conditions"><span class="material-icons align-bottom">check_circle_outline</span> Terms &amp; condition</Link></li>
                        <li class="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/privacy-policy"><span class="material-icons align-bottom">check_circle_outline</span> Privacy policy</Link></li>
                        <li class="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/faq"><span class="material-icons align-bottom">check_circle_outline</span> FAQs</Link></li>
                        <li class="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/latest-announcements"><span class="material-icons align-bottom">check_circle_outline</span> Latest announcement</Link></li>
                        <li class="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/"><span class="material-icons align-bottom">check_circle_outline</span> Kalpamrit Ayurved Pvt Ltd</Link></li>
                        <li class="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://kalpamritmarketing.com/"><span class="material-icons align-bottom">check_circle_outline</span> Kalpamrit Marketing Pvt Ltd</a></li>
                        <li class="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://rishipathy.com/"><span class="material-icons align-bottom">check_circle_outline</span> Rishipathy Wellness Center</a></li>
                        <li class="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://eficazgroup.com/"><span class="material-icons align-bottom">check_circle_outline</span> Eficaz Projects LLP</a></li>
                        <li class="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://eficazgroup.com/"><span class="material-icons align-bottom">check_circle_outline</span> Eficaz Holdings Pte Ltd</a></li>
                        <li class="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://kalpamritgroup.com/"><span class="material-icons align-bottom">check_circle_outline</span> Kalpamrit Holdings Pte Ltd</a></li>
                    </ul>
                </div>
                <div class="card border-0">
                    <ul class="list-group">
                        <li class="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://wa.me/+918979014001"><span class="material-icons align-bottom">check_circle_outline</span> Contact through Whatsapp</a></li>
                        <li class="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://kalpamrit.net/en/customer/create-ticket/"><span class="material-icons align-bottom">check_circle_outline</span> Contact us</a></li>
                        <li class="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://www.facebook.com/Kalpamrit-Foundation-107313184516030"><span class="material-icons align-bottom">check_circle_outline</span> Facebook</a></li>
                    </ul>
                </div>
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Sitemap
