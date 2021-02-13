// import config database
const db = require("../../config/database");

const updateUsers = (request, response) => {
  const { body, params } = request;

  // get user
  const queryGet = `select * from users where id = ${params.id}`;
  db.query(queryGet, (err, res) => {
    if (err) {
      const respondData = {
        message: "Gagal query get users atau koneksi",
      };
      return response.status(500).json(respondData).end();
    }

    // query
    const query = `
        UPDATE users SET name=?, address=?, phonenumber=?, gender=?, status=? where id = ?
    `;

    const data = [
      body.name || res[0].name,
      body.address || res[0].address,
      body.phonenumber || res[0].phonenumber,
      body.gender || res[0].gender,
      body.status || res[0].status,
      params.id,
    ];

    db.query(query, data, (error) => {
      if (error) {
        const respondData = {
          message: "Gagal query update users atau koneksi",
        };
        return response.status(500).json(respondData).end();
      }
      const respondData = {
        message: "update users berhasil",
      };
      return response.status(201).json(respondData).end();
    });
  });
};

module.exports = updateUsers;
