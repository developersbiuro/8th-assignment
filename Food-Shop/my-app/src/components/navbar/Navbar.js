import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Assets/js/bootstrap.bundle.js'
import '../../Assets/js/bootstrap.min.js'



function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#"><img src="./images/logo.png" style="width: 50px;" alt="" /><span
            className="fw-bold m-2">TROPIKO</span> </a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="navbar-collapse collapse show" id="navbarSupportedContent" style="">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active me-lg-5" aria-current="page"
                  href="https://www.facebook.com/profile.php?id=100085130599968" target="_blank"> Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-lg-5" href="https://www.fiverr.com/users/editorsspot1"
                  target="_blank">Fruits</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active me-lg-5" href="# 
                        Services">Services </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active me-lg-5" href="https://www.fiverr.com/users/editorsspot1" target="_blank"> Contact
                  us </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-lg-5" href="https://www.facebook.com/profile.php?id=100085130599968"
                  target="_blank"><img src="./images/search-icon.png" /> </a>
              </li>

              <a href="https://www.facebook.com/profile.php?id=100085130599968" target="_blank"> <button type="button"
                className="btn btn-primary" style="background-color: rgba(255, 68, 0, 0.767); ">Get A Quote
              </button> </a>


            </ul>

          </div>
        </div>
      </nav>
    </div>
  )

}

export default Navbar;