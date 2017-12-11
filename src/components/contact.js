import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
    //recieving props.data
   return (
        <li>
            <span>
            <img src={props.data.photo}/></span><span className='valign'>{props.data.name}</span>
            <span className='address valign'> {props.data.address} </span>
        </li>
    )
}

