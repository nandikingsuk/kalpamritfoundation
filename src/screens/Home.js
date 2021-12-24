import React from 'react'

const Home = () => {
    return (
        <div>
            {/* home page content start here */}
            <div className="card bg-dark">
            <img src="/assets/kalpamrit_foundation-3.jpg" className="img-fluid" alt="..."/>
            <div className="card-img-overlay">
                <div className="card text-center bg-transparent border-0">
                <div className="card-body">
                    <h5 className="card-title text-white">“We will make this World a better livable place”</h5>
                    <p className="card-text text-white">We are always committed to inculcating a sense of responsibility towards forest, animals, soil, air, water.</p>
                </div>
                </div>
            </div>
            </div>
            {/* home page content end here */}
        </div>
    )
}

export default Home
