// import config database
const db = require('../../config/database');

const getUsers = (request, response) => {
    // logic/ code get data dari darabase
    const { params } = request;
    // query select
    const query = 'delete from users where id = ?';
    const data = [params.id];
    //eksekusi ke database
    db.query(query, data, (err, res) => {
        if (err) {
            const respondData = {
                message: 'Gagal query delete users atau koneksi',
            };
            return response.status(500).json(respondData).end();
        }
        const respondData = {
            message: 'delere users berhasil',
        };
        return response.status(203).json(respondData).end();
    })
};

module.exports = getUsers;