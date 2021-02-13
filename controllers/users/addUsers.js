// import config database
const db = require("../../config/database");

const addUsers = (request, response) => {
  const { body } = request;

  // query
  const query = "INSERT INTO users set ?";
  db.query(query, body, (err, res) => {
    if (err) {
      const respondData = {
        message: "Gagal query add users atau koneksi",
      };
      return response.status(500).json(respondData).end();
    }
    const respondData = {
      message: "tambah users berhasil",
    };
    return response.status(201).json(respondData).end();
  });
};

module.exports = addUsers;
