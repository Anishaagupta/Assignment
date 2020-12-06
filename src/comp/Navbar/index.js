import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

const Navbar = () => {
    return (
        <div>
      <nav class="navbar nav-s navbar-expand-sm navbar-light bg-dark justify-content-center">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <Link class="nav-link points" to="/">Home</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link points"  to="/about">About</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link points"  to="/contact">Contact</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link points"  to="/see&do">See&Do</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link points"  to="/gallery">Gallery</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link points"  to="/services">Services</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link points"  to="/room">Room</Link>
    </li>
    <button type="button" class="btn book">Book A Room</button>
  </ul>
</nav>
        </div>
    )
}

export default Navbar
