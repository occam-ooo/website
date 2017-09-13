import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import {
  ROUTE_ROOT,
  ROUTE_ABOUT,
  ROUTE_PROJECTS
} from '../../services/navigation/routes';
import './index.css';

const Header = () => (
  <div className="Navigation-container">
    <div className="Navigation-left">
      <Icon name="github square" />
    </div>
    <div className="Navigation-right">
      <ul>
        <li>
          <Link to={ROUTE_ROOT}>Home</Link>
        </li>
        <li>
          <Link to={ROUTE_ABOUT}>Projects</Link>
        </li>
        <Link to={ROUTE_PROJECTS}>About</Link>
        <li>Contact</li>
      </ul>
    </div>
  </div>
);

export default Header;
