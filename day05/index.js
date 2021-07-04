const hotDogStack = ['🌭','🌭','🌭','🌭','🌭','🌭',]
console.log(hotDogStack.length)

// Build a function that uses a callback
function getHotDog(next){
    if(!hotDogStack.length) {
        // have no dogs
        throw 'No more hotdogs! 😭'
    }
    const hotdog = hotDogStack.pop()
    // return hotdog 
    next(hotdog)
}

// Call a function with a callback
try {
    getHotDog(
        (hotdog) => console.log('I ate the', hotdog)
        )
    
}

catch(error){
    console.log(error)
}
