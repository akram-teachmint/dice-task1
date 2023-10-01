import React from 'react';
import styles from './RepoCard.module.css';

function RepoCard({ repos }) {
  return (
    <div className={styles.cardContainer}>
      {repos.map((repo) => (
        <div key={repo.id} className={styles.repoCard}>
          <img src={repo.owner.avatar_url} alt="Avatar" className={styles.avatar} />
          <p><b>Repo Name</b>: {repo.name}</p>
          <p><b>Stars</b>: {repo.stargazers_count}</p>
          <p><b>Language</b>: {repo.language}</p>
          <p><b>Description</b>: {repo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RepoCard;
