import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';

export const Navbar = () => {
    return (
        
        <div className="container">
           
                <div className="logo">
                    <Link to="/" className="L">The Shoppies</Link>
                </div>
                <div className="NavItems">
                     <Link to="/nominations">Nomination List</Link> 
                     <Link to="/browse" className="btn">+nominate</Link>
                </div>
        </div>
            
    )
}
