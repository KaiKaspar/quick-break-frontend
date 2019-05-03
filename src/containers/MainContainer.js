import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Homepage from './Homepage';

class MainContainer extends Component {

  render() {
    return (
      <Router>
        <div className="MainContainer">
          <Route exact path='/' component={Homepage} />
        </div>
      </Router>
    );
  }

}

export default MainContainer;
