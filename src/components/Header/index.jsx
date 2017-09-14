import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';
import {
  ROUTE_ROOT,
  ROUTE_ABOUT,
  ROUTE_PROJECTS
} from '../../services/navigation/routes';
import './index.css';

const Header = ({ ...props }) => (
  <div className="Header-container">
    <Menu inverted pointing secondary stackable>
      <Link to={ROUTE_ROOT}>
        <Menu.Item
          name="home"
          active={ROUTE_ROOT === props.match.path}
          onClick={() => {}}
        />
      </Link>
      <Link to={ROUTE_PROJECTS}>
        <Menu.Item
          name="Projects"
          active={ROUTE_PROJECTS === props.match.path}
        />
      </Link>
      <Link to={ROUTE_ABOUT}>
        <Menu.Item name="About" active={ROUTE_ABOUT === props.match.path} />
      </Link>
      <Menu.Item name="Contact" onClick={() => {}} />
    </Menu>
    <div className="Header-left">
      <Icon name="github square" />
    </div>
  </div>
);

export default Header;
