import React from 'react';

export function RepoDetails(props){
  return(
    <div className='RepoDetails'>
      <a href="/"><h4>TITLE{props.name}</h4></a>
      <p>DESCRIPTION{props.description}<br></br>
        <small>Number of Commits: {props.commits}</small>
      </p>
    </div>
  );
}
