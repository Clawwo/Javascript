// 1.Penggunaan OBJECT

//object memiliki key dan value. Key dari properti dapat berupa string dan value dapat bernilai tipe data apa pun
const user = {
  name: "Farel",
  "last name": "Haryanto",
  age: 17,
};

const products = { name: "Sepatu", price: 230000 }; //merubah nilai atau value

//memanggil data
console.log(user.name); //tidak disarankan 
console.log(user['last name']); //lebih disarankan

//sepaket tolol
const {name, age} = user; //object destructuring
console.log(name, age);

//menghapus data
delete user.name;
console.log(user);

//merubah data dari object product
products.name = "Baju";
console.log(products);