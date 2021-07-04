function addArrayItems(array){
    let sum = 0
    for(i=0; i < array.length; i++){
        sum = sum + array[i]
        
    }
    return sum
}

const numGroup = [5, 10, 15, 20, 25]

console.log(addArrayItems(numGroup))