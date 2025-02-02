// 1. Percabangan If
let umur = null //menciptakan kondisi
//memberikan perintah sesuai dengan kondisi
if (umur >= 18) {
    console.log("Anda sudah dewasa");
} else if (umur >= 10) {
    console.log("Anda masih anak-anak");
} else {
    console.log("masukkan umur");
}

const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

// 2. Percabangan Switch
const day = new Date().getDay();
console.log(day);

switch(day) {
    case 0:
        console.log("Minggu");
        break;
    case 1:
        console.log("Senin");
        break;
    case 2:
        console.log("Selasa");
        break;
    case 3:
        console.log("Rabu");
        break;
    case 4:
        console.log("Kamis");
        break;
    case 5:
        console.log("Jumat");
        break;
    case 6:
        console.log("Sabtu");
        break;
    default:
        console.log("Hari tidak valid");
        break;
}

// 3. Percabangan Ternary
const age = 17;
const isAdult = age >= 18 ? true : false;
console.log(isAdult);

// 4. Perulangan For
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//5. Perulangan For in
const myArray = [1, 2, 3, 4, 5];
for (let i in myArray) {
    console.log(myArray[i]);
}

//6. Perulangan for of
const myArray2 = [1, 2, 3, 4, 5];
for (let i of myArray2) {
    console.log(i);
}

//7. Perulangan While
let i = 0;
while (i < 10) {
    console.log(`Angka ke-${i} adalah ${i}`);
    i++;
}

//8. Perulangan Do While
do {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
} while (i < 5);

//9.Continue
for ( let i = 0; i < 10; i++){
    if (i === 5) {
        continue;
    }
    console.log(i);
}

//10. Eror Handling
try {
    const result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log(error.message);
}

//11. Try Catch Finally
try {
    const result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Selesai");
}

//12. Finally
try {
    const result = 10 / 0;
    console.log(result);
} finally {
    console.log("Selesai");
}

function checkGrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] !== "number") {
      throw new Error("Invalid input. Please provide an array of numbers.");
    }

    const grade = grades[i];
    let predicate;

    if (grade >= 90) {
      predicate = "A";
    } else if (grade >= 80) {
      predicate = "B";
    } else if (grade >= 70) {
      predicate = "C";
    } else if (grade >= 60) {
      predicate = "D";
    } else {
      predicate = "E";
    }

    console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
  }
}

try {
  const studentGrades = [95, 85, 65, 80, 70];
  checkGrades(studentGrades);
} catch (e) {
  console.error(e);
}



