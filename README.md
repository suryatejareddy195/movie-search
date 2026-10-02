# Movie Search Web Application

## Overview
A simple frontend movie search web application built with HTML, CSS, and JavaScript. It allows users to search for movies by title and view movie posters, release years, and IMDb ratings retrieved in real time using the OMDb API.

## Features
- **Search for movies by title**: Search any movie title and retrieve matching results.
- **Display movie posters**: Shows movie posters with an automatic placeholder fallback when unavailable.
- **Display release year**: Displays the release year for each returned movie.
- **Display IMDb rating**: Fetches and displays the IMDb rating on each movie card.
- **Input validation**: Informs the user if the search query is empty.
- **Responsive user interface**: Adapts smoothly to mobile, tablet, and desktop screens using CSS Grid.

*(Note: Genre and plot summaries are not included in this basic version and can be added as future improvements.)*

## Technologies Used
- HTML
- CSS
- JavaScript
- OMDb API

## How It Works
1. The user enters a movie title into the search input and clicks the "Search" button.
2. JavaScript sends an asynchronous request to the OMDb API with the query.
3. The API returns matching movie search results.
4. The application requests additional details (including IMDb rating) for each movie.
5. JavaScript dynamically generates movie cards and displays them on the webpage.

## Project Structure
```text
Movie-Search/
├── index.html
├── style.css
├── script.js
├── .gitignore
└── README.md
```

## How to Run
1. Clone or download this repository.
2. Open `index.html` directly in any modern web browser, or serve it using an extension like **Live Server**.

## API Configuration
An OMDb API key is required to fetch movie data:
1. Register for a free API key at [OMDb API](https://www.omdbapi.com/apikey.aspx).
2. In `script.js`, insert your key into the placeholder:
   ```javascript
   const API_KEY = "YOUR_OMDB_API_KEY";
   ```
3. Do not push your personal API key to public repositories.

## Future Improvements
- Display movie genre and plot summary
- Pagination for browsing multiple result pages
- Search autocomplete or suggestions
- Movie detail popup / modal
