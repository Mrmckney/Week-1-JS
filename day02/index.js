// create a variable to hold our subtotal
const subtotal = 145.64
const taxRate = 0.07
// create a function that calculates taxtotal from subtotal
function calcTaxTotal(taxRate, subtotal){
   const taxTotal = taxRate * subtotal 
   return taxTotal
}
// call the salestax function with our subtotal and save taxtotal
const myTaxTotal = calcTaxTotal(taxRate, subtotal)
// calculate the total = subtotal + taxtotal
const myTotal = subtotal + myTaxTotal 
// display it all...
console.log('Subtotal    ', subtotal.toFixed(2))
console.log('Tax          ', myTaxTotal.toFixed(2))
console.log('----------------------')
console.log('Total       ', myTotal.toFixed(2))
 

