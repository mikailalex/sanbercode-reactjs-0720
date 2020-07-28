var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
var iteration = 0;


function readBooks(fullfield, book) {readBooksPromise(fullfield, books[iteration])
  .then(function (fullfield) {
      iteration++;
      if(iteration === books.length) {
        return console.log("Buku habis terbaca")
      }
      readBooks(fullfield, books[iteration]);
  })
  .catch(function (reject) {
      console.log(reject.message);
  })};


readBooks(10000, books[0]);