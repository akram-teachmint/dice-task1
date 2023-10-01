import React from 'react';
import styles from './SortOptions.module.css';

const sortOptions = [
  { value: 'stars', label: 'Stars' },
  { value: 'watchers', label: 'Watchers' },
  { value: 'score', label: 'Score' },
  { value: 'name', label: 'Name' },
  { value: 'created', label: 'Created At' },
  { value: 'updated', label: 'Updated At' },
];

function SortOptions({ onSortChange }) {
  const handleSortChange = (e) => {
    const selectedSortOption = e.target.value;
    onSortChange(selectedSortOption);
  };

  return (
    <div className={styles.SortDiv}>
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={handleSortChange}>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortOptions;
