import React from 'react'
import Copyright from './Copyright'
import Footer from './Footer'
import Header from './Header'

const Wildlife = () => {
    return (
        <>
            <Header/>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/KF_3_2.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div>
                        <h2 className="text-white">WILDLIFE</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card border-0">
                    <div className="card-body m-4">
                        <h3 className="card-title">Creating the Right Balance</h3>
                        <hr className="p-1 bg-warning w-25"/>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> Balance is crucial for every aspect of our lives. Just like us, the animals out there in the wilderness also deserve a fair share of proper balance. To keep up with our fast-paced world, urbanization has taken a toll over our lush, green environment. Trees are being cut down for the construction of roads and buildings.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> While this is an alarming issue leading to the degradation of our environment, it is also having an ill impact on our wildlife. Many animals are on the verge of extinction because of the disruption of their food chain. By cutting down trees, we are snatching away the habitat of a variety of wildlife species. The absence of their habitat makes it difficult for them to survive, and eventually pushes them to the mouth of death.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> These animals could be the food for other bigger and stronger wildlife creatures and help them survive in the wilderness. Therefore, one step of ours distorts the entire food chain of the wildlife species, ripping them off their comfortable habitats and food options.</p>
                    </div>
            </div>
            <div className="card border-0">
                    <div className="card-body m-4">
                        <h3 className="card-title">Uniting for a Profound Cause</h3>
                        <hr className="p-1 bg-warning w-25"/>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> It is high time we resolve our actions and take a major step against the deteriorating condition of our wildlife. To unite you all in this fight for preserving our wildlife, Kalpamrit Foundation Trust has been formed. We have taken the responsibility of securing our precious wildlife and be the voice of all the wildlife species that do not have the ability to tell the world about their crises.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> From every purchase of Kalpamrit product, INR 1.00 is stored for the Kalpamrit Foundation Trust. By accumulating all the money, the team of Kalpamrit Foundation Trust sets off on its journey to find out the problems that our society is facing and effectively addresses to its various needs. Just how we deal with the various issues of our society, we have also led a helping hand towards the wildlife.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> For bringing in the proper balance in their lives, Kalpamrit Foundation Trust is committed to planting trees in throughout the forests of India, preserving the suitable habitats of the wildlife species and building them a protective layer against the environment and their predators. As a team, we are also willing to be an active part of campaigns that stand against illegal hunting, deforestation and other issues that is having an ill impact on our wildlife.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> The vision of Kalpamrit Foundation Trust is to see a world full of harmony, where the humans are responsible, the animals are secured and the lively green plants stand tall and strong in their designated places. Therefore, we are on our quest of sparking the sense of responsibility in our society to help us make fulfill our vision.</p>
                    </div>
            </div>
            <div className="card border-0">
                    <div className="card-body m-4">
                        <h3 className="card-title">Spread the Goodness that Lies Within You</h3>
                        <hr className="p-1 bg-warning w-25"/>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> By purchasing the products of Kalpamrit, you all are already a part of our glorious family. Your contribution has helped Kalpamrit Marketing Private Limited to become one of our major donors and the strongest cause for Kalpamrit Foundation Trust to be up and running. With every purchase of authentic, Ayurvedic products from Kalpamrit, you do not only pass on the potency of the natural ingredients to yourself and your loved ones but also financially contribute towards the wellbeing of our society and environment.</p>
                        <p className="card-text fs-5"><span className="material-icons align-bottom">favorite</span> While most of our wildlife species are endangered at this point of time, we would love for you to donate to the Kalpamrit Foundation Trust and enlist your names in our chart of prestigious donors. Every small donation coming from you can lead to massive positive outcomes.</p>
                    </div>
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Wildlife
