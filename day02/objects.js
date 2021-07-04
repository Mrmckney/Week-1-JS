// creating objects
const mangoes = {
   taste: 'delicious',
   color: 'orange',
   source: 'trees',
   climate: 'tropical / subtropical',
   price: 0.79,
   pit: true,
   allergen: true,
}
console.log(mangoes)
const qty = 7

const totalCost = qty * mangoes.price
console.log(totalCost)

const lobster = {
    taste: 'buttery',
    color: 'red',
    source: 'ocean',
    price: 19.99,
    pit: false,
    shell: true,
    allergen: true,
}

const bacon = {
    taste: 'heaven',
    color: 'rust',
    source: 'pigs',
    price: 1.99,
    pit: false,
    shell: false,
    allergen: false,
}

function isAllergen(food) {
    if(food.allergen === true) {
        console.log('*** This food is a known allergen. ***')
    } else {
        console.log('This food is safe for most people.')
    }  
}

isAllergen(lobster)