import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './index.css';

export default class Navigation extends Component {
    render() {
        return (
            <div className="Navigation-container">
                <div className="Navigation-left">
                    <Icon name="github square" />
                </div>
                <div className="Navigation-right">
                    <ul>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                </div>
            </div>
        );
    }
}
