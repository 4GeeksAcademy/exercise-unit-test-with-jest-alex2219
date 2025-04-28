

const fromDollarToYen = (amountInDollar) => {
    let yen = amountInDollar * 156.5;
    return yen;
};


const fromEuroToDollar = (amountInEuro) => {
    let dollar = amountInEuro * 1.07;
    return dollar;
};

const fromYenToPound = (amountInYen) => {
    let pound = amountInYen * 0.87;
    return pound;
};


module.exports = {
    fromDollarToYen,
    fromEuroToDollar, 
    fromYenToPound
}