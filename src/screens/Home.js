import React from 'react'
import Footer from './Footer.js'
import Copyright from './Copyright.js'
import Header from './Header.js'
const Home = () => {
    return (
        <>
            <Header/>
            <div>
                {/* home page content start here */}
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/assets/KF_3_1.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                </div>
                <div className="card border-0">
                    <div className="card-body m-4">
                        <h3 className="card-title">EVERY MOMENT COUNTS</h3>
                        <hr className="p-1 bg-warning w-25"/>
                        <p className="card-text fs-5">We, at Kalpamrit Foundation Trust, are committed to contemplating the beauty of harmonious living with equal rights to all the living creatures blessed by the almighty God. We are a culture with certain goals born out of the spiritual enlightenment of our founding fathers who dreams of having such transform the world where Humans are contented, Plants are cheerful, Animals are untroubled, and moreover Earth is not loaded with the pressure of excess outputs which would leave our future generations on the risk of Habitat loss, therefore, our sole aim is to ensure Environmental Sustainability and Ecological balance.</p>
                    </div>
                </div>
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/KF_3_12.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div>
                        <h2 className="text-white text-decoration-none">OUR VALUES</h2>
                        <hr className="p-1 bg-warning w-25 mx-auto fs-5"/>
                        <p className="text-white fs-5">Kalpamrit foundation trust offers its members ecological citizenship to solve the environment and render one’s duties towards mankind and only in this way to attain true happiness and mentally and spiritually find the satisfaction of life.</p>
                        <p className="text-white fs-5">Everyone has a purpose in life a unique gift or a special talent to give to others and We help to blend this unique talent with service to others to experience the ecstasy and expectation of our own spirit which is the ultimate goal of all goals.</p>
                        <p className="text-white fs-5">The purpose of this society coincides with the soul of Indian Constitution that enshrines “It shall be the duty of every citizen of India to protect and improve the natural environment including forests lakes rivers and wildlife and to have compassion for living creatures”</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card border-0">
                    <div className="card-body m-4">
                        <h2 className="card-title">TO THE ENVIRONMENT &amp; WILDLIFE</h2>
                        <hr className="p-1 bg-warning w-25"/>
                        <p className="card-text fs-5">The wildlife and environment need to be protected, and Kalpamrit Foundation Trust has taken a small step towards this mighty change. It is not possible without the support from our beloved consumers across the globe hence rejuvenate your life with our extensive range of products. Simultaneously, you will also be lending a helping hand towards the betterment and security of our environment and wildlife.</p>
                    </div>
                </div>
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/Kalpamrit_foundation-3.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div>
                        <h2 className="text-white text-decoration-none">“We will make this World a better livable place”</h2>
                        <hr className="p-1 bg-warning w-25 mx-auto fs-5"/>
                        <p className="text-white fs-5">We are always committed to inculcating a sense of responsibility towards forest, animals, soil, air, water.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* home page content end here */}
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Home
