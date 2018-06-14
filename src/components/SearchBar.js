import React, { Component } from 'react';
import { Results } from './Results';

// Parent
class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      placeholder: 'Find a user..',
      value: '',
      isLoaded: false,
      fullName: '',
      username: '',
      location: '',
      reposUrl: '',
      repos: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    fetch(`https://api.github.com/users/${this.state.value}`)
      .then((response) => response.json())
      .then((result) => {
        function repoFetch(){
          fetch(`${result.repos_url}`)
          .then(res => res.json())
          .then(result => {console.log(result)})
        }

        this.setState({
          isLoaded: true,
          fullName: result.name,
          username: result.login,
          location: result.location,
          reposUrl: result.repos_url,
          // if there is an existing user, then can call the second fetch function
          repos: result.message !== 'Not Found' ? repoFetch() : 'not fetched repo'
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render(){
    return(
        <div className='SearchBar'>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder={this.state.placeholder}
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br></br>

            <div className='buttons-box'>
              {/* right now both buttons do the same thing, it is more just for show */}
              <button type="submit" style={{marginRight:'2.5px'}}>GitHub Search</button>
              <button type="submit" style={{marginLeft:'2.5px'}}>I'm Feeling Lucky</button>
            </div>
          </form>
          <Results searchResults={this.state}/>
        </div>
    );
  }
}

export { SearchBar };
