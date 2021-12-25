import React from 'react'
import Copyright from './Copyright'
import Footer from './Footer'
import Header from './Header'
import Helmet from 'react-helmet'

const Mission = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mission - Kalpamrit Foundation</title>
                <link rel="canonical" href="https://kalpamritfoundation.com/mission/" />
            </Helmet>
            <Header/>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/Kalpamrit_foundation-4.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div>
                        <h2 className="text-white">OUR MISSION</h2>
                        <p className="text-white fs-3">We believe that change is possible and can happen against all odds.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card border-0">
                    <div className="card-body m-4">
                        <h3 className="card-title">Mission</h3>
                        <hr className="p-1 bg-warning w-25"/>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> The Kalpamrit Group has been actively involved in uplifting the society via lending a helping hand to the ones in need. We firmly believe that every being on earth deserves a slice of happiness of life, and to introduce them to their rights, the Kalpamrit Foundation Trust came into existence.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> Your purchases from Kalpamrit Group have helped it flourish and put on the crown of glory and generosity, which it continues to wear to date. But as time goes by, we have been introduced to another crucial crisis looming over all of us.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> It is quite alarming to see environmental degradation at such a fast pace. With development being the new motto of life, it is devastating to see tall and fresh trees being chopped off to make new-fashioned roads and buildings that meet the modern society’s requirements. Coping with new changes is a great skill, however, it should not be done at the expense of our lush green environment.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> It does not belong to us only, but also the wildlife species. They are losing their habitats, their homes, due to our cruel actions. While some are on verge of extinction, many have already left this beautiful world to find security in the afterlife. Therefore, Kalpamrit Foundation Trust is up on the mission to preserve the innocent wildlife and protect the beautiful environment of ours.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> The wildlife and environment need to be protected, and Kalpamrit Foundation Trust has taken a small step towards this mighty change. It is not possible without the support from our beloved consumers across the globe hence rejuvenate your life with our extensive range of products. Simultaneously, you will also be lending a helping hand towards the betterment and security of our environment and wildlife.</p>
                    </div>
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Mission
