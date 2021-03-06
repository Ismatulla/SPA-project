import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to= '/' className="brand-logo header ">Italiano</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Home</Link></li>
                    {/*<li><Link to='/About'>About</Link></li>*/}
                    {/*<li><Link to='/contact'>Contact</Link></li>*/}
                </ul>
            </div>
        </nav>
    );
}

export default Header;