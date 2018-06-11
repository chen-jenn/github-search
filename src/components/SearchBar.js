import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      placeholder: 'Search..',
      name: 'name',
      type: 'text'
    }
  }

  render(){
    return(
      <div className='SearchBar'>
        <form>
          <input
            placeholder={this.state.placeholder}></input><br></br>
          <button type="submit">GitHub Search</button>
          <button type="submit">I'm Feeling Lucky</button>
        </form>
      </div>
    );
  }
}

export { SearchBar };
