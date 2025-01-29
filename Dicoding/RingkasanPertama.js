//ekpresi adalah nilai yang dihasilkan
//statement adalah instruksi yang akan dieksekusi oleh komputer.

let umur = 14 + 1
const nama = "Farel Haryanto"

console.log(`Nama saya ${nama} dan saya berumur ${umur}`)

const isGreater = 5 > 2;

console.log(isGreater);

const number = 14
const string = "14"
const empty = null

const boolFromNumber = Boolean(number)
const boolFromString = Boolean(string)
const boolFromEmpty = Boolean(empty)

console.log(boolFromNumber);

//Operator merupakan sebuah simbol atau teks yang digunakan untuk melakukan sebuah operasi, misalnya aritmetika, penugasan, logika, tipe data, atau operasi lain yang berhubungan dengan pemrograman.

//Operan adalah nilai yang menjadi target dari sebuah operasi.

let age = 25;
age = '10' + 1;

console.log(age);

// Unary operator butuh 1 operan
console.log(typeof "Hello");
// Binary operator butuh 2 operan
5 + 4;
10 / 2;
age = 30; //assignment oprator

// Ternary operator (conditional operator) butuh 3 operan
age < 18 ? "You are too young!" : "Welcome onboard!"; 

const currency = 'IDR'
let value = 10000
value = value + 5000

const money = `${currency} ${value}`
console.log(money)

