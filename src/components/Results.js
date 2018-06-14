import React, { Component } from 'react';

// Display profile name, user name, location, and top 5 repos
export function Results(props){
  const results = props.searchResults

  if (results.isLoaded === true){
    return(
      <div className='Results'>
        <h1>{results.fullName}</h1>
        <p>Username: {results.username}</p>
        <p>Location: {results.location}</p>

        <hr></hr>

        <h2>Top Repositories</h2>
      </div>
    );
  } else {
    return(
      <div className='Results'></div>
    )
  }
}
