class NewsController {
    //[Get] /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('abc');
    }
}

module.exports = new NewsController();
