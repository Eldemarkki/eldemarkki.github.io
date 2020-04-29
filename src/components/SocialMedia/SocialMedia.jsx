import React from 'react';
import './SocialMedia.css';
import SocialMediaLink from './SocialMediaLink.jsx';

function SocialMedia() {
    return (
        <div id="socialMedia">
            <h2>Social media</h2>
            <div className="socialMediaContainer">
                <SocialMediaLink href="https://github.com/Eldemarkki" title="GitHub" linkClassName="githubLink" />
                <SocialMediaLink href="https://twitter.com/eldemarkki" title="Twitter" linkClassName="twitterLink" />
                <SocialMediaLink href="https://eldemarkki.itch.io/" title="Itch.io" linkClassName="itchioLink"/>
            </div>
        </div>
    );
}

export default SocialMedia;