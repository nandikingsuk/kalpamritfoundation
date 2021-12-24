import React from 'react'
import Copyright from './Copyright'
import Footer from './Footer'
import Header from './Header'

const Notfound = () => {
    return (
        <>
            <Header/>
            <div className="card text-center border-0 m-4">
                <div className="card-body m-4">
                    <h5 className="card-title m-4">Oppos! page not found</h5>
                </div>
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Notfound
