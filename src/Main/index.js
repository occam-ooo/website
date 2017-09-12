import React, { Component } from 'react';
import './index.css';
import Landing from '../Landing';
import Navigation from '../Navigation';
import Projects from '../Projects';

export default class Main extends Component {
  render() {
    return (
      <div className="Main-container">
        <Navigation />
        <Landing />
        <Projects />
      </div>
    );
  }
}
