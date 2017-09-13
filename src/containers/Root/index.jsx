import React from 'react';
import Header from '../../components/Header';
import './index.css';

import logo from './logo.svg';

const Root = () => (
  <div>
    <Header />
    <div className="Root-container">
      <div className="Root-logo-container">
        <div className="Root-logo">
          <img alt="logo" src={logo} />
        </div>
        <div className="Root-slogan">Mobile and web made simple.</div>
      </div>
    </div>
  </div>
);

export default Root;
