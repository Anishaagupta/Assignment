import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-dark nav-s">
         
        <button type="button" class="navbar-toggler bg-light" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

<div className="collapse navbar-collapse" id="navbarCollapse">
   
    <div className="navbar-nav">
        <Link to="/" className="nav-item nav-link active points">Home</Link>
        <Link to="/about" className="nav-item nav-link points">About</Link>
        <Link to="/contact" className="nav-item nav-link points">Contact</Link>
        <Link to="/see&do" className="nav-item nav-link points">See&DO</Link>
        <Link to="/gallery" className="nav-item nav-link points">Gallery</Link>
        <Link to="/room" className="nav-item nav-link points">Room</Link>
        <Link to="/services" className="nav-item nav-link points">Services</Link>
       
       
    </div>
    <div className="navbar-nav ml-auto">
    <Link to="/" className="nav-item nav-link book">Book A Room</Link>
    </div>
</div>
</nav>

        </div>
    )
}

export default Navbar
