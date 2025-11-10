# Apache Pig Simulator - Command Reference

## Quick Start Commands

### Basic Commands
```
help         - Show all available commands
examples     - Show example queries with the movie dataset
clear        - Clear the terminal screen
quit         - Exit Pig shell
```

---

## Movie Dataset Commands

### 1. Load the Movies Dataset
```pig
movies = LOAD '/data/movies.txt' USING PigStorage(',') AS (id:int, title:chararray, year:int, rating:double, genre:chararray, director:chararray, revenue:long);
```

### 2. View All Movies
```pig
DUMP movies;
```

### 3. Describe the Schema
```pig
DESCRIBE movies;
```

---

## Filtering Operations

### Filter High-Rated Movies (Rating >= 9.0)
```pig
high_rated = FILTER movies BY rating >= 9.0;
DUMP high_rated;
```

### Filter Movies by Genre
```pig
action_movies = FILTER movies BY genre == 'Action';
DUMP action_movies;
```

### Filter Movies by Year Range
```pig
nineties_movies = FILTER movies BY year >= 1990 AND year < 2000;
DUMP nineties_movies;
```

### Filter High Revenue Movies
```pig
blockbusters = FILTER movies BY revenue > 200000000;
DUMP blockbusters;
```

---

## Projection Operations (FOREACH...GENERATE)

### Project Title and Year Only
```pig
titles_years = FOREACH movies GENERATE title, year;
DUMP titles_years;
```

### Project with Calculated Field
```pig
movie_info = FOREACH movies GENERATE title, year, rating, (revenue / 1000000) AS revenue_millions;
DUMP movie_info;
```

### Project Selected Columns
```pig
basic_info = FOREACH movies GENERATE id, title, rating, genre;
DUMP basic_info;
```

---

## Grouping Operations

### Group by Genre
```pig
genre_group = GROUP movies BY genre;
DUMP genre_group;
```

### Group by Genre with Statistics
```pig
genre_group = GROUP movies BY genre;
genre_stats = FOREACH genre_group GENERATE group AS genre, COUNT(movies) AS count, AVG(movies.rating) AS avg_rating;
DUMP genre_stats;
```

### Group by Year
```pig
year_group = GROUP movies BY year;
year_count = FOREACH year_group GENERATE group AS year, COUNT(movies) AS movie_count;
DUMP year_count;
```

### Group by Director
```pig
director_group = GROUP movies BY director;
director_count = FOREACH director_group GENERATE group AS director, COUNT(movies) AS num_movies;
DUMP director_count;
```

---

## Sorting Operations

### Order by Rating (Descending)
```pig
sorted_by_rating = ORDER movies BY rating DESC;
DUMP sorted_by_rating;
```

### Order by Revenue (Descending)
```pig
sorted_by_revenue = ORDER movies BY revenue DESC;
DUMP sorted_by_revenue;
```

### Order by Year (Ascending)
```pig
sorted_by_year = ORDER movies BY year ASC;
DUMP sorted_by_year;
```

### Order by Multiple Fields
```pig
sorted_multi = ORDER movies BY genre ASC, rating DESC;
DUMP sorted_multi;
```

---

## Limiting Results

### Top 5 Movies by Revenue
```pig
top_revenue = ORDER movies BY revenue DESC;
top_5 = LIMIT top_revenue 5;
DUMP top_5;
```

### Top 10 Highest Rated
```pig
top_rated = ORDER movies BY rating DESC;
top_10 = LIMIT top_rated 10;
DUMP top_10;
```

---

## Combined Operations

### High-Rated Action Movies
```pig
action_movies = FILTER movies BY genre == 'Action';
high_rated_action = FILTER action_movies BY rating >= 8.5;
DUMP high_rated_action;
```

### Movies from Specific Director, Sorted by Rating
```pig
nolan_movies = FILTER movies BY director == 'Christopher Nolan';
sorted_nolan = ORDER nolan_movies BY rating DESC;
DUMP sorted_nolan;
```

### Average Rating by Decade
```pig
movies_with_decade = FOREACH movies GENERATE *, (year / 10) * 10 AS decade;
decade_group = GROUP movies_with_decade BY decade;
decade_stats = FOREACH decade_group GENERATE group AS decade, AVG(movies_with_decade.rating) AS avg_rating, COUNT(movies_with_decade) AS count;
DUMP decade_stats;
```

