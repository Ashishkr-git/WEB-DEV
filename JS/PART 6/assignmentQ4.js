let string = "aeiou";
let vowel = "aieou";
function vowelcount(string) {
  let count = 0;
  for (let char of string) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  console.log(count);
}

vowelcount(string);

