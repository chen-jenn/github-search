import React, { Component } from 'react';
// import { User } from '../requests/user';

// Display profile name, user name, location, and top 5 repos
class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      fullName: '',
      username: '',
      location: '',
      reposUrl: '',
      repos: []
    }
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/chen-jenn`)
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
          repos: repoFetch()
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

  render() {
    const { error, isLoaded, fullName, username, location, repos } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (username === undefined){
      return <div>User not found!</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='Results'>
          <h1>{fullName}</h1>
          <p>Username: {username}</p>
          <p>Location: {location}</p>

          <hr></hr>

          <h2>Top Repositories</h2>
          <p>{console.log(repos)}</p>
        </div>
      );
    }
  }

}

export { Results };
