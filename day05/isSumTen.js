function isSumTen(a,b){
    const sum = a + b
    if(sum === 10){
        return true
    } else {
        return false
    }
}
const num1 = 4
const num2 = 6

console.log(isSumTen(num1, num2))

function isSumT(a,b){
    const sum = a + b
    const result = (sum === 10)? true : false 
       return result
}
console.log(isSumT(num1,num2))