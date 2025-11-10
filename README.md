# Apache Pig Terminal Simulator

A realistic Apache Pig terminal simulator that mimics the behavior of Apache Pig's Grunt shell for educational and demonstration purposes.

## Features

- 🖥️ **Authentic Linux Terminal UI** - Fullscreen terminal with dark theme, looks like a real terminal
- 🐷 **Pig Latin Commands** - Supports LOAD, FILTER, FOREACH, GROUP, ORDER BY, LIMIT, DUMP, and more
- 🎬 **Pre-loaded Movie Dataset** - 100 movies with ratings, genres, directors, and revenue data
- 📊 **Realistic Output** - Shows Hadoop logs, MapReduce job information, and proper Pig output
- 💾 **Command History** - Use Up/Down arrow keys to navigate previous commands
- 🎯 **Easy to Use** - Just open the HTML file in any browser
- ⚡ **Smart LIMIT Support** - Actually respects LIMIT commands for realistic query results

## Quick Start

1. Open `index.html` in your web browser
2. Type `examples` to see all available commands
3. Type `help` for a command reference
4. Start typing Pig Latin commands!

## Basic Commands

```pig
-- Load the movie dataset (100 movies)
movies = LOAD '/data/movies.txt' USING PigStorage(',') AS (id:int, title:chararray, year:int, rating:double, genre:chararray, director:chararray, revenue:long);

-- View all 100 movies
DUMP movies;

-- Filter high-rated movies
high_rated = FILTER movies BY rating >= 9.0;
DUMP high_rated;

-- Group by genre (shows all unique genres)
genre_group = GROUP movies BY genre;
DUMP genre_group;

-- Sort by revenue and limit to top 10
top_revenue = ORDER movies BY revenue DESC;
top_10_revenue = LIMIT top_revenue 10;
DUMP top_10_revenue;
```

## Available Files

- `index.html` - Main application file (open this in browser)
- `style.css` - Terminal styling
- `script.js` - Pig simulator logic and movie dataset
- `PIG_COMMANDS.md` - Comprehensive command reference with 40+ examples
- `README.md` - This file

## Movie Dataset

The simulator includes **100 popular movies** spanning multiple decades and genres:

### Genres Available:
- **Action** (Avengers, Dark Knight, Mad Max, etc.)
- **Drama** (Shawshank Redemption, Forrest Gump, Fight Club, etc.)
- **Crime** (Godfather, Pulp Fiction, Goodfellas, etc.)
- **Sci-Fi** (Inception, The Matrix, Interstellar, Avatar, etc.)
- **Fantasy** (Lord of the Rings trilogy, etc.)
- **Animation** (Toy Story, Finding Nemo, Coco, WALL-E, etc.)
- **Thriller** (Silence of the Lambs, Se7en, Parasite, etc.)
- **Comedy, War, Western, Romance, Biography, Adventure, Sports** and more!

### Dataset Fields:
Each movie has the following fields:
- **id** - Movie ID (1-100)
- **title** - Movie title
- **year** - Release year (1972-2021)
- **rating** - IMDb rating (7.6-9.3)
- **genre** - Movie genre
- **director** - Director name (Nolan, Spielberg, Tarantino, etc.)
- **revenue** - Box office revenue in USD

### Notable Movies Included:
- The Shawshank Redemption (9.3), The Godfather (9.2), The Dark Knight (9.0)
- Schindler's List (9.0), Lord of the Rings trilogy (8.7-8.9)
- Avengers: Endgame, Titanic, Avatar, Joker (highest revenues)
- Christopher Nolan films, Quentin Tarantino films, Pixar animations
- And 80+ more amazing films!

## Advanced Query Examples (with 100 Movies)

### Filtering Examples
```pig
-- Movies from the 1990s
nineties = FILTER movies BY year >= 1990 AND year < 2000;
DUMP nineties;

-- High revenue blockbusters (>$500M)
blockbusters = FILTER movies BY revenue > 500000000;
DUMP blockbusters;

-- Animation movies with rating > 8.0
good_animations = FILTER movies BY genre == 'Animation' AND rating > 8.0;
DUMP good_animations;

-- Movies by specific director
nolan_movies = FILTER movies BY director == 'Christopher Nolan';
DUMP nolan_movies;
```

### Aggregation and Grouping
```pig
-- Count movies per genre
genre_group = GROUP movies BY genre;
genre_count = FOREACH genre_group GENERATE group AS genre, COUNT(movies) AS count;
DUMP genre_count;

-- Average rating by decade
movies_decade = FOREACH movies GENERATE *, (year/10)*10 AS decade;
decade_group = GROUP movies_decade BY decade;
decade_stats = FOREACH decade_group GENERATE group, AVG(movies_decade.rating);
DUMP decade_stats;

-- Top directors by movie count
director_group = GROUP movies BY director;
director_count = FOREACH director_group GENERATE group AS director, COUNT(movies) AS total;
sorted_directors = ORDER director_count BY total DESC;
DUMP sorted_directors;
```

### Sorting and Limiting
```pig
-- Top 20 highest rated movies
sorted_rating = ORDER movies BY rating DESC;
top_20 = LIMIT sorted_rating 20;
DUMP top_20;

-- Lowest revenue movies (first 10)
sorted_revenue = ORDER movies BY revenue ASC;
bottom_10 = LIMIT sorted_revenue 10;
DUMP bottom_10;

-- Most recent movies
sorted_year = ORDER movies BY year DESC;
recent_15 = LIMIT sorted_year 15;
DUMP recent_15;
```

### Complex Queries
```pig
-- High-rated movies with high revenue (rating > 8.5 AND revenue > $300M)
quality_blockbusters = FILTER movies BY rating > 8.5 AND revenue > 300000000;
sorted_quality = ORDER quality_blockbusters BY revenue DESC;
DUMP sorted_quality;

-- Genre-wise highest rated movie
genre_group = GROUP movies BY genre;
genre_best = FOREACH genre_group GENERATE group AS genre, MAX(movies.rating) AS best_rating;
DUMP genre_best;
```

## For Lab Demonstrations

### Quick Demo Steps:
1. Open `index.html` in browser
2. Type `examples` - shows all available commands
3. Copy and run the LOAD command
4. Try various FILTER, GROUP, ORDER operations on 100 movies
5. Use LIMIT to control output size
6. Use DUMP to display results

All outputs look authentic with:
- Hadoop connection logs
- MapReduce job progress
- Pig version information
- Realistic data output format
- Actual 100-movie dataset processing

## Tips

- **Commands are case-insensitive** - `DUMP`, `dump`, or `Dump` all work
- **Semicolons are optional** - Both `DUMP movies;` and `DUMP movies` work
- **Use `clear`** to clear the screen
- **Use `Up/Down` arrows** for command history
- **DUMP shows all results** unless you use LIMIT first
- **LIMIT actually works** - Use it to control output size (e.g., `LIMIT movies 10`)
- **Smart variable recognition** - Name your vars descriptively (e.g., `high_rated`, `action_movies`)
- **100 movies = realistic demos** - Perfect for showing aggregations, filters, and sorts
- Check `PIG_COMMANDS.md` for 40+ complete command examples
- Type `quit` to reset the terminal

## Technical Details

- Pure HTML/CSS/JavaScript - no server required
- No external dependencies
- Works offline
- All processing happens in browser
- Responsive design

## Note

This is a simulation tool for educational purposes. It mimics Apache Pig behavior but doesn't actually connect to Hadoop or process real big data.

---

**Created for Apache Pig Big Data Lab Practicals**

Good luck with your practicals! 🐷

