import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';
import { Button } from  './Button';

export const Navbar = () => {

    const [button, setButton] = useState(true); 

    return (
        
        <div className="container">
                <div className="logo">
                    <Link to="./" className="L">The Shoppies</Link>
                </div>
                <div className="NavItems">
                     <Link to="/nominations" className="nomList">Nomination List</Link> 
                     {button &&  <Button buttonStyle='btn--outline'> Browse Movies</Button>}
                </div>
        </div>
            
    )
}
