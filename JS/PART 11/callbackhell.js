h1 = document.querySelector("h1");

function colorchange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve(`color is changed to : ${color} at ${delay}`);
    }, delay);
  });
}

colorchange("red", 1000)
  .then((result) => {
    console.log(result);
    return colorchange("blue", 2000);
  })
  .then((result) => {
    console.log(result);
  });

