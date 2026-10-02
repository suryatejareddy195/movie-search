const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const movieContainer = document.getElementById("movieContainer");
const message = document.getElementById("message");

const API_KEY = "YOUR_OMDB_API_KEY"; // 🔑 Replace with your OMDb API key
const FALLBACK_POSTER = "https://via.placeholder.com/300x450?text=No+Image";

searchBtn.addEventListener("click", searchMovies);

async function searchMovies() {
  const query = searchInput.value.trim();
  movieContainer.innerHTML = "";
  message.textContent = "";

  // Empty input handling
  if (query === "") {
    message.textContent = "⚠️ Please enter a movie name.";
    return;
  }

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );

    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();

    // No results handling
    if (data.Response === "False") {
      message.textContent = "❌ MG.";
      return;
    }

    displayMovies(data.Search);
  } catch (error) {
    message.textContent = "🚫 Something went wrong. Please try again later.";
  }
}

function displayMovies(movies) {
  movies.forEach(async (movie) => {
    const details = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
    );
    const movieData = await details.json();

    const poster =
      movieData.Poster !== "N/A" ? movieData.Poster : FALLBACK_POSTER;

    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${poster}" alt="${movieData.Title}" />
      <h3>${movieData.Title}</h3>
      <p>📅 Year: ${movieData.Year}</p>
      <p>⭐ IMDb: ${movieData.imdbRating || "N/A"}</p>
    `;

    movieContainer.appendChild(card);
  });
}
