import React from 'react';

function RepoCard({ repos }) {
  return (
    <div>
      {repos.map((repo) => (
        <div key={repo.id}>
          <img src={repo.owner.avatar_url} alt="Avatar" />
          <p>Repo Name: {repo.name}</p>
          <p>Stars: {repo.stargazers_count}</p>
          <p>Description: {repo.description}</p>
          <p>Language: {repo.language}</p>
        </div>
      ))}
    </div>
  );
}

export default RepoCard;
