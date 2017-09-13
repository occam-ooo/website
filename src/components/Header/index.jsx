import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';
import {
  ROUTE_ROOT,
  ROUTE_ABOUT,
  ROUTE_PROJECTS
} from '../../services/navigation/routes';
import './index.css';

const Header = () => (
  <div className="Header-container">
    <Menu inverted pointing secondary>
      <Link to={ROUTE_ROOT}>
        <Menu.Item name="home" active onClick={() => {}} />
      </Link>
      <Link to={ROUTE_PROJECTS}>
        <Menu.Item name="Projects" />
      </Link>
      <Link to={ROUTE_ABOUT}>
        <Menu.Item name="About" />
      </Link>
      <Menu.Item name="home" onClick={() => {}} />
    </Menu>
    <div className="Header-left">
      <Icon name="github square" />
    </div>
  </div>
);

export default Header;
