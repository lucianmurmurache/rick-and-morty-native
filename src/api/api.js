const BASE_URL = 'https://rickandmortyapi.com/api/';

const request = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`);

  try {
    if (!response.ok) {
      console.log(response.statusText);
    }
    const result = await response.json();

    return result;
  } catch {
    throw new Error();
  }
};

export const getCharacters = (pageNumber) =>
  request(`character/?page=${pageNumber}`);
export const getLocations = (pageNumber) =>
  request(`location?page=${pageNumber}`);
export const getEpisodes = (pageNumber) =>
  request(`episode?page=${pageNumber}`);
