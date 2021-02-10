let express = require('express');
let router = express.Router();
let Article = require('../../models/article');



router.post('/save', (req, res, next) => {
    let id = req.body.id
    console.log('YOUVE HIT THE SAVE ROUTE')
    Article.findById(id)
        .then((dbRes)=>{
            console.log(dbRes)
            dbRes.save((err)=>{
                if (err) {
                    console.log(err)
                } else {
                    console.log("Saved Article: " + dbRes)
                }
            })
            res.send(dbRes)
        })
        .catch((err)=>{
            console.log(err)
        })
    
})

module.exports = router;