const getMovies = (request, response) => {
    // olah
    const data = [
        { judul: "Spongebob", tahun : "2020", genre: "Animation" },
        { judul: "Spongebob", tahun : "2020", genre: "Animation" }
    ];
    return response.status(200).json(data).end();
};

module.exports = getMovies;