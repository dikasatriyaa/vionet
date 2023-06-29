import '../script/component/search-bar';

const main = () => {
  const baseUrl = 'https://api.themoviedb.org/3/trending/all/day?api_key=02d10ea09a7418cc5a272a59b2177ca7';
  const search = 'https://api.themoviedb.org/3/search/movie?api_key=02d10ea09a7418cc5a272a59b2177ca7&query=';
  const searchElement = document.querySelector('search-bar');
  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  const renderAllBooks = (results) => {
    const listBookElement = document.querySelector('#listMovie');
    listBookElement.innerHTML = '';
    if (results.length < 1) {
      listBookElement.innerHTML = `
      <h1> Maaf Pencarian anda Tidak ditemukan</h1>
      `;
    } else {
      results.forEach((movie) => {
        const { title: movieTitle, poster_path: posterPath, release_date: releaseDate } = movie;
        if (movieTitle !== undefined && posterPath !== null) {
          listBookElement.innerHTML += `
              <div class="col">
                <div class="card wrapper-image shadow-image border-0" style="width: 12rem; margin: 0px -5px">
                  <img src="https://image.tmdb.org/t/p/w185${posterPath}" class="card-img" alt="..." style="width: 100%;height:320px">
                  <div class="card-body">
                      <p class="card-title text-start" style="color:white;">${movieTitle}</p>
                      <p>${releaseDate}</p>
                  </div>
                </div>
              </div>
              `;
        }
      });
    }
  };
  const onButtonSearchClicked = () => {
    const data = search + searchElement.value.toUpperCase();
    fetch(`${data}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllBooks(responseJson.results);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const getMovie = async () => {
    await fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllBooks(responseJson.results);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  searchElement.eventClick = onButtonSearchClicked;

  document.addEventListener('DOMContentLoaded', async () => {
    const headling = document.querySelector('#headling');
    searchElement.addEventListener('submit', (e) => {
      if (searchElement.value.length <= 0) {
        headling.innerHTML = '';
        headling.innerHTML = '<p>Trending</P>';
        getMovie();
      } else {
        headling.innerHTML = '';
        headling.innerHTML = '<p>Hasil Pencarian</P>';
        onButtonSearchClicked();
      }
      e.preventDefault();
    });

    getMovie();
  });
};
export default main;
