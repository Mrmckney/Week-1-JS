// function that adds two numbers
function addTwoNumbers(num1, num2){
     const myTotal = num1 + num2 
     return myTotal
}

const num1 = 50
const num2 = 100

const myTotal = addTwoNumbers(num1, num2)

console.log(myTotal)

// alternative
function addNums(a, b){
     return a + b
}

const num1 = 2
const num2 = 3

console.log(addNums(num1, num2))

// function that finds the greater number
function numGreat(a, b){
    if(a < b){
        return a
    } else {
        return b
    }
}
const num = 10
const num1 = 50

console.log(numGreat(num, num1))



// function to square a number
function squareNumber(a){
    return a * a 
}

const test = 4

console.log(squareNumber(test))


// function to find multiply square numbers of an array
function squareNumbers(number){
     for(let i=0; i<3; i++){
         console.log(number[i] ** 2)
     }
    
}

let num = [10, 20, 30]

squareNumbers(num)  
