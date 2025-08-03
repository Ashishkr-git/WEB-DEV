// takes one or multiple functions as argument
function multiplegreet(func, n) {  //higher order function
  for (let i = 1; i <= n; i++) {
    func()
  }
}

let greet = function () {
  console.log("hello");
};

multiplegreet(greet, 5)
