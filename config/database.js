// import module mysql
const mysql = require('mysql');

//
const databaseConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pelatihan_api',
});

databaseConnect.connect((err) => {
    if (err) {
        console.log('Error Koneksi database');        
        throw err;
    }
    console.log('Connect database sukses !!')
});

module.exports = databaseConnect;