import React from 'react';
import './SocialMediaLink.css';

function SocialMediaLink(props) {
    return (
        <div tooltip={props.title}>
            <a className={"socialMediaLink " + props.linkClassName} href={props.href} target="_blank" rel="noopener noreferrer">{props.title}</a>
        </div>
    );
}

export default SocialMediaLink;