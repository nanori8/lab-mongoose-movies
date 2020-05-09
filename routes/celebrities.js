const express = require('express');
const celebritiesRouter = new express.Router();
const Celebrity = require('../models/celebrity');

//get a list of all celebrities
//the endpoint should be /celebrities

celebritiesRouter.get ('/', (req, res) => {  
    //console.log('endpoint reached')  
    Celebrity.find()
    .then(celebrity => {
        console.log(celebrity)
        res.render('celebrities/index', {celebrity})})
    .catch(error => {
        console.error('Error finding celebrities', error);
      });
});

// See the details of a celebrity

celebritiesRouter.get ('/', (req, res) => {  
    //console.log('endpoint reached')  
    Celebrity.find()
    .then(celebrity => {
        // console.log(celebrity)
        res.render('celebrities/index', {celebrity})})
    .catch(error => {
        console.error('Error finding celebrities', error);
      });
});


// celebritiesRouter.get('/:id', (req, res) => {
//     console.log('endpoint reached')  

//     const id = req.params.id;
//     console.log(id)  

//     Celebrity.findOne( {_id: id})
//     .then(celebrity => {
//         res.render('celebrities/show', {celebrity})})
//     .catch(error => {
//         console.error('Error finding celebrities', error);
//       });
// });

celebritiesRouter.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Celebrity.findOne( {_id: id})
    .then(celebrity => {
        res.render('celebrities/show', {celebrity})
    })
    .catch(error => {
      next(error);
    });
  })



module.exports = celebritiesRouter



