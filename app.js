function renderList(movies) {
  let movieList = document.querySelector('.movie-list');
  for (let i = 0; i < movies.length; i++) {
    let movieResult = document.createElement('div');
    let moviePoster = document.createElement('img');
    moviePoster.src = movies[i].Poster;
    let movieTitle = document.createElement('p');
    movieTitle.textContent = movies[i].Title;
    let movieYear = document.createElement('p');
    movieYear.textContent = movies[i].Year;
    movieResult.append(moviePoster);
    movieResult.append(movieTitle);
    movieResult.append(movieYear);
    movieList.append(movieResult);
  }
}

async function parseResult(searchResult) {
  const DOMAIN = 'http://www.omdbapi.com/';
  const API_KEY = 'd715f08c';
  const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;
  try {
    let movies = await axios.get(`${BASE_URL}s=${searchResult}`);
    // console.log(movies.data.Search); // save this for future development to get data
    renderList(movies.data.Search);
  } catch (error) {
    console.log(`Error: ${error}`);
  } finally {
    console.log('Finally got it.');
  }
}

function movieSearch() {
  submission = document.querySelector('.search-section').addEventListener('submit', (e) => {
    e.preventDefault();
    parseResult(document.querySelector('#blank').value);
  });
}

movieSearch();