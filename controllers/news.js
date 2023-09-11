const News = require('../models/new');

const getNews = (req, res, next) => {
    News.find({})
        .then((movies) => {
            res.status(200).send(movies);
        })
        .catch((err) => next(err));
}

const createNews = (req, res) => {
    const {
        image,
        name,
        shortInfo,
        longInfo,
    } = req.body

    News.create({
        image,
        name,
        shortInfo,
        longInfo,
    })
    .then((movie) => {
        res.status(200).send(movie);
    })
    .catch((err) => console.log(err));
}

module.exports = {
    createNews,
    getNews,
}