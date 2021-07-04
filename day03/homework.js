// FizzBuzz problem
// output 1...100
// if /3 Fizz
// if /5 Buzz
// if /3 && /5 FizzBuzz



for(let i=0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('Fizzbuzz')
    } else if (i % 3 === 0){
        console.log('Fizz')
    } else if (i % 5 === 0){
        console.log('Buzz')
    } else {
        console.log(i)
    }
}


// Pyramid problem
// Write a loop to print
// #, ##, ###, ####, #####

// function pyramid(numberofRows){
//     for(let i = 1; i <= numberofRows; i++) {
//         let row = []

//         for(let j = 1; j <= i; j++){
//             row.push('#')
//         }
//         console.log(row.join(' '))
//     }

// }

// pyramid(5)

let row = []
for(let i=1; i<=5; i++) {
    row.push('#')
    console.log(row.join(' '))
}
// row += '# '

console.log('start')
setTimeout(function(){
    console.log('middle')
} , 0)
console.log('done')
