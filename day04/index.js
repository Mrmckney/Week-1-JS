const calcSalesTax  = require('./salesTax')
const calcFh = require('./calcFh')
const teslaPrice = 10000
const audi = 1299
const ford = 800

calcSalesTax(teslaPrice)
calcSalesTax(audi)
calcSalesTax(ford)

calcFh(21)