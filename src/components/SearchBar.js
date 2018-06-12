import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      placeholder: 'Find a user..',
      name: 'name',
      type: 'text',
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    // console.log('Clicked the button');
    this.setState({value: this.element.value})
  }

  render(){
    return(
      <div className='SearchBar'>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder={this.state.placeholder}
            type={this.state.type}
            ref={el => this.element = el}
            >
          </input><br></br>

          <div className='buttons-box'>
            {/* right now both buttons do the same thing, it is more just for show */}
            <button type="submit" style={{marginRight:'2.5px'}}>GitHub Search</button>
            <button type="submit" style={{marginLeft:'2.5px'}}>I'm Feeling Lucky</button>
          </div>
        </form>
        {console.log(this.state.value)}
      </div>
    );
  }
}

export { SearchBar };
