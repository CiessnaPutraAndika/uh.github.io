// Nomor 1 :
function cetakFunction(a){
    return `Hallo Nama Saya ` + a
}

console.log(cetakFunction("Ciessna Putra Andika"));

//Nomor 2 :
function myFunction(a, b){
    return a + b;
}
let angka1 = 20;
let angka2 = 7;
let output = myFunction(angka1, angka2);

console.log(output);

//Nomor 3 :
function Hello(){
    let a = "Hello"
    return "Hello";

}
let hi = Hello((hai) => hai.a === "Hello");
console.log(hi);

//Nomor 4 :
let obj = {
    nama : "John",
    umur : 22,
    bahasa : "Indonesia"
}

console.log(obj.bahasa);

//Nomor 5 :
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992]
let objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    kelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahun : arrayDaftarPeserta[3],
}
console.log(objDaftarPeserta);

//Nomor6 :
const buah = [{
    nama: 'Nanas',
    warna: 'kuning',
    adaBijinya: 'tidak',
    harga: 9000,
},
{
    nama: 'Jeruk',
    warna: 'Oranye',
    adaBijinya: 'ada',
    harga: 8000,
},
{
    nama: 'Semangka',
    warna: 'Hijau & Merah',
    adaBijinya: 'ada',
    harga: 10000,
},
{
    nama: 'Pisang',
    warna: 'Kuning',
    adaBijinya: 'tidak',
    harga: 3000,
},
]

const usersBiji = buah.filter((mie) => mie.adaBijinya === 'tidak');
console.log(usersBiji);