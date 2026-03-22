// =============================================
// MOVIE APP - Main Server File
// =============================================

// 1. Import the packages we need
import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// 2. Load our .env file (so we can use TMDB_API_KEY)
dotenv.config();

// 3. Fix for __dirname (needed in ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 4. Create the express app
const app = express();
const PORT = 3000;

// 5. Tell Express to use EJS as our template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 6. Serve our CSS file from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// 7. Store our API key and base URL
const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// =============================================
// ROUTES
// =============================================

// HOME PAGE - Show trending movies
app.get("/", async (req, res) => {
  try {
    // Make a request to the TMDB API
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
      params: { api_key: API_KEY },
    });

    const movies = response.data.results;

    // Render the home.ejs file and pass the movies data to it
    res.render("home", {
      movies: movies,
      imgUrl: IMG_URL,
    });
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    res.render("error", { message: "Could not load movies. Try again later." });
  }
});

// SEARCH PAGE - Search for movies by name
app.get("/search", async (req, res) => {
  try {
    // Get the search query from the URL e.g. /search?query=batman
    const query = req.query.query;

    if (!query) {
      return res.redirect("/");
    }

    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });

    const movies = response.data.results;

    res.render("search", {
      movies: movies,
      imgUrl: IMG_URL,
      query: query,
    });
  } catch (error) {
    console.error("Error searching movies:", error.message);
    res.render("error", { message: "Search failed. Try again." });
  }
});

// MOVIE DETAIL PAGE - Show info about one movie
app.get("/movie/:id", async (req, res) => {
  try {
    // Get the movie id from the URL e.g. /movie/550
    const id = req.params.id;

    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: { api_key: API_KEY },
    });

    const movie = response.data;

    res.render("detail", {
      movie: movie,
      imgUrl: IMG_URL,
    });
  } catch (error) {
    console.error("Error fetching movie detail:", error.message);
    res.render("error", { message: "Movie not found." });
  }
});

// =============================================
// START THE SERVER
// =============================================
app.listen(PORT, () => {
  console.log(`Movie app running at http://localhost:${PORT}`);
});
