const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = (valueInDollar) => {
    let valueInyen = valueInDollar * 156.5;
    return valueInyen;
};

const fromYenToPound = (valueInYen) => {
    let valueInpound = valueInYen * 0.87;
    return valueInpound;
};


module.exports = {
    sum,
    fromDollarToYen,
    fromEuroToDollar, 
    fromYenToPound
}