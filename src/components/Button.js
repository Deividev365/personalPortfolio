import React from 'react';
import {Link} from 'react-router-dom'

import '../styles/Button.css'

export default function Button(props) {
    return(
        <div className="container-button">
            <Link className="button" to="/">{props.children}</Link>
        </div>
         
    );
}