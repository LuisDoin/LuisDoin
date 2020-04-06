const mongoose = require('mongoose');
const Joi = require('joi');

const Genre = mongoose.model("Genre", new mongoose.Schema({

    genre: { type: String, 
             required: true,
             minlength: 3,
             maxlength: 50
    }             
}));

function validateGenre(genre){

    const schema = { genre: Joi.string().required()  };

    return Joi.validate(genre, schema);
}

exports.Genre = Genre;
exports.validate = validateGenre;