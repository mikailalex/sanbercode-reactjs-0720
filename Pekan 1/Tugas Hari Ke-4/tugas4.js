// Soal 1
console.log("LOOPING PERTAMA");

let count = 1;

while (count <= 20) {
    if (count % 2 === 0) {
        console.log(`${count} - I love coding`);
    }
    count++;
}

console.log("LOOPING KEDUA");

count = 20;

while (count > 0) {
    if (count % 2 === 0) {
        console.log(`${count} - I will become a frontend developer`);
    }
    count--;
}

// Soal 2
function isOdd(value) {
    if (value % 2 == 0) {
        return false;
    } else {
        return true;
    }
}

for (i = 1; i <= 20; i++) {
    if (i % 3 === 0 && isOdd(i)) {
        console.log(`${i} - I Love Coding`);
    } else if (i % 2 === 0) {
        console.log(`${i} - Berkualitas`);
    } else {
        console.log(`${i} - Santai`);
    }
}

// Soal 3
let string = '';
for(string.length = 0; string.length <= 7 ; string += '#'){
  console.log(string);
}

// Soal 4
var kalimat = "saya sangat senang belajar javascript";

var arrayKalimat = kalimat.split(" ");

console.log(arrayKalimat);

// Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

var buah = daftarBuah.sort()

buah.forEach((item) => (
  console.log(item)
));