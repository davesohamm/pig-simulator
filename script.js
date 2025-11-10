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
    
        { id: 16, title: "Avatar", year: 2009, rating: 7.8, genre: "Sci-Fi", director: "James Cameron", revenue: 760507625 },
        { id: 17, title: "Titanic", year: 1997, rating: 7.9, genre: "Romance", director: "James Cameron", revenue: 659363944 },
        { id: 18, title: "Avengers: Endgame", year: 2019, rating: 8.4, genre: "Action", director: "Anthony Russo", revenue: 858373000 },
        { id: 19, title: "Avengers: Infinity War", year: 2018, rating: 8.4, genre: "Action", director: "Anthony Russo", revenue: 678815482 },
        { id: 20, title: "Jurassic Park", year: 1993, rating: 8.1, genre: "Adventure", director: "Steven Spielberg", revenue: 402348343 },
        { id: 21, title: "Star Wars: A New Hope", year: 1977, rating: 8.6, genre: "Sci-Fi", director: "George Lucas", revenue: 307263857 },
        { id: 22, title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, rating: 8.8, genre: "Fantasy", director: "Peter Jackson", revenue: 315710750 },
        { id: 23, title: "The Lord of the Rings: The Two Towers", year: 2002, rating: 8.7, genre: "Fantasy", director: "Peter Jackson", revenue: 342551365 },
        { id: 24, title: "The Lord of the Rings: The Return of the King", year: 2003, rating: 8.9, genre: "Fantasy", director: "Peter Jackson", revenue: 377845905 },
        { id: 25, title: "Fight Club", year: 1999, rating: 8.8, genre: "Drama", director: "David Fincher", revenue: 100853753 },
        { id: 26, title: "The Social Network", year: 2010, rating: 7.7, genre: "Drama", director: "David Fincher", revenue: 224920315 },
        { id: 27, title: "Whiplash", year: 2014, rating: 8.5, genre: "Drama", director: "Damien Chazelle", revenue: 48982041 },
        { id: 28, title: "The Wolf of Wall Street", year: 2013, rating: 8.2, genre: "Biography", director: "Martin Scorsese", revenue: 406900694 },
        { id: 29, title: "Mad Max: Fury Road", year: 2015, rating: 8.1, genre: "Action", director: "George Miller", revenue: 375209406 },
        { id: 30, title: "Parasite", year: 2019, rating: 8.6, genre: "Thriller", director: "Bong Joon Ho", revenue: 258708050 },
        { id: 31, title: "Joker", year: 2019, rating: 8.4, genre: "Crime", director: "Todd Phillips", revenue: 1074251311 },
        { id: 32, title: "The Pianist", year: 2002, rating: 8.5, genre: "Biography", director: "Roman Polanski", revenue: 32572529 },
        { id: 33, title: "Schindler's List", year: 1993, rating: 9.0, genre: "Biography", director: "Steven Spielberg", revenue: 322161245 },
        { id: 34, title: "Se7en", year: 1995, rating: 8.6, genre: "Thriller", director: "David Fincher", revenue: 327311859 },
        { id: 35, title: "Django Unchained", year: 2012, rating: 8.4, genre: "Western", director: "Quentin Tarantino", revenue: 425368238 },
        { id: 36, title: "Inglourious Basterds", year: 2009, rating: 8.3, genre: "War", director: "Quentin Tarantino", revenue: 321455689 },
        { id: 37, title: "The Lion King", year: 1994, rating: 8.5, genre: "Animation", director: "Roger Allers", revenue: 422783777 },
        { id: 38, title: "Toy Story", year: 1995, rating: 8.3, genre: "Animation", director: "John Lasseter", revenue: 373554033 },
        { id: 39, title: "Finding Nemo", year: 2003, rating: 8.1, genre: "Animation", director: "Andrew Stanton", revenue: 940335536 },
        { id: 40, title: "Up", year: 2009, rating: 8.2, genre: "Animation", director: "Pete Docter", revenue: 735099082 },
        { id: 41, title: "WALL-E", year: 2008, rating: 8.4, genre: "Animation", director: "Andrew Stanton", revenue: 521311860 },
        { id: 42, title: "Coco", year: 2017, rating: 8.4, genre: "Animation", director: "Lee Unkrich", revenue: 807082196 },
        { id: 43, title: "Inside Out", year: 2015, rating: 8.1, genre: "Animation", director: "Pete Docter", revenue: 857611174 },
        { id: 44, title: "The Truman Show", year: 1998, rating: 8.2, genre: "Drama", director: "Peter Weir", revenue: 264118201 },
        { id: 45, title: "The Big Short", year: 2015, rating: 7.8, genre: "Drama", director: "Adam McKay", revenue: 133440870 },
        { id: 46, title: "The Grand Budapest Hotel", year: 2014, rating: 8.1, genre: "Comedy", director: "Wes Anderson", revenue: 174600318 },
        { id: 47, title: "The Revenant", year: 2015, rating: 8.0, genre: "Adventure", director: "Alejandro G. Iñárritu", revenue: 533000000 },
        { id: 48, title: "La La Land", year: 2016, rating: 8.0, genre: "Romance", director: "Damien Chazelle", revenue: 446486916 },
        { id: 49, title: "Blade Runner 2049", year: 2017, rating: 8.0, genre: "Sci-Fi", director: "Denis Villeneuve", revenue: 259239658 },
        { id: 50, title: "Arrival", year: 2016, rating: 7.9, genre: "Sci-Fi", director: "Denis Villeneuve", revenue: 203388186 },
        { id: 51, title: "Dune", year: 2021, rating: 8.0, genre: "Sci-Fi", director: "Denis Villeneuve", revenue: 402027830 },
        { id: 52, title: "The Martian", year: 2015, rating: 8.0, genre: "Sci-Fi", director: "Ridley Scott", revenue: 630161890 },
        { id: 53, title: "Gravity", year: 2013, rating: 7.7, genre: "Sci-Fi", director: "Alfonso Cuarón", revenue: 723192705 },
        { id: 54, title: "The Terminator", year: 1984, rating: 8.1, genre: "Action", director: "James Cameron", revenue: 78371200 },
        { id: 55, title: "Terminator 2: Judgment Day", year: 1991, rating: 8.5, genre: "Action", director: "James Cameron", revenue: 520881154 },
        { id: 56, title: "Alien", year: 1979, rating: 8.4, genre: "Sci-Fi", director: "Ridley Scott", revenue: 106285522 },
        { id: 57, title: "Aliens", year: 1986, rating: 8.4, genre: "Sci-Fi", director: "James Cameron", revenue: 183316455 },
        { id: 58, title: "The Godfather Part II", year: 1974, rating: 9.0, genre: "Crime", director: "Francis Ford Coppola", revenue: 57300000 },
        { id: 59, title: "The Irishman", year: 2019, rating: 7.8, genre: "Crime", director: "Martin Scorsese", revenue: 80000000 },
        { id: 60, title: "No Country for Old Men", year: 2007, rating: 8.2, genre: "Crime", director: "Ethan Coen", revenue: 171627166 },
        { id: 61, title: "The Hurt Locker", year: 2008, rating: 7.5, genre: "War", director: "Kathryn Bigelow", revenue: 49831222 },
        { id: 62, title: "Black Panther", year: 2018, rating: 7.3, genre: "Action", director: "Ryan Coogler", revenue: 1346913161 },
        { id: 63, title: "Spider-Man: Into the Spider-Verse", year: 2018, rating: 8.4, genre: "Animation", director: "Peter Ramsey", revenue: 375540831 },
        { id: 64, title: "Guardians of the Galaxy", year: 2014, rating: 8.0, genre: "Action", director: "James Gunn", revenue: 773328629 },
        { id: 65, title: "Oppenheimer", year: 2023, rating: 8.6, genre: "Biography", director: "Christopher Nolan", revenue: 970000000 },
        { id: 66, title: "Barbie", year: 2023, rating: 7.1, genre: "Comedy", director: "Greta Gerwig", revenue: 1446000000 },
        { id: 67, title: "The Shape of Water", year: 2017, rating: 7.3, genre: "Fantasy", director: "Guillermo del Toro", revenue: 195300000 },
        { id: 68, title: "The King's Speech", year: 2010, rating: 8.0, genre: "Drama", director: "Tom Hooper", revenue: 484600000 },
        { id: 69, title: "Spotlight", year: 2015, rating: 8.1, genre: "Drama", director: "Tom McCarthy", revenue: 98660000 },
        { id: 70, title: "Shutter Island", year: 2010, rating: 8.2, genre: "Thriller", director: "Martin Scorsese", revenue: 294804195 },
        { id: 71, title: "The Usual Suspects", year: 1995, rating: 8.5, genre: "Crime", director: "Bryan Singer", revenue: 34600000 },
        { id: 72, title: "American Beauty", year: 1999, rating: 8.3, genre: "Drama", director: "Sam Mendes", revenue: 356296601 },
        { id: 73, title: "Memento", year: 2000, rating: 8.4, genre: "Thriller", director: "Christopher Nolan", revenue: 39966648 },
        { id: 74, title: "Oldboy", year: 2003, rating: 8.4, genre: "Thriller", director: "Park Chan-wook", revenue: 15000000 },
        { id: 75, title: "Spirited Away", year: 2001, rating: 8.6, genre: "Animation", director: "Hayao Miyazaki", revenue: 395800000 },
        { id: 76, title: "Howl's Moving Castle", year: 2004, rating: 8.2, genre: "Animation", director: "Hayao Miyazaki", revenue: 236700000 },
        { id: 77, title: "Your Name", year: 2016, rating: 8.4, genre: "Animation", director: "Makoto Shinkai", revenue: 358000000 },
        { id: 78, title: "Princess Mononoke", year: 1997, rating: 8.4, genre: "Animation", director: "Hayao Miyazaki", revenue: 169785000 },
        { id: 79, title: "The Iron Giant", year: 1999, rating: 8.1, genre: "Animation", director: "Brad Bird", revenue: 31000000 },
        { id: 80, title: "Ratatouille", year: 2007, rating: 8.1, genre: "Animation", director: "Brad Bird", revenue: 623726085 },
        { id: 81, title: "Monsters, Inc.", year: 2001, rating: 8.1, genre: "Animation", director: "Pete Docter", revenue: 577425554 },
        { id: 82, title: "The Incredibles", year: 2004, rating: 8.0, genre: "Animation", director: "Brad Bird", revenue: 631441092 },
        { id: 83, title: "Frozen", year: 2013, rating: 7.9, genre: "Animation", director: "Jennifer Lee", revenue: 1280000000 },
        { id: 84, title: "Moana", year: 2016, rating: 7.6, genre: "Animation", director: "Ron Clements", revenue: 687229889 },
        { id: 85, title: "Zootopia", year: 2016, rating: 8.0, genre: "Animation", director: "Rich Moore", revenue: 1023784195 },
    
        // Bollywood Starts
        { id: 86, title: "3 Idiots", year: 2009, rating: 8.4, genre: "Comedy", director: "Rajkumar Hirani", revenue: 459000000 },
        { id: 87, title: "Dangal", year: 2016, rating: 8.4, genre: "Biography", director: "Nitesh Tiwari", revenue: 2100000000 },
        { id: 88, title: "PK", year: 2014, rating: 8.1, genre: "Comedy", director: "Rajkumar Hirani", revenue: 854000000 },
        { id: 89, title: "Lagaan", year: 2001, rating: 8.1, genre: "Drama", director: "Ashutosh Gowariker", revenue: 615000000 },
        { id: 90, title: "Sholay", year: 1975, rating: 8.2, genre: "Action", director: "Ramesh Sippy", revenue: 300000000 },
        { id: 91, title: "Dilwale Dulhania Le Jayenge", year: 1995, rating: 8.0, genre: "Romance", director: "Aditya Chopra", revenue: 2000000000 },
        { id: 92, title: "Taare Zameen Par", year: 2007, rating: 8.3, genre: "Drama", director: "Aamir Khan", revenue: 610000000 },
        { id: 93, title: "Barfi!", year: 2012, rating: 8.1, genre: "Romance", director: "Anurag Basu", revenue: 175000000 },
        { id: 94, title: "Queen", year: 2013, rating: 8.1, genre: "Drama", director: "Vikas Bahl", revenue: 97000000 },
        { id: 95, title: "Kahaani", year: 2012, rating: 8.1, genre: "Thriller", director: "Sujoy Ghosh", revenue: 104000000 },
        { id: 96, title: "Andhadhun", year: 2018, rating: 8.2, genre: "Thriller", director: "Sriram Raghavan", revenue: 456000000 },
        { id: 97, title: "Drishyam", year: 2015, rating: 8.3, genre: "Thriller", director: "Nishikant Kamat", revenue: 140000000 },
        { id: 98, title: "Gully Boy", year: 2019, rating: 7.9, genre: "Drama", director: "Zoya Akhtar", revenue: 238000000 },
        { id: 99, title: "Zindagi Na Milegi Dobara", year: 2011, rating: 8.1, genre: "Drama", director: "Zoya Akhtar", revenue: 150000000 },
        { id: 100, title: "Chak De! India", year: 2007, rating: 8.1, genre: "Sports", director: "Shimit Amin", revenue: 108000000 }
        
];

