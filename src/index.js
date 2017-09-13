import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Routes from './services/navigation';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const App = () => (
  <Router>
    <Routes />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
