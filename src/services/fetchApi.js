import axios from 'axios';

export const getImages = async (searchQuery, page) => {
  try {
    const response = await axios(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=25182947-9cfc659c765cf87b0696ff639&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
