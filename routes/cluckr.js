const express = require('express');
const router = express.Router();
const knex = require("../client");


router.get('/', (req, res)=>{
    const name = req.cookies.username;
    let welcome;
    if(name){
      welcome =`Hello, ${name}`;
    } 
    res.render('cluckr', {username: welcome});
});



router.post('/', (req, res)=>{
  knex
    .insert({
      content: req.body.content,
      img_url: req.body.img_url,
      username: req.cookies.username
    })
    .into("cluckr")
    .returning("*")
    .then(([cluckr]) => {
      console.log("Cluckr insert result:", cluckr);
      res.redirect("/cluckr/allcontent");
    });
});

router.get('/allcontent', (req, res)=>{
  const name = req.cookies.username;
  knex
    .select("*")
    .from("cluckr")
    .then(cluckrs => {
      res.render("allcontent", { cluckrs: cluckrs, username: name });
    });
});

module.exports = router;


