import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
    //recieving props.data
   return (
        <li><img src={props.data.photo}/>{props.data.name}{props.data.address}</li>
    )
}

