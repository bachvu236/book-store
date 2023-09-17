const sql = require('../config/db')

//constructor

const Book = function(book){
    this.title = book.title;
    this.author = book.author;
    this.description = book.description;
    this.published = book. published
}