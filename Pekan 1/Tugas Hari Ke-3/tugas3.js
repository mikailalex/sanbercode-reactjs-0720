// Soal 1 
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var kalimat = `${kataPertama} ${kataKedua[0].toUpperCase()}${kataKedua.substr(1)} ${kataKetiga} ${kataKeempat.toUpperCase()}`;

console.log(kalimat);

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var jumlah = Number(kataPertama) + Number(kataKedua) + Number(kataKetiga) + Number(kataKeempat);

console.log(jumlah);

//soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal 4
var nilai = 79;

if (nilai >= 80) {
  console.log("Indeks: A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("Indeks: B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("Indeks: C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("Indeks: D");
} else {
  console.log("Indeks: E");
}

// soal 5
var tanggal = 14;
var bulan = 7;
var tahun = 1998;

switch(bulan) {
  case 1:   { bulan = "Januari"; break; }
  case 2:   { bulan = "Februari"; break; }
  case 3:   { bulan = "Maret"; break; }
  case 4:   { bulan = "April"; break; }
  case 5:   { bulan = "Mei"; break; }
  case 6:   { bulan = "Juni"; break; }
  case 7:   { bulan = "Juli"; break; }
  case 8:   { bulan = "Agustus"; break; }
  case 9:   { bulan = "September"; break; }
  case 10:  { bulan = "Oktober"; break; }
  case 11:  { bulan = "November"; break; }
  case 12:  { bulan = "Desember"; break; }
  default:  { bulan = "Nominal tidak termasuk bulan!"; }}

var ttl = `${String(tanggal)} ${bulan} ${String(tahun)}`;

console.log(ttl);