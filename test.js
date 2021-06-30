const myName = 'Matt' 

console.log('Hello ' + myName)

// define a function for isDrinkingAge
// given an age -- say if someone is drinking age or not

function isDrinkingAge(age){
    if (age < 21){
        console.log('Not Drinking Age') 
    } else {
        console.log('Legal Drinking Age') 
    }
}
let userAge = 19 
isDrinkingAge(userAge)