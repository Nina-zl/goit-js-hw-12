import axios from 'axios';

const API_KEY = '43492556-fe80a4659b666c8db93afe52a';

let per_page = 15;


export const getImagesByQuery = async (query, page) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page,
        page
      }
    });
    
    return response.data;
    
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];  
  }
}

