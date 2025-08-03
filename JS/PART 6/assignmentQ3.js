let countries = [
  "AUSTRALIA",
  "JAPAN",
  "SOUTH KOREA",
  "GERMANY",
  "PENSELVENIYA",
];

function input(country) {
  countries.push(country);
  console.log(countries);
  let answer = "";
  for (i = 0; i < countries.length; i++) {
    let index = 0
    let answerlen = countries[index].length;
    let countrieslen = countries[i].length;
    if (countrieslen > answerlen) {
      answer = countries[i];
    }
  }
  console.log(answer);
}

input("india".toUpperCase())