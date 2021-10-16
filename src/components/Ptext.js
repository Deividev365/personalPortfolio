import React from 'react';


import '../styles/Ptext.css';


export default function Ptext(props) {
    return(
        <div className="ptext">
            <p>{props.children}</p>
        </div>
    );
}