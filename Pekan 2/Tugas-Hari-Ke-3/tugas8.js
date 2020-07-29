// Soal 1
let luasLingkaran = (r) => {
    var luas = Math.PI * r * r
    return console.log(`Luas lingkaran dari jari-jari ${r} adalah ${Math.round(luas)}`)
}

const kelilingLingkaran = (r) => {
    var keliling = 2 * Math.PI * r
    return console.log(`Keliling lingkaran dari jari-jari ${r} adalah ${Math.round(keliling)}`)
}

kelilingLingkaran(7)
luasLingkaran(7)

// Soal 2
let kalimat = ""

let addKalimat = (kata1 = "Saya", kata2 = "adalah", kata3 = "seorang", kata4 = "frontend", kata5 = "developer") => {
    return kalimat = kalimat + `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`
}

addKalimat()

console.log(kalimat)


// Soal 3
class Book {
    constructor(name, totalPage, price) {
      this.name = name;
      this.totalPage = totalPage;
      this.price = price;
    }
}
  
class Komik extends Book {
constructor(name, totalPage, price, isColorful) {
    super(name, totalPage, price);
    this.isColorful = isColorful;
    }
}

var naruto = new Komik("Naruto", 449, "Rp.45.000", true);

console.log(naruto)