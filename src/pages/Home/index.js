import React from 'react';
import Navbar from '../../comp/Navbar';
import main from '../../assets/c.jpeg';
import '../../comp/Navbar/nav.css';


const Home = () => (
    <div>
        <Navbar />
        <div className="text-center mt-5 st"><h1>Ferofly</h1>
        <p>---Magnify Your Journey---</p></div>
        <img className="mx-auto d-block image img-fluid mt-5 auto" src={main} alt="home_image" />
        <div className="d-flex justify-content-end ic">
        <div className="d-flex flex-column s"> 
        <i class="fa fa-tripadvisor p-2" aria-hidden="true"></i>
        <i class="fa fa-facebook p-2" aria-hidden="true"></i>
        <i class="fa fa-instagram p-2" aria-hidden="true"></i>     
        </div>
        </div>
        <div className="chat">
        <i class="fa fa-commenting"></i>
        </div>
    </div>
)

export default Home
