import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import appContainer from './containers/appContainer.js';

render(
  <Router history={browserHistory}>
    <div >
      <Route path="/" component={appContainer} />
      {this.props.children}
    </div>
  </Router>,
  document.getElementById('app')
);
