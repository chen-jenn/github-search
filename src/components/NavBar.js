import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return(
      <nav className='NavBar'>
        <div>
          <a href="/">About</a>
          <a href="/">Store</a>
        </div>

        <div>
          <a href="https://github.com/">Github</a>
          <a href="/">Sign In</a>
        </div>
      </nav>
    );
  }
}

export { NavBar };
