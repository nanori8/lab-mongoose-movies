const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
    name: {
      type: String
    //   minlength: 3,
    }, 
    occupation: {
      type: String,
      default: 'unknown '
    },
    catchPhrase : {
      type: String,
      minlength: 10,
    }
  });

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;