function generaterandom(start, end) {
  let diff = end - start;
  let randomnumber = Math.floor(Math.random() * diff) + start;
  console.log(randomnumber);
}
generaterandom(90, 100);
