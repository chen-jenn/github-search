import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import { Results } from './Results';

/*Holds all the components except NavBar*/
class HomePage extends Component {
  render(){
    return(
      <div className='HomePage'>
        <div className='logo'>GitHub</div>
        <SearchBar />
        <Results />
      </div>
    );
  }
}

export { HomePage };
