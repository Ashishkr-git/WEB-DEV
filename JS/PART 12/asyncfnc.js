// each async function return promises either we write it or not

async function greet() {
//   throw "404 Page not found";
  return "hello";
}

greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log(`promise was : ${result}`);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("promise was rejected with error : ", error);
  });
