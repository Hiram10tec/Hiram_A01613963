const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'mysql-hiram.alwaysdata.net',
    user: 'hiram_admin',
    database: 'hiram_azulgol',
    password: 'Yoshi3000!',
});

module.exports = pool.promise();