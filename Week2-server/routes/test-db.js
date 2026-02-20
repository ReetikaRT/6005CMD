// test-db.js
const mysql = require('mysql2/promise'); // We use the Promise version for async/await
async function testConnection() {

    // 1. Create the connection
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306, // could be 3306 or 3307, depending on your installation
        user: 'root', // Your MySQL username
        password: 'Reetika', // Your MySQL password (CHANGE THIS!)
        database: 'blog_demo'
    });
    console.log("Successfully connected to MySQL!");
    // 2. Run a Query
    // The library returns an array: [rows, fields]
    // We only want the rows, so we destructure it.
    const [rows] = await connection.execute('SELECT * FROM articles');
    console.log("Data received from DB:");
    console.table(rows);
    // 3. Close connection
    await connection.end();
}
testConnection();