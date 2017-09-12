import React from 'react';
import './index.css';
import Landing from '../Landing';
import Navigation from '../Navigation';
import Projects from '../Projects';

const Main = () => (
  <div className="Main-container">
    <Navigation />
    <Landing />
    <Projects />
  </div>
);

export default Main;
