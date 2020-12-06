import React from 'react';
import {Link} from 'react-router-dom';

function index() {
    return (
        <div>
         <h1>OOPS!!</h1>
         <h2>Error: 404 Page Not Found</h2>
         <h3><Link to="/">Go Back</Link></h3>
        </div>
    )
}

export default index
