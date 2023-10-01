import axios from 'axios';

export async function fetchRepos(searchQuery, sortOption) {
  const apiUrl = 'https://api.github.com/search/repositories';
  const params = {
    q:  searchQuery,
    sort: sortOption,
  }
  
  try {
    const response = await axios({
      method: 'GET',
      url: apiUrl,
      params:params,
    })

    if (response.status === 200) {
      return response.data.items;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    // we can show API failure message using toast or other component
    // console.error('Error:', error);
    return [];
  }
}
