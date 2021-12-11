import React, { Component } from 'react';
import './Footer.css';
import {ExternalLink} from 'react-external-link';
import Discord from './Discord.png';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a href="google.com" target="_blank" rel="noopener noreferrer">
                <img src={Discord} height="50vh"></img></a>
            </div>
        )
    }
}

export default Footer
