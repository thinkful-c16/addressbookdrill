import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
    //recieving props.data
   return (
        <li>
            <span className='imgname'>
            <img src={props.data.photo}/><span className='valign'>{props.data.name}</span></span>
            <span className='address valign'> {props.data.address} </span>
        </li>
    )
}

