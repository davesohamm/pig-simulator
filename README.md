# Apache Pig Terminal Simulator

A realistic Apache Pig terminal simulator that mimics the behavior of Apache Pig's Grunt shell for educational and demonstration purposes.

## Features

- 🖥️ **Authentic Linux Terminal UI** - Looks like a real terminal with proper styling
- 🐷 **Pig Latin Commands** - Supports LOAD, FILTER, FOREACH, GROUP, ORDER BY, LIMIT, DUMP, and more
- 🎬 **Pre-loaded Movie Dataset** - 15 movies with ratings, genres, directors, and revenue data
- 📊 **Realistic Output** - Shows Hadoop logs, MapReduce job information, and proper Pig output
- 💾 **Command History** - Use Up/Down arrow keys to navigate previous commands
- 🎯 **Easy to Use** - Just open the HTML file in any browser

## Quick Start

1. Open `index.html` in your web browser
2. Type `examples` to see all available commands
3. Type `help` for a command reference
4. Start typing Pig Latin commands!

## Basic Commands

```pig
-- Load the movie dataset
movies = LOAD '/data/movies.txt' USING PigStorage(',') AS (id:int, title:chararray, year:int, rating:double, genre:chararray, director:chararray, revenue:long);

-- View all movies
DUMP movies;

-- Filter high-rated movies
high_rated = FILTER movies BY rating >= 9.0;
DUMP high_rated;

-- Group by genre
genre_group = GROUP movies BY genre;
DUMP genre_group;

-- Sort by revenue
top_revenue = ORDER movies BY revenue DESC;
DUMP top_revenue;
```

## Available Files

- `index.html` - Main application file (open this in browser)
- `style.css` - Terminal styling
- `script.js` - Pig simulator logic and movie dataset
- `PIG_COMMANDS.md` - Comprehensive command reference with 40+ examples
- `README.md` - This file

## Movie Dataset

The simulator includes 15 popular movies:
- The Shawshank Redemption, The Godfather, The Dark Knight
- Pulp Fiction, Forrest Gump, Inception, The Matrix
- And 8 more classic films!

Each movie has:
- ID, Title, Year, Rating, Genre, Director, Revenue

## For Lab Demonstrations

### Quick Demo Steps:
1. Open `index.html` in browser
2. Type `examples` - shows all available commands
3. Copy and run the LOAD command
4. Try various FILTER, GROUP, ORDER operations
5. Use DUMP to display results

All outputs look authentic with:
- Hadoop connection logs
- MapReduce job progress
- Pig version information
- Realistic data output format

## Tips

- Commands are case-insensitive
- Semicolons are optional
- Use `clear` to clear the screen
- Use `Up/Down` arrows for command history
- Check `PIG_COMMANDS.md` for complete command reference
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

