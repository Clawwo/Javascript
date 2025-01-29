
//Penggunaan function pada konversi celcius ke fahrenheit

function identifer(namaDepan, namaBelakang, email) { //parameter
  console.log(namaDepan); //parameter
}

identifer('halo'); //argumen


function convertToFahrenheit (suhu) {
  const rumus = (9 / 5) * suhu + 32;
  return rumus;
}

const hasil = convertToFahrenheit(25);
console.log(hasil);

//Penjumlahan Angka dalam Rentang
function sumInRange(start, end) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
}

console.log(sumInRange(1, 10));

const user = {
  nama: "Farel Haryanto",
  umur: 14,
  email: "jv7Z6@example.com",
  address: "Jl. Kebon Jeruk",
};

Object.entries(user);

delete user.umur; //menghapus properti
user.nama = 'Yanto'; //mengubah properti
console.log(user.nama);

//pembuatan array
const nomor = [1, 2, 3, 4, 5];
const nama = ['Farel', 'Aaryanto'];
nomor[0] = 10 //mengubah aray
nomor.push(6); //menambah array
delete nomor[1] //menghapus key non value
nomor.splice(1, 1); //menghapus key dan value
const [satu, dua] = nomor //merusak array
nomor.reverse() //mebalik
nama.sort() //mengurutkan
console.log(nomor);
console.log(nama);

//pembuatan map
const map = new Map([
  ['nama', 'Farel'],
  ['umur', 14],
  
]);
map.set('email', 'aras@dicoding.com'); //menambah
delete map.get('email'); //menghapus
console.log(map);

const seet = new Set();
seet.add(6); //menambah
seet.delete(1); //menghapus
seet.forEach((value) => console.log(value));

const waifu = [1, 2, 3, 4, 5];
const waifu2 = [6, 7, 8, 9, 10];
const sebar = [...waifu, ...waifu2];
console.log(sebar);


const employees = [
  {
    name: "Fulan",
    email: "fulan@dicoding.com",
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  const newEmployee = {
    name: name,
    email: email,
    joinYear: joinYear,
  };
  employees.push(newEmployee);
}

// Contoh penggunaan fungsi addEmployee
addEmployee("John Doe", "john@example.com", 2022);
console.log(employees);

dicoding.toArray()
console.log(dicoding);