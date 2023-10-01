import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions';
import RepoCard from './RepoCard';
import { fetchRepos } from '../services/repoService';
import './GitHubRepoList.css';

function GitHubRepoList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('stars');
  const [repos, setRepos] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const fetchAndSetRepos = async () => {
    if (searchQuery.trim() !== '') {
      const fetchedRepos = await fetchRepos(searchQuery, sortOption);
      setRepos(fetchedRepos);
    }
  }

  useEffect(() => {
    fetchAndSetRepos();
  }, [searchQuery, sortOption]);

  return (
    <div className="container">
      <h1 className="title">GitHub Public Repository Catalog</h1>
      <div className="inputContainer">
        <SearchBar onSearch={handleSearch} />
        <SortOptions onSortChange={handleSortChange} />
      </div>
      <div className="cardContainer">
        <RepoCard repos={repos} />
      </div>
    </div>
  );
}

export default GitHubRepoList;
