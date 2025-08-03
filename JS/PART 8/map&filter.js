//map

let num = [1, 2, 3, 4, 5];
console.log(num);
let double = num.map((element) => element * element);
console.log(double);

//filter

let nums = [1,2,3,4,56,7,8,65,432,44,48]
let ans = nums.filter((elements)=>(elements%2 == 0)) //even --> true
console.log(ans)
