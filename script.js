// Fake Movie Dataset
const movieDataset = [
    { id: 1, title: "The Shawshank Redemption", year: 1994, rating: 9.3, genre: "Drama", director: "Frank Darabont", revenue: 28341469 },
    { id: 2, title: "The Godfather", year: 1972, rating: 9.2, genre: "Crime", director: "Francis Ford Coppola", revenue: 134966411 },
    { id: 3, title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action", director: "Christopher Nolan", revenue: 534858444 },
    { id: 4, title: "Pulp Fiction", year: 1994, rating: 8.9, genre: "Crime", director: "Quentin Tarantino", revenue: 107928762 },
    { id: 5, title: "Forrest Gump", year: 1994, rating: 8.8, genre: "Drama", director: "Robert Zemeckis", revenue: 330252182 },
    { id: 6, title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi", director: "Christopher Nolan", revenue: 292576195 },
    { id: 7, title: "The Matrix", year: 1999, rating: 8.7, genre: "Sci-Fi", director: "Lana Wachowski", revenue: 171479930 },
    { id: 8, title: "Goodfellas", year: 1990, rating: 8.7, genre: "Crime", director: "Martin Scorsese", revenue: 46836394 },
    { id: 9, title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi", director: "Christopher Nolan", revenue: 188020017 },
    { id: 10, title: "The Silence of the Lambs", year: 1991, rating: 8.6, genre: "Thriller", director: "Jonathan Demme", revenue: 130742922 },
    { id: 11, title: "Saving Private Ryan", year: 1998, rating: 8.6, genre: "War", director: "Steven Spielberg", revenue: 216540909 },
    { id: 12, title: "The Green Mile", year: 1999, rating: 8.6, genre: "Drama", director: "Frank Darabont", revenue: 136801374 },
    { id: 13, title: "Gladiator", year: 2000, rating: 8.5, genre: "Action", director: "Ridley Scott", revenue: 187705427 },
    { id: 14, title: "The Departed", year: 2006, rating: 8.5, genre: "Crime", director: "Martin Scorsese", revenue: 132384315 },
    { id: 15, title: "The Prestige", year: 2006, rating: 8.5, genre: "Drama", director: "Christopher Nolan", revenue: 53089891 },
];

// Store loaded datasets
let loadedData = {
    movies: [...movieDataset]
};

// Command history
let commandHistory = [];
let historyIndex = -1;

// Output element
const outputDiv = document.getElementById('output');
const commandInput = document.getElementById('command-input');

// Display welcome banner
function displayBanner() {
    const banner = `
Apache Pig version 0.17.0 (r1797386)
Logging initialized using configuration in jar:file:/usr/local/pig/pig-0.17.0-core-h2.jar!/org/apache/pig/impl/util/log4jconf.default
Connected to Hadoop 3.2.1 at hdfs://localhost:9000
Connected to Hive Metastore at thrift://localhost:9083

Type 'help' for available commands or 'examples' for sample queries.
`;
    appendOutput(banner, 'banner');
}

// Append output to terminal
function appendOutput(text, className = '') {
    const line = document.createElement('div');
    line.className = `output-line ${className}`;
    line.textContent = text;
    outputDiv.appendChild(line);
    scrollToBottom();
}

// Scroll terminal to bottom
function scrollToBottom() {
    const terminalBody = document.querySelector('.terminal-body');
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Process Pig commands
function processCommand(input) {
    const trimmed = input.trim();
    
    if (!trimmed) return;
    
    // Add to history
    commandHistory.push(trimmed);
    historyIndex = commandHistory.length;
    
    // Display command
    appendOutput(`grunt> ${trimmed}`, 'command');
    
    // Parse and execute command
    executeCommand(trimmed);
}

// Execute Pig command
function executeCommand(cmd) {
    const lowerCmd = cmd.toLowerCase().trim();
    
    // Remove semicolon at the end if present
    const cleanCmd = cmd.trim().replace(/;$/, '');
    
    if (lowerCmd === 'help') {
        showHelp();
    } else if (lowerCmd === 'examples') {
        showExamples();
    } else if (lowerCmd === 'clear' || lowerCmd === 'cls') {
        outputDiv.innerHTML = '';
    } else if (lowerCmd === 'quit' || lowerCmd === 'exit') {
        appendOutput('\nGoodbye!', 'success');
        setTimeout(() => {
            outputDiv.innerHTML = '';
            displayBanner();
        }, 1500);
    } else if (lowerCmd.includes(' load ') || lowerCmd.startsWith('load ') || lowerCmd.includes('= load')) {
        handleLoadCommand(cleanCmd);
    } else if (lowerCmd.includes('filter')) {
        handleFilterCommand(cleanCmd);
    } else if (lowerCmd.includes('foreach') && lowerCmd.includes('generate')) {
        handleForeachCommand(cleanCmd);
    } else if (lowerCmd.includes('group')) {
        handleGroupCommand(cleanCmd);
    } else if (lowerCmd.includes('order') && lowerCmd.includes('by')) {
        handleOrderCommand(cleanCmd);
    } else if (lowerCmd.includes('limit')) {
        handleLimitCommand(cleanCmd);
    } else if (lowerCmd.includes('dump')) {
        handleDumpCommand(cleanCmd);
    } else if (lowerCmd.includes('describe')) {
        handleDescribeCommand(cleanCmd);
    } else if (lowerCmd.includes('illustrate')) {
        handleIllustrateCommand(cleanCmd);
    } else if (lowerCmd.includes('store')) {
        handleStoreCommand(cleanCmd);
    } else if (lowerCmd.includes('join')) {
        handleJoinCommand(cleanCmd);
    } else if (lowerCmd.includes('distinct')) {
        handleDistinctCommand(cleanCmd);
    } else if (lowerCmd.includes('=')) {
        // Generic variable assignment - accept anything with = as valid
        appendOutput('OK\n', 'success');
    } else {
        appendOutput('ERROR: Syntax error in Pig script. Check your Pig Latin syntax.', 'error');
        appendOutput('Type "help" for available commands or "examples" for sample queries.\n', 'info');
    }
}

function handleLoadCommand(cmd) {
    appendOutput('2024-11-10 10:32:15,234 [main] INFO  org.apache.pig.backend.hadoop.executionengine.HExecutionEngine - Connecting to hadoop file system at: hdfs://localhost:9000', 'info');
    appendOutput('2024-11-10 10:32:15,567 [main] INFO  org.apache.pig.backend.hadoop.executionengine.HExecutionEngine - Successfully connected', 'info');
    appendOutput('OK\n', 'success');
}

function handleFilterCommand(cmd) {
    appendOutput('2024-11-10 10:32:16,123 [main] INFO  org.apache.pig.backend.hadoop.executionengine.mapReduceLayer.MapReduceLauncher - Processing FILTER operation', 'info');
    appendOutput('OK\n', 'success');
}

function handleForeachCommand(cmd) {
    appendOutput('2024-11-10 10:32:16,456 [main] INFO  org.apache.pig.backend.hadoop.executionengine.mapReduceLayer.MapReduceLauncher - Processing FOREACH operation', 'info');
    appendOutput('OK\n', 'success');
}

function handleGroupCommand(cmd) {
    appendOutput('2024-11-10 10:32:16,789 [main] INFO  org.apache.pig.backend.hadoop.executionengine.mapReduceLayer.MapReduceLauncher - Processing GROUP operation', 'info');
    appendOutput('OK\n', 'success');
}

function handleOrderCommand(cmd) {
    appendOutput('2024-11-10 10:32:17,012 [main] INFO  org.apache.pig.backend.hadoop.executionengine.mapReduceLayer.MapReduceLauncher - Processing ORDER operation', 'info');
    appendOutput('OK\n', 'success');
}

function handleLimitCommand(cmd) {
    appendOutput('2024-11-10 10:32:17,234 [main] INFO  org.apache.pig.backend.hadoop.executionengine.mapReduceLayer.MapReduceLauncher - Processing LIMIT operation', 'info');
    appendOutput('OK\n', 'success');
}

function handleDumpCommand(cmd) {
    // Extract variable name
    const match = cmd.match(/dump\s+(\w+)/i);
    if (!match) {
        appendOutput('ERROR: Invalid DUMP syntax', 'error');
        return;
    }
    
    const varName = match[1].toLowerCase();
    
    appendOutput('2024-11-10 10:32:17,567 [main] INFO  org.apache.pig.tools.pigstats.ScriptState - Pig script settings are added to the job', 'info');
    appendOutput('2024-11-10 10:32:17,789 [main] INFO  org.apache.pig.backend.hadoop.executionengine.mapReduceLayer.JobControlCompiler - mapred.job.reduce.markreset.buffer.percent is not set, set to default 0.3', 'info');
    appendOutput('2024-11-10 10:32:18,012 [main] INFO  org.apache.pig.backend.hadoop.executionengine.mapReduceLayer.MapReduceLauncher - 1 map-reduce job(s) to submit', 'info');
    appendOutput('2024-11-10 10:32:18,234 [main] INFO  org.apache.pig.backend.hadoop.executionengine.mapReduceLayer.MapReduceLauncher - 100% complete', 'info');
    appendOutput('2024-11-10 10:32:18,456 [main] INFO  org.apache.pig.tools.pigstats.SimplePigStats - Script Statistics:', 'info');
    appendOutput('   HadoopVersion: 3.2.1', 'info');
    appendOutput('   PigVersion: 0.17.0', 'info');
    appendOutput('   Success!\n', 'info');
    
    // Display sample results based on variable name
    if (varName.includes('movie') || varName === 'movies') {
        displayMovieResults(loadedData.movies.slice(0, 10));
    } else if (varName.includes('high')) {
        const filtered = loadedData.movies.filter(m => m.rating >= 9.0);
        displayMovieResults(filtered);
    } else if (varName.includes('genre') || varName.includes('group')) {
        displayGenreGroup();
    } else if (varName.includes('year')) {
        displayYearGroup();
    } else if (varName.includes('director')) {
        displayDirectorResults();
    } else if (varName.includes('revenue') || varName.includes('top')) {
        const sorted = [...loadedData.movies].sort((a, b) => b.revenue - a.revenue).slice(0, 5);
        displayRevenueResults(sorted);
    } else {
        displayMovieResults(loadedData.movies.slice(0, 5));
    }
}

function displayMovieResults(movies) {
    movies.forEach(movie => {
        appendOutput(`(${movie.id},${movie.title},${movie.year},${movie.rating},${movie.genre},${movie.director},${movie.revenue})`, 'result-table');
    });
    appendOutput('');
}

function displayGenreGroup() {
    const genreMap = {};
    loadedData.movies.forEach(movie => {
        if (!genreMap[movie.genre]) {
            genreMap[movie.genre] = [];
        }
        genreMap[movie.genre].push(movie);
    });
    
    Object.keys(genreMap).sort().forEach(genre => {
        const count = genreMap[genre].length;
        const avgRating = (genreMap[genre].reduce((sum, m) => sum + m.rating, 0) / count).toFixed(2);
        appendOutput(`(${genre},${count},${avgRating})`, 'result-table');
    });
    appendOutput('');
}

function displayYearGroup() {
    const yearMap = {};
    loadedData.movies.forEach(movie => {
        if (!yearMap[movie.year]) {
            yearMap[movie.year] = [];
        }
        yearMap[movie.year].push(movie);
    });
    
    Object.keys(yearMap).sort().forEach(year => {
        const count = yearMap[year].length;
        appendOutput(`(${year},${count})`, 'result-table');
    });
    appendOutput('');
}

function displayDirectorResults() {
    const directorMap = {};
    loadedData.movies.forEach(movie => {
        if (!directorMap[movie.director]) {
            directorMap[movie.director] = 0;
        }
        directorMap[movie.director]++;
    });
    
    Object.entries(directorMap)
        .sort((a, b) => b[1] - a[1])
        .forEach(([director, count]) => {
            appendOutput(`(${director},${count})`, 'result-table');
        });
    appendOutput('');
}

function displayRevenueResults(movies) {
    movies.forEach(movie => {
        appendOutput(`(${movie.title},${movie.revenue})`, 'result-table');
    });
    appendOutput('');
}

function handleDescribeCommand(cmd) {
    const match = cmd.match(/describe\s+(\w+)/i);
    if (!match) {
        appendOutput('ERROR: Invalid DESCRIBE syntax', 'error');
        return;
    }
    
    appendOutput('movies: {id: int,title: chararray,year: int,rating: double,genre: chararray,director: chararray,revenue: long}', 'info');
    appendOutput('');
}

function handleIllustrateCommand(cmd) {
    appendOutput('2024-11-10 10:32:19,123 [main] INFO  org.apache.pig.tools.pigstats.ScriptState - Pig Features used in the script: UNKNOWN', 'info');
    appendOutput('---------------------------------------------------------------------', 'result-table');
    appendOutput('| movies     | id:int | title:chararray           | year:int | rating:double | genre:chararray | director:chararray       | revenue:long |', 'result-table');
    appendOutput('---------------------------------------------------------------------', 'result-table');
    appendOutput('|            | 1      | The Shawshank Redemption  | 1994     | 9.3           | Drama          | Frank Darabont          | 28341469     |', 'result-table');
    appendOutput('|            | 3      | The Dark Knight           | 2008     | 9.0           | Action         | Christopher Nolan       | 534858444    |', 'result-table');
    appendOutput('---------------------------------------------------------------------\n', 'result-table');
}

function handleStoreCommand(cmd) {
    const match = cmd.match(/store\s+(\w+)\s+into\s+'([^']+)'/i);
    if (!match) {
        appendOutput('ERROR: Invalid STORE syntax', 'error');
        return;
    }
    
    const [, varName, path] = match;
    appendOutput('2024-11-10 10:32:19,456 [main] INFO  org.apache.pig.backend.hadoop.executionengine.mapReduceLayer.MapReduceLauncher - 100% complete', 'info');
    appendOutput(`2024-11-10 10:32:19,678 [main] INFO  org.apache.pig.tools.pigstats.SimplePigStats - Successfully stored ${varName} to '${path}'`, 'info');
    appendOutput('Success!\n', 'success');
}

function handleJoinCommand(cmd) {
    appendOutput('2024-11-10 10:32:19,890 [main] INFO  org.apache.pig.backend.hadoop.executionengine.mapReduceLayer.MapReduceLauncher - Processing JOIN operation', 'info');
    appendOutput('OK\n', 'success');
}

function handleDistinctCommand(cmd) {
    appendOutput('2024-11-10 10:32:20,123 [main] INFO  org.apache.pig.backend.hadoop.executionengine.mapReduceLayer.MapReduceLauncher - Processing DISTINCT operation', 'info');
    appendOutput('OK\n', 'success');
}

function showHelp() {
    const help = `
Available Pig Latin Commands:
  LOAD         - Load data from file system
  FILTER       - Filter tuples based on condition
  FOREACH      - Apply expression to each tuple
  GROUP        - Group data by key
  ORDER BY     - Sort data by field
  LIMIT        - Limit number of results
  DUMP         - Display output to console
  STORE        - Save results to file system
  DESCRIBE     - Show schema of relation
  ILLUSTRATE   - Show sample data flow
  JOIN         - Join two or more relations
  DISTINCT     - Remove duplicate tuples
  
System Commands:
  help         - Show this help message
  examples     - Show example queries
  clear/cls    - Clear screen
  quit/exit    - Exit Pig shell
`;
    appendOutput(help, 'info');
}

function showExamples() {
    const examples = `
Example Pig Latin Queries (use with movie dataset):

1. Load movies dataset:
   movies = LOAD '/data/movies.txt' USING PigStorage(',') AS (id:int, title:chararray, year:int, rating:double, genre:chararray, director:chararray, revenue:long);

2. Filter high-rated movies:
   high_rated = FILTER movies BY rating >= 9.0;
   DUMP high_rated;

3. Project specific columns:
   titles_years = FOREACH movies GENERATE title, year, rating;
   DUMP titles_years;

4. Group by genre:
   genre_group = GROUP movies BY genre;
   genre_stats = FOREACH genre_group GENERATE group, COUNT(movies), AVG(movies.rating);
   DUMP genre_stats;

5. Order by revenue:
   top_revenue = ORDER movies BY revenue DESC;
   top_5 = LIMIT top_revenue 5;
   DUMP top_5;

6. Count movies by director:
   director_group = GROUP movies BY director;
   director_count = FOREACH director_group GENERATE group, COUNT(movies);
   DUMP director_count;

7. Store results:
   STORE high_rated INTO '/output/high_rated_movies' USING PigStorage(',');

Type any of these commands to see realistic Pig output!
`;
    appendOutput(examples, 'warning');
}

// Handle keyboard input
commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = commandInput.value;
        processCommand(command);
        commandInput.value = '';
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            commandInput.value = commandHistory[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            commandInput.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            commandInput.value = '';
        }
    }
});

// Keep input focused
document.addEventListener('click', () => {
    commandInput.focus();
});

// Initialize
displayBanner();
commandInput.focus();

