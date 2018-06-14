import React, { Component } from 'react';
import { SearchBar } from './SearchBar';

/*Holds all the components except NavBar*/
class HomePage extends Component {
  render(){
    return(
      <div className='HomePage'>
        <div className='logo'>GitHub</div>
        <SearchBar />
      </div>
    );
  }
}

export { HomePage };
