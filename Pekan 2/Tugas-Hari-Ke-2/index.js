// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini
var iteration = 0;

var fungsi = function(sisaWaktu) {
    iteration++;
    if(iteration === books.length) {
      return console.log("Buku habis terbaca")
    }
    readBooks(sisaWaktu, books[iteration], fungsi)
}

readBooks(10000, books[0], fungsi);