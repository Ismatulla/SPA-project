import React from 'react';
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <Link  to='/' className="grey-text text-lighten-4 right" >Restoranto</Link>
                </div>
            </div>
        </footer>

    );
}

export default Footer;