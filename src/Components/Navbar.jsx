import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Masudi's</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <span class="navbar-text position-absolute top-0 end-0">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className='nav-link active' to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Menu" >Menu</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/AboutUs">About Us</Link>
        </li>
        <form class="d-flex" role="search">
        <Link class="nav-link btn btn-primary" to="/Checkout">Check Out</Link>
      </form>
      </ul>
      </span>
    </div>
  </div>
</nav>
  )
}
