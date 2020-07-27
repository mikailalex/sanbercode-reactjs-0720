// Soal 1
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];

var objectDaftarPeserta = {nama: "Asep", "jenis kelamin": "laki-laki", hobi: "baca buku", "tahun lahir": 1992};


// Soal 2
var arrayDataBuah = [   {nama: "Strawberry", warna: "Merah", "ada bijinya": "tidak", harga: 9000},
                        {nama: "Jeruk", warna: "Oranye", "ada bijinya": "ada", harga: 8000},
                        {nama: "Semangka", warna: "Hijau & Merah", "ada bijinya": "ada", harga: 10000},
                        {nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000}];

console.log(arrayDataBuah[0]);


// Soal 3
var dataFilm = [];

function addDataFilm(nama, durasi, genre, tahun) {
    var dataSementara = [];
    dataSementara.nama = nama;
    dataSementara.durasi = durasi;
    dataSementara.genre = genre;
    dataSementara.tahun = tahun;
    dataFilm.push(dataSementara);
}

addDataFilm("Avenger", "3 jam", "hero", 2019);
addDataFilm("Insidous", "2 jam", "hero", 2018);

console.log(dataFilm) //?


// Soal 4 release 0
class Animal {
constructor(name) {
   this.name = name;
  }
  get legs() {
    return 4;
  }
  get cold_blooded() {
    return false;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// Soal 4 release 1
class Ape extends Animal {
constructor(name) {
    super(name);
    this.legs = 2;
    }
yell() {
    console.log("Auooo");
    }
}

class Frog extends Animal {
constructor(name) {
    super(name);
    this.legs = 2;
    }
jump() {
    console.log("hop hop");
    }
}


var sungokong = new Ape("kera sakti")
sungokong.yell()

var kodok = new Frog("buduk")
kodok.jump() 

//Soal 5
class Clock {
  constructor({ template }){
    var timer;

    function render() {
      var date = new Date();

      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      var output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log(output);
    }

    this.stop = function() {
      clearInterval(timer);
    };

    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();