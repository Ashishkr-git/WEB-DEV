let numbers = [1, 2, 3, 4, 5, 6];

let factorial = numbers.reduce((accumulator, element) => accumulator * element);

console.log(factorial);

//maximum value

let collection = [1, 34, 834, 32, 43, 556, 323];

let max = collection.reduce((max,element)=>{
    if(max<element){
        return element;
    }else{
        return max;
    }
})

console.log(max)