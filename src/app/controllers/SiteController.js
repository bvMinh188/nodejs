class SiteController {
    //[Get] /
    index(req, res) {
        res.render('home');
    }

    //[Get] /search
    search(req, res) {
        res.render('search');
    }

    show(req, res) {
        res.send('abc');
    }
}

module.exports = new SiteController();