// Store loaded datasets
let loadedData = {
    movies: [...movieDataset]
};

// Track query state
let queryState = {
    lastLimit: null,
    lastSort: null,
    lastFilter: null
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
    // Extract limit value
    const match = cmd.match(/limit\s+\w+\s+(\d+)/i);
    if (match) {
        queryState.lastLimit = parseInt(match[1]);
    }
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
    
    // Determine how many results to show
    let defaultLimit = 15; // Show 15 by default for better demo
    if (queryState.lastLimit) {
        defaultLimit = queryState.lastLimit;
        queryState.lastLimit = null; // Reset after use
    }
    
    // Display sample results based on variable name
    if (varName.includes('movie') || varName === 'movies') {
        displayMovieResults(loadedData.movies.slice(0, defaultLimit));
    } else if (varName.includes('high')) {
        const filtered = loadedData.movies.filter(m => m.rating >= 9.0);
        displayMovieResults(filtered.slice(0, defaultLimit));
    } else if (varName.includes('low')) {
        const filtered = loadedData.movies.filter(m => m.rating < 8.0);
        displayMovieResults(filtered.slice(0, defaultLimit));
    } else if (varName.includes('action')) {
        const filtered = loadedData.movies.filter(m => m.genre.toLowerCase() === 'action');
        displayMovieResults(filtered.slice(0, defaultLimit));
    } else if (varName.includes('drama')) {
        const filtered = loadedData.movies.filter(m => m.genre.toLowerCase() === 'drama');
        displayMovieResults(filtered.slice(0, defaultLimit));
    } else if (varName.includes('scifi') || varName.includes('sci_fi') || varName.includes('sci-fi')) {
        const filtered = loadedData.movies.filter(m => m.genre.toLowerCase() === 'sci-fi');
        displayMovieResults(filtered.slice(0, defaultLimit));
    } else if (varName.includes('genre') || varName.includes('group')) {
        displayGenreGroup();
    } else if (varName.includes('year')) {
        displayYearGroup();
    } else if (varName.includes('director')) {
        displayDirectorResults();
    } else if (varName.includes('nolan')) {
        const filtered = loadedData.movies.filter(m => m.director.toLowerCase().includes('nolan'));
        displayMovieResults(filtered.slice(0, defaultLimit));
    } else if (varName.includes('sorted') || varName.includes('order')) {
        // For sorted results, show based on variable name patterns
        if (varName.includes('rating')) {
            const sorted = [...loadedData.movies].sort((a, b) => b.rating - a.rating);
            displayMovieResults(sorted.slice(0, defaultLimit));
        } else if (varName.includes('revenue')) {
            const sorted = [...loadedData.movies].sort((a, b) => b.revenue - a.revenue);
            displayRevenueResults(sorted.slice(0, defaultLimit));
        } else if (varName.includes('year')) {
            const sorted = [...loadedData.movies].sort((a, b) => b.year - a.year);
            displayMovieResults(sorted.slice(0, defaultLimit));
        } else {
            displayMovieResults(loadedData.movies.slice(0, defaultLimit));
        }
    } else if (varName.includes('revenue') || varName.includes('top')) {
        const sorted = [...loadedData.movies].sort((a, b) => b.revenue - a.revenue);
        displayRevenueResults(sorted.slice(0, defaultLimit));
    } else if (varName.includes('limit') || varName.includes('first') || varName.includes('sample')) {
        displayMovieResults(loadedData.movies.slice(0, defaultLimit));
    } else {
        // Default: show reasonable number of results
        displayMovieResults(loadedData.movies.slice(0, defaultLimit));
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

