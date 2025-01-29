// 1.Penggunaan OBJECT

//object memiliki key dan value. Key dari properti dapat berupa string dan value dapat bernilai tipe data apa pun
const user = {
  'name': 'Dino',
  'last name': 'Dinosaurus',
  'lastName': 'Dinosaurus',
  age: 17,
};

const products = { name: "Sepatu", price: 23000 }; //merubah nilai atau value

//memanggil data
console.log(user.name); //tidak disarankan 
console.log(user['last name']);
//lebih disarankan karena tidak ada batasan dalam pemanggilan data


//object destructuring
const { name, lastName } = user;
console.log(name, lastName);
// { name, lastName }: Memberitahu JavaScript untuk mencari properti dengan nama yang sama (name dan lastName) di dalam objek user.

//menghapus data
delete user.age; //cara ke 1
delete user['last name']; //lebih disarankan 
console.log(user);

//merubah data dari object product
products.name = "Baju";
console.log(products);


//2. Array
const ages = [10, 20, 30, 40];
console.log(typeof ages); //jenis tipe data object
console.log(ages[0]);

//pembuatan array 
const numbers = new Array(1, 2) //object constructor
const fruits = Array.from(numbers) //array.from untuk menyalin array lain
console.log(fruits);
const array = [1, 2, 3];//array literals disarankan

//megakses array 
console.log(ages[2]); //memaggil array
ages[1] = 50; //mengubah array 
ages.push(60); //menambah array
delete ages[0]; //menghapus array tidak dengan element
ages.splice(0, 1  ); //menghapus array dengan element
console.log(ages);

//melihat array
const introduction = ['Hello', 'wodd@gmail.com'];
const [greeting, email] = introduction;
//mengambil value dari introduction dan langsung menampilkannya dengan key nya
console.log(greeting); // array dedstructuring

const myArray = [1, 2, 3, 4, 5];
myArray.reverse() //membalik urutan array
myArray.sort() //mengurutkan array secara default ascending
console.log(myArray);

//3. Map
const map = new Map([
  ['drinks', 'water'],
  ['food', 'rice'],
  ['sleep', 'coffee'],
]);

console.log(map.get('drinks')); //mencari key di map
map.set('drinks', 'soda'); //mengubah value di map
map.delete('sleep');
console.log(map);

//4. Set
const set = new Set([1, 2, 3, 4, 5]);
set.add(6); //tidak bisa duplikasi
console.log(set);

//mengakses set
for (const item of set) { //perulangan atau looping
  console.log(item);
}

set.forEach((item) => console.log(item));

//5. spead operator menggabungkan antar object atau menyalin object, array, map, set 
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];
console.log(combined);

//6.rest operator
function test (...rest) {
  console.log(rest.length);
  console.log('Arguments:', rest);
}
//test dengan arguments rest yang dipaggil di clg yang kemudian di isi dengan array
test(1, 2, 3, 4, 5);

const favorites = ["Nasi Goreng", "Mie Goreng", "Ayam Bakar", "Tahu", "Tempe"];

const [one, two, ...boss] = favorites;

console.log(one);
console.log(two);
console.log(boss);