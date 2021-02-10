var express = require('express');
var router = express.Router();
var db = require("../models");
let articleId;
let comment;

router.post('/comment', function (req, res) {
    articleId = req.body.articleId;
    comment = req.body.comment;

    db.Article.findById(articleId)
        .then((article) => {
            article.comments.push(comment)
            article.save((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("all good :) saved comment")
                }

            })
        })
        .catch((err) => {
            console.log(err);
        })
    res.send("got your comment");

});



module.exports = router;