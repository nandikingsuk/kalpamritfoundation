import React from 'react'
import Copyright from './Copyright'
import Footer from './Footer'
import Header from './Header'

const Privacypolicy = () => {
    return (
        <>
            <Header/>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/KF_3_8.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div>
                        <h2 className="text-white text-decoration-none">PRIVACY POLICY</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card border-0">
                    <div className="card-body m-4">
                        <h3 className="card-title">Privacy Policy</h3>
                        <hr className="p-1 bg-warning w-25"/>
                        <p className="card-text">Our fundamental privacy principles are transparency and fairness. In keeping with these principles, Kalpamrit Foundation Trust(“Kalpamrit,” “we,” “our” or “us”) wants you to understand what kinds of information we collect about you, why we collect it and how we use or disclose it. We also want to make sure you know your rights regarding our collection, use and disclosure of that information.</p>
                        <p className="card-text">We’ve tried to write this policy in a way that’s easy to understand, but some of it is technical. If you have any questions or concerns about this policy, please contact us.</p>
                        <p className="card-text">The Kinds Of Information We Collect About You</p>
                        <p className="card-text">Kalpamrit Foundation Trust has implemented administrative and technical security measures to safeguard any personally identifying information we collect online against unauthorized access, destruction, or alteration.</p>
                        <p className="card-text">Information we collect from you is stored on secure servers and is not publicly accessible, unless you chose to have Kalpamrit disclose your personally identifiable information, for example, when you use our advocacy service to contact decision-makers. We use encrypted connections when processing financial and advocacy transactions through our website.</p>
                        <p className="card-text">Information You Give Us Voluntarily</p>
                        <p className="card-text">Kalpamrit collects, retains and uses information you provide to us or give us permission to obtain. For example, you voluntarily provide or allow us to obtain information when you:</p>
                        <p className="card-text">Donate to or Purchase from Kalpamrit.</p>
                        <p className="card-text">Use Kalpamrit’s Site. We request, collect and retain certain information when you fill in a form, register for an event, subscribe to our electronic newsletter, respond to surveys, post to community forums or use other features of our Site.</p>
                        <p className="card-text">Use Our Advocacy Service. Kalpamrit’s advocacy service allows you to contact policy and/or decision makers about issues that concern you.</p>
                        <p className="card-text">Communicate with Us Online. This may include your name, email address, mailing address, phone number, and other personally identifiable information you share with us.</p>
                        <p className="card-text">The above information is collected and processed, based on your consent, to fulfill your purchases and/or donations, to keep you up to date on Kalpamrit’s work and issues that are important to you, to maintain and expand our relationship with you and other supporters, and for our other legitimate purposes.</p>
                        <p className="card-text">Information We Collect Automatically When You Visit Our Site</p>
                        <p className="card-text">Similar to most websites, certain kinds of information are automatically or passively collected, retained and used when you visit our Site:</p>
                        <p className="card-text">Log Data</p>
                        <p className="card-text">Cookies and Similar Technologies</p>
                        <p className="card-text">Information Third Parties Share with Us</p>
                        <p className="card-text">Information from Third Parties. We sometimes collect information about you, including personal information, from third parties we work with or through publically available sources.</p>
                        <p className="card-text">Device information.</p>
                        <p className="card-text">Site Use We use third parties to collect information about your and other visitors’ interactions with the Site.</p>
                        <p className="card-text">Payment Transaction Information If you donate or make a purchase using a credit card, your credit card information is processed by our contracted merchant service providers.</p>
                        <p className="card-text">Others -Data Collected When You Sign Up for Our Emails or Texts, Participate in Action Alerts, Register for an Event or communicate With Us for Other Reasons</p>
                        <p className="card-text">Data Shared with Third Parties with Which We Contract.</p>
                        <p className="card-text">We sometimes contract with third-party companies or employ persons to collect and process information on our behalf based on our instructions and in compliance with this Policy.</p>
                        <p className="card-text">If you don’t want us to share your information with other organizations, you can change your preferences by contacting us by mail, phone, or writing to us.</p>
                    </div>
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Privacypolicy
