const API_KEY = "a754a608"; // Tu clave API aquí
const container = document.getElementById("container");
const searchInput = document.querySelector(".search");

let moviesData = [];

const fetchMovies = async (searchTerm) => {
  try {
    const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    moviesData = data.Search || [];
    renderMovies(moviesData);
  } catch (error) {
    console.error("Error al obtener las películas:", error);
  }
};

fetchMovies("avengers"); // Cambia "avengers" por el término de búsqueda que desees


const renderMovies = (movies) => {
  container.innerHTML = "";
  const fragment = new DocumentFragment();

  movies.forEach((movie) => {
    const cardTemplate = document.getElementById("card-template").content;
    const card = cardTemplate.cloneNode(true);

    const poster = card.querySelector(".movie-poster");
    const title = card.querySelector(".movie-title");

    title.textContent = movie.Title;
    poster.src = movie.Poster;

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
};

// const filterMovies = (searchTerm) => {
//   fetchMovies(searchTerm);
// };
const filterMovies = (searchTerm) => {
  if (searchTerm !== "") {
    fetchMovies(searchTerm);
  } else {
    renderMovies(fetchMovies("avengers")); // Renderizar las películas por defecto cuando el término de búsqueda está vacío
  }
};

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.trim();
  filterMovies(searchTerm);
});
