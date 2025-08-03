//write a js function to extract unique character from a string

let str = "abcdabcdefgggh";
function UniqueCode(str) {
  let answer = "";
  for (i = 0; i < str.length; i++) {
    let currchar = str[i];
    if (answer.indexOf(currchar)==-1) {
        answer += currchar
    }
  }
  return answer
}

console.log(UniqueCode(str));
