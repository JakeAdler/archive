let express = require('express');
let router = express.Router();
let axios = require('axios')
let db = require('../db')
let Article = require('../models/article')
require('dotenv').config()
/* GET data for home page. */
let articles = []
router.get('/', function(req, res, next) {
    articles = []
    let query = 'test'   // CHANGE TO REQ.body or whatever
  
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?
    q=${query}&api-key=${process.env.API_KEY}`)
    .then((results)=>{
      let response =results.data.response.docs
      
      for (let i = 0; i < response.length; i++) {
        let Res = response[i]
        let article = new Article({
          title: Res.headline.main,
          link: Res.web_url,
          description: Res.lead_paragraph
        })
        articles.push(article);
      }
      console.log(articles)
      res.send(articles)

    })
    .catch((err) =>{

      console.log(err);
      return err

    })
});

module.exports = router;
