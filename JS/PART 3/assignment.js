let arr = [7, 9, 0, -2];
console.log(arr.slice(0, 3));
console.log(arr.slice(-3));

//QUESTION 3
let animals = "";
if (animals.length == 0) {
  console.log("STRING IS EMPTY");
} else {
  console.log("STRING IS NOT EMPTY");
}

//QUESTION 4
let cars = "Toyota";
let idx = 0;
if (cars[idx] == cars[idx].toLowerCase()) {
  console.log("Character is Lower Case");
} else {
  console.log("Character is not lower case");
}

//QUESTION 5
let heros = " ashish ";
console.log(heros.trim());

//QUESTION 6
let country = ["JAPAN" ,"SOUTH KOREA", "NEWZELAND","AUSTRALIA","GERMANY","USA"]
console.log(country.includes("NORWAY"))
