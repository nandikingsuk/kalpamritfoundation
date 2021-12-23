function App() {
  return (
    <>
    {/* header start here */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src="/assets/logo.svg" height="40rem" alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand" href="#"> KALPAMRIT FOUNDATION TRUST</a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mission</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Wildlife</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Environment</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    {/* header end here */}
    
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

    {/* footer start here */}
    <div className="row bg-light">
      <div className="col-sm-3">
        <div className="card border-0 bg-light">
          <div className="card-body">
            <h5 className="card-title">IMPORTANT LINKS</h5>
            <p className="card-text">Trustee</p>
            <p className="card-text">Donors</p>
            <p className="card-text">Donate us</p>
            <p className="card-text">Sitemap</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card border-0 bg-light">
          <div className="card-body">
            <h5 className="card-title">USEFUL LINKS</h5>
            <p className="card-text">Terms &amp; Conditions</p>
            <p className="card-text">Privacy Policy</p>
            <p className="card-text">FAQs</p>
            <p className="card-text">Latest announcements</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card border-0 bg-light">
          <div className="card-body">
            <h5 className="card-title">SPONSORED BY</h5>
            <p className="card-text">Kalpamrit Ayurved Pvt Ltd</p>
            <p className="card-text">Kalpamrit Marketing Pvt Ltd</p>
            <p className="card-text">Rishipathy Wellness Center</p>
            <p className="card-text">Eficaz Projects LLP</p>
            <p className="card-text">Eficaz Holdings Pte Ltd</p>
            <p className="card-text">Kalpamrit Holdings Pte Ltd</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card border-0 bg-light">
          <div className="card-body">
            <h5 className="card-title">GET IN TOUCH WITH US</h5>
            <p className="card-text">Contact through Whatsapp</p>
            <p className="card-text">Contact us</p>
            <p className="card-text">Facebook</p>
          </div>
        </div>
      </div>
    </div>
    {/* footer end here */}
    
    {/* copyright start here */}
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container text-center">
        <span className="text-white">&copy; Copyright 2020-21 KALPAMRIT FOUNDATION TRUST | ALL RIGHTS RESERVED</span>
      </div>
    </footer>
    {/* copyright end here */}
    </>
  );
}

export default App;
