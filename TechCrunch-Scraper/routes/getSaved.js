var express = require('express');
var router = express.Router();
var db = require("../models");
let articles

router.get('/', function (req, res, next) {
  console.log("hitting the route")
  res.render('saved')      
});

router.get('/getArticles', (req, res)=>{
    db.Article.find({saved: true})
    .then((Articles)=>{
        articles = Articles;
        if (articles.length > 10){
            articles.length = 10;
        } else  if (articles.length === 0){
            return res.send("NO SAVED ARTICLES FOUND")
         } else  {
           return res.send(articles);
        }
       
        res.send("default response")
    })
    .catch((err)=>{
        console.log(err);
    });

});

router.post('/comment', function (req, res) {
    articleId = req.body.articleId;
    comment = req.body.comment;

    console.log(articleId, comment);

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