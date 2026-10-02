# Movie Search Web Application

## About
A simple frontend movie search web application built using HTML, CSS, and JavaScript. The application allows users to search for movies by title and retrieves real-time movie details using the OMDb API.

## Features
- Search for movies by title
- Display movie search results dynamically in a grid layout
- Display movie posters with a fallback image if no poster is available
- Display release year and IMDb rating for each movie
- Input validation message for empty search submissions
- Responsive interface for desktop and mobile screens

## Technologies Used
- HTML
- CSS
- JavaScript
- OMDb API

## How It Works
1. The user enters a movie title into the search input and clicks the "Search" button.
2. JavaScript sends a request to the OMDb API using the search query.
3. The API returns matching movie results.
4. For each movie, the application fetches additional details (including IMDb rating).
5. Movie cards displaying the poster, title, year, and rating are rendered dynamically on the webpage.

## Project Structure
```
movie-search/
├── index.html
├── style.css
├── script.js
├── .gitignore
└── README.md
```

## How to Run
1. Clone or download this repository to your local machine.
2. Open `index.html` directly in any modern web browser.
   - Alternatively, open the folder in an editor like VS Code and launch it using an extension like **Live Server**.

## API Configuration
This project uses the free [OMDb API](https://www.omdbapi.com/) to fetch movie data:
1. Register for a free API key at [OMDb API Key Request](https://www.omdbapi.com/apikey.aspx).
2. Set your API key in `script.js`:
   ```javascript
   const API_KEY = "YOUR_OMDB_API_KEY";
   ```
3. Never commit or expose your private API key to public repositories.

## Future Improvements
- Pagination or infinite scrolling for search results
- Detailed modal/popup view with plot summary, cast, and director
- Search autocomplete or suggestions
- Enhanced UI animations and theme toggling