### Top Revenue Movies with Rating > 8.5
```pig
quality_movies = FILTER movies BY rating > 8.5;
top_revenue = ORDER quality_movies BY revenue DESC;
top_earners = LIMIT top_revenue 5;
result = FOREACH top_earners GENERATE title, revenue, rating;
DUMP result;
```

---

## Distinct Operations

### Get Unique Genres
```pig
genres = FOREACH movies GENERATE genre;
unique_genres = DISTINCT genres;
DUMP unique_genres;
```

### Get Unique Directors
```pig
directors = FOREACH movies GENERATE director;
unique_directors = DISTINCT directors;
DUMP unique_directors;
```

---

## Store Operations

### Store Filtered Results
```pig
high_rated = FILTER movies BY rating >= 9.0;
STORE high_rated INTO '/output/high_rated_movies' USING PigStorage(',');
```

### Store Grouped Results
```pig
genre_group = GROUP movies BY genre;
genre_stats = FOREACH genre_group GENERATE group, COUNT(movies), AVG(movies.rating);
STORE genre_stats INTO '/output/genre_statistics' USING PigStorage('\t');
```

---

## Advanced Queries

### Movies with Revenue Greater than Average
```pig
all_movies = GROUP movies ALL;
avg_revenue = FOREACH all_movies GENERATE AVG(movies.revenue) AS avg_rev;
above_avg = FILTER movies BY revenue > avg_revenue.avg_rev;
DUMP above_avg;
```

### Genre Analysis
```pig
genre_group = GROUP movies BY genre;
genre_analysis = FOREACH genre_group GENERATE 
    group AS genre,
    COUNT(movies) AS total_movies,
    AVG(movies.rating) AS avg_rating,
    MAX(movies.rating) AS max_rating,
    MIN(movies.rating) AS min_rating,
    SUM(movies.revenue) AS total_revenue;
DUMP genre_analysis;
```

---

## Dataset Information

The simulator includes a movie dataset with the following fields:
- **id**: Movie ID (integer)
- **title**: Movie title (string)
- **year**: Release year (integer)
- **rating**: IMDb rating (float, 0-10 scale)
- **genre**: Movie genre (Drama, Crime, Action, Sci-Fi, etc.)
- **director**: Director name (string)
- **revenue**: Box office revenue in USD (integer)

### Sample Movies in Dataset:
1. The Shawshank Redemption (1994) - Rating: 9.3
2. The Godfather (1972) - Rating: 9.2
3. The Dark Knight (2008) - Rating: 9.0
4. Pulp Fiction (1994) - Rating: 8.9
5. Forrest Gump (1994) - Rating: 8.8
6. Inception (2010) - Rating: 8.8
7. The Matrix (1999) - Rating: 8.7
8. Goodfellas (1990) - Rating: 8.7
9. Interstellar (2014) - Rating: 8.6
10. The Silence of the Lambs (1991) - Rating: 8.6
... and 5 more!

---

## Tips for Using the Simulator

1. **Start Simple**: Begin with basic LOAD and DUMP commands
2. **Chain Operations**: Create intermediate variables for complex queries
3. **Check Schema**: Use DESCRIBE to verify data structure
4. **Use ILLUSTRATE**: Visualize data flow with ILLUSTRATE command
5. **Copy-Paste Friendly**: Commands are formatted for easy copy-paste
6. **Case Insensitive**: Commands work in upper or lower case
7. **Command History**: Use Up/Down arrow keys to navigate command history

---

## Common Workflow Example

```pig
-- 1. Load the data
movies = LOAD '/data/movies.txt' USING PigStorage(',') AS (id:int, title:chararray, year:int, rating:double, genre:chararray, director:chararray, revenue:long);

-- 2. Check the schema
DESCRIBE movies;

-- 3. Filter for high-rated movies
high_rated = FILTER movies BY rating >= 9.0;

-- 4. Sort by rating
sorted = ORDER high_rated BY rating DESC;

-- 5. Display results
DUMP sorted;

-- 6. Store results
STORE sorted INTO '/output/top_movies' USING PigStorage(',');
```

---

## For Lab Practicals

### Quick Demo Sequence:
1. Type `examples` to see all commands
2. Copy the LOAD command and press Enter
3. Type `DUMP movies;` to show the dataset
4. Copy any filter/group/order command from the examples
5. Type `DUMP <variable_name>;` to show results

The simulator will display realistic Pig logs and outputs that look authentic for demonstrations!

---

**Note**: This is a simulation tool. All operations are executed client-side in the browser. No actual Hadoop cluster or file system operations occur.

