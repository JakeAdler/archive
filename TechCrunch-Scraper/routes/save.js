var express = require('express');
var router = express.Router();
var db = require("../models");

router.post('/save', function (req, res) {
    let articleId = req.body.data;
    let title = req.body.title;
    let link = req.body.link;
    // console.log(articleId);
    db.Article.create({
            title: title,
            id: articleId,
            link: link,
            saved: true
        })
        .then((article) => {

            console.log(article);
            console.log("done")
            /*
            article.saved = true;
            article.save((err, updatedArticle)=>{
                if (err){ console.log(err) };
                res.send(updatedArticle);
            })
            */
        })
        .catch((err) => {
            console.log(err);
        })
});



module.exports = router;