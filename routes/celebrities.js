const express = require('express');
const celebritiesRouter = new express.Router();
const Celebrity = require('../models/celebrity');

//get a list of all celebrities
//the endpoint should be /celebrities

//Get all celebrities from celebrity model
//endpoint: /celebrities
// res.send("new text");
celebritiesRouter.get ('/', async (req, res) => {  
    //console.log('endpoint reached')  
    Celebrity.find()
    .then(celebrity => {
        console.log(celebrity)
        res.render('celebrities/index', {celebrity})})
    .catch(error => {
        console.error('Error finding celebrities', error);
      });
});


// celebrityRouter.post ('/create', (req, res) => {
//     //endpoint: /celebrities/create
//     //create a new celebrity
// })

//get a specific celebrity


module.exports = celebritiesRouter



