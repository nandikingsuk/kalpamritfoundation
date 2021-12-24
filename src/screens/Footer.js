import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            {/* footer start here */}
            <div className="row bg-light m-2">
                <div className="col-sm-3">
                    <div className="card border-0 bg-light">
                    <div className="card-body">
                        <h5 className="card-title mb-3">IMPORTANT LINKS</h5>
                        <p><Link className="card-text text-decoration-none text-dark" to="/trustee">Trustee</Link></p>
                        <p><Link className="card-text text-decoration-none text-dark" to="/donors">Donors</Link></p>
                        <p><Link className="card-text text-decoration-none text-dark" to="/donate-us">Donate us</Link></p>
                        <p><Link className="card-text text-decoration-none text-dark" to="/sitemap">Sitemap</Link></p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card border-0 bg-light">
                    <div className="card-body">
                        <h5 className="card-title mb-3">USEFUL LINKS</h5>
                        <p><Link className="card-text text-decoration-none text-dark" to="/terms-and-conditions">Terms &amp; Conditions</Link></p>
                        <p><Link className="card-text text-decoration-none text-dark" to="/privacy-policy">Privacy Policy</Link></p>
                        <p><Link className="card-text text-decoration-none text-dark" to="/faq">FAQs</Link></p>
                        <p><Link className="card-text text-decoration-none text-dark" to="/latest-announcements">Latest announcements</Link></p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card border-0 bg-light">
                    <div className="card-body">
                        <h5 className="card-title mb-3">SPONSORED BY</h5>
                        <p><Link className="card-text text-decoration-none text-dark" to="/">Kalpamrit Ayurved Pvt Ltd</Link></p>
                        <p><a className="card-text text-decoration-none text-dark" href="https://kalpamritmarketing.com">Kalpamrit Marketing Pvt Ltd</a></p>
                        <p><a className="card-text text-decoration-none text-dark" href="https://rishipathy.com/">Rishipathy Wellness Center</a></p>
                        <p><a className="card-text text-decoration-none text-dark" href="https://eficazgroup.com/">Eficaz Projects LLP</a></p>
                        <p><a className="card-text text-decoration-none text-dark" href="https://eficazgroup.com/">Eficaz Holdings Pte Ltd</a></p>
                        <p><a className="card-text text-decoration-none text-dark" href="https://kalpamritgroup.com/">Kalpamrit Holdings Pte Ltd</a></p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card border-0 bg-light">
                    <div className="card-body">
                        <h5 className="card-title mb-3">GET IN TOUCH WITH US</h5>
                        <p><a className="card-text text-decoration-none text-dark" href="https://wa.me/+918979014001">Contact through Whatsapp</a></p>
                        <p><a className="card-text text-decoration-none text-dark" href="https://kalpamrit.net/en/customer/create-ticket/">Contact us</a></p>
                        <p><a className="card-text text-decoration-none text-dark" href="https://www.facebook.com/Kalpamrit-Foundation-107313184516030">Facebook</a></p>
                    </div>
                    </div>
                </div>
            </div>
            {/* footer end here */}
        </div>
    )
}

export default Footer
