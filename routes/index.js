const express = require('express');
const router = express.Router();
const knex = require("../db/client");

/* GET home page. */
router.get('/', function(req, res, next) {
  const name = req.cookies.username;
  let welcome;
  if(name){
    welcome =`Hello, ${name}`;
  } 
  res.render('index', {username: welcome});

});

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;
router.post("/sign", (req,res)=>{

  const username = req.body.username;

  res.cookie("username", username, { maxAge: COOKIE_MAX_AGE });

  res.redirect("/");
});

router.post("/signout", (req, res)=>{
  res.clearCookie("username");
  res.redirect("/");
});

module.exports = router;



