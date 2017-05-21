import React, { Component } from 'react';
import './index.css';
import logo from './logo.svg';

export default class Landing extends Component {
    render() {
        return (
            <div className="Landing-container">
                <div className="Landing-logo-container">
                    <div className="Landing-logo">
                        <img alt="logo" src={logo} />
                    </div>
                    <div className="Landing-slogan">
                        Mobile and web made simple.
                    </div>
                </div>
            </div>
        );
    }
}
