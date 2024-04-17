let sqlite3 = require('sqlite3').verbose();
// Connect to the database
let db = new sqlite3.Database('db/crud.db', (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    console.log('Connected to the crud database.');
});

// Create table


// Path: CrudPesona/app.js