import React from 'react';

// Display profile name, user name, location, and top 5 repos
export function Results(props){
  const results = props.searchResults;
  const userRepos = results.repos;

  if (results.isLoaded === true && results.username !== undefined){
    return(
      <div className='Results'>
        <h1>{results.fullName}</h1>
        <p>Username: {results.username}</p>
        <p>Location: {results.location}</p>

        <hr></hr>

        <h2>Top Repositories</h2>
        {/* Have the promise.then() here instead of in the parent componennt since userRepos is still technically a promise */}
        <div>{console.log(userRepos
          .then((results) =>
            {results.map((repo) => {
              console.log(repo.name)
            })}
          ))}</div>
      </div>
    );
  } else if (results.username === undefined){
    return(
      <div className='Results'>User not found!</div>
    )
  } else {
    return(
      <div className='Results'></div>
    )
  }
}
