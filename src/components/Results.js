import React from 'react';
import { RepoDetails } from './RepoDetails';

// Display profile name, user name, location, and top 5 repos
export function Results(props){
  const results = props.searchResults;
  const promise = results.repos;
  function userRepos(promise){
    return promise = promise.then(results => results)
  }

  if (results.isLoaded === true && results.username !== undefined){

    return(
      <div className='Results'>
        <h1>{results.fullName}</h1>
        <p>Username: {results.username}</p>
        <p>Location: {results.location}</p>

        <hr></hr>

        <h2>Top Repositories</h2>
        {/* Have the promise.then() here instead of in the parent componennt since userRepos is still technically a promise */}

        {console.log(userRepos(promise))}

        {/* <ul>
          {
            userRepos(promise).map((repo) => {
              <li>
                <RepoDetails name={repo.name} description={'what'} commits={'over 9000'}/>
              </li>
            })
          }
        </ul> */}

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
