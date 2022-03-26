import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <a class="navbar-brand" href="#">
      <Link to="/home"><img src="webLogo.png" alt="" width="114" height="40" class="d-inline-block align-text-top"/></Link>
      
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active text-primary" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="/"> Quick Links</a>
        </li>  
        <li className="nav-item">
          <a className="nav-link text-primary" href="/"> About Us</a>
        </li>   
      </ul>
      <form className="d-flex" >
      <Link to="/reg"><button className="btn btn-outline-primary me-2" type="submit">Register</button></Link>
        <Link to="/lform"><button className="btn btn-outline-primary ms-2" type="submit">Log In</button></Link>
      </form>
    </div>
  </div>
</nav>
  )
}
