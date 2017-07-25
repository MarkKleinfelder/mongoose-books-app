//require
var mongoose = require('mongoose'); //use mongo
var Schema = mongoose.Schema;       //use Schema in mongo

var BookSchema = new Schema({ //Schema
	  title: String,         //title
  	  author: String,        //author
  	  image: String,         //image (use a string for this)
 	  releaseDate: String    //releaseDate
});

var Book = mongoose.model('Book', BookSchema); //Book refers to mongo collection named Book

module.exports = Book;       //export module