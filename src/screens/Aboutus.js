import React from 'react'
import Copyright from './Copyright'
import Footer from './Footer'
import Header from './Header'

const Aboutus = () => {
    return (
        <>
            <Header/>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/KF_3_1.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            <div className="card border-0">
                    <div className="card-body m-4">
                        <h3 className="card-title">About Us</h3>
                        <hr className="p-1 bg-warning w-25"/>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> In a race of economical developments, Mankind is loaded with sense of witnessing emmense tears of our mother Earth.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> We, at Kalpamrit Foundation Trust are committed to contemplate the beauty of harmonious living with equal rights to all the living creatures blessed by the almighty God.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> We are a culture with certain goals born out of the spiritual enlightenment of our founding fathers who dreams of having such transform the world where, humans are contented, plants are cheerful, animals are untroubled, and moreover Earth is not loaded with pressure of excess outputs which would leave our future generations on a risk of Habitat loss therefore our sole aim is to ensure Environmental sustainability and Ecological balance.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> Kalpamrit Foundation Trust offers its members ecological citizenship to solve the environment and render one’s duties towards mankind and only in this way to attain true happiness and mentally and spiritually find the satisfaction of life.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> Everyone has a purpose in life a unique gift or a special talent to give to others and We help to blend this unique talent with service to others to experience the ecstasy and expectation of our own spirit which is the ultimate goal of all goals.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> We are always committed to inculcating a sense of responsibility towards the forest, animals, soil, air, water.</p>
                        <p className="card-text fs-3">Thus “We will make this World a better livable place”</p>
                    </div>
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Aboutus
