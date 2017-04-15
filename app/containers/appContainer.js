import React, { Component } from 'react';
import initialState from '../../sourceData.json';//raw json
import policiesContainer from './containers/policiesContainer';
import stagesContainer from './containers/stagesContainer';
import scoreContainer from './containers/scoreContainer';

export default class AppContainer extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  render() {
    console.log(this);
    return (
      <div >
        <h1 >Vera Project</h1>
        <policiesContainer />
        <stagesContainer />
        <scoreContainer />
      </div>
    );
  }
}
