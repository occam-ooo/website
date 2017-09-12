import React from 'react';
import { Icon } from 'semantic-ui-react';
import './index.css';

const Navigation = () => (
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

export default Navigation;
