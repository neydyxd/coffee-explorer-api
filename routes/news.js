const router = require('express').Router();

const {
    getNews,
    createNews,
} = require('../controllers/news');

router.get('/', getNews);
router.post('/', createNews);

module.exports = router;