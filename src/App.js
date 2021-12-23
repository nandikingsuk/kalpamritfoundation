function App() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand"><img src="/assets/logo.svg" height="40rem" alt="logo" /> KALPAMRIT FOUNDATION TRUST</a>
          <ul className="nav d-flex">
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
      </nav>
    </>
  );
}

export default App;
