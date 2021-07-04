function isGreaterThanOne(a,b){
    const result = a/b 
    if(result <= 1){
        return false
    } else {
        return true
    }
}

const numerator = 6
const denominator = 5

console.log(isGreaterThanOne(numerator,denominator))

function isGreater(num,den){
    const complete = (num > den)? true : false
    return complete
}

console.log(isGreater(numerator, denominator))