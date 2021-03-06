import React from 'react';
import './SocialMedia.css';
import SocialMediaLink from './SocialMediaLink.jsx';

function SocialMedia() {
    return (
        <div id="socialMedia">
            <h2>Social media</h2>
            <ul className="socialMediaContainer">
                <li><SocialMediaLink href="https://github.com/Eldemarkki" title="GitHub" linkClassName="githubLink" /></li>
                <li><SocialMediaLink href="https://eldemarkki.itch.io/" title="Itch.io" linkClassName="itchioLink"/></li>
                <li><SocialMediaLink href="https://twitter.com/eldemarkki" title="Twitter" linkClassName="twitterLink" /></li>
            </ul>
        </div>
    );
}

export default SocialMedia;