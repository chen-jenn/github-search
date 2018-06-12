import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      placeholder: 'Search..',
      name: 'name',
      type: 'text'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('Clicked the button');
  }

  handleLucky(event){
    event.preventDefault();
    console.log('Clicked lucky')
  }

  render(){
    return(
      <div className='SearchBar'>
        <form>
          <input
            placeholder={this.state.placeholder}>
          </input><br></br>

          <div className='buttons-box'>
            <button type="submit" onClick={this.handleSubmit} style={{marginRight:'2.5px'}}>GitHub Search</button>
            <button type="submit" onClick={this.handleLucky} style={{marginLeft:'2.5px'}}>I'm Feeling Lucky</button>
          </div>
        </form>
      </div>
    );
  }
}

export { SearchBar };
