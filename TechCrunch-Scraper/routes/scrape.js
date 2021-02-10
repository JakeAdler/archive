var express = require('express');
var router = express.Router();
var axios = require('axios');
var cheerio = require('cheerio')
var db = require("../models");

/* GET articles listing. */
router.get('/scrape', function (req, res) {

  axios.get("http://www.techcrunch.com")
    .then(function (response) {
      var $ = cheerio.load(response.data);
      var result = {}


      $(".post-block__title__link").each(function (i, element) {

        result.title = $(this)
          .text();
        result.link = $(this)
          .attr("href");
        result.image = $(this)
          .parent("article")
          .children("img")
          .attr("src")
        result.saved = false;
        db.Article.remove({});
        db.Article.create(result)
          .then((dbArticle) => {
            return;
          })
          .catch(function (err) {
            console.log("Mongoose caught an error when trying to save the article " + err.message)
          });
      })

      db.Article.find({})
        .then((articles) => {
          articles.length = 10;
          console.log(articles);
          res.json(articles);
          
        })

    })
    .catch((err) => {
      console.log("Axios could not make a GET request to TechCrunch")
    });


});

module.exports = router;