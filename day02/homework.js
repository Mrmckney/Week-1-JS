// function that returns whether a number is even or not (true or false)
// next do it with an array of numbers

// create variable
const num1 = 1
// make function to return true or false 
function evenOrOdd(num){
    if(num % 2 === 0 ){
        return true
    } else {
        return false
    }

}
console.log(evenOrOdd(num1))
console.log('-----------')

// create array
let num2 = [1, 5, 12, 16, 14, 25, 37]
// make function with loop to make true or false
function isEven(num10){
    for(let i=0; i < num10.length; i++){
        console.log(num10[i] % 2 === 0)
    }
}
isEven(num2)
