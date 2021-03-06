// import config database
const db = require('../../config/database');

const getUsers = (request, response) => {
    // logic/ code get data dari darabase

    // query select
    const query = 'select * from users';

    //eksekusi ke database
    db.query(query, (err, res) => {
        if (err) {
            const respondData = {
                message: 'Gagal query select users atau koneksi',
            };
            return response.status(500).json(respondData).end();
        }

        const respondData = {
            message: 'Select users berhasil',
            data: res
        };
        return response.status(200).json(respondData).end();
    })
};

module.exports = getUsers;