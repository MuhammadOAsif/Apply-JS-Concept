
// PRECTICE FUNCTION KEY FOR PROBLEM SOLVED IN JS JAVA-SCRIPT,,,,,,,,,

function mileskilomiter(miles) {
    var km = miles * 1.60934;
    return km;
}
var marathon = mileskilomiter(26.2);
console.log('miles kilometer in marathon:', marathon);




function kilogram(grams) {
    var kilo = grams * 1000;
    return kilo;
}
var potato = kilogram(5);
console.log('5 kilogram equals:', potato);



function computerPrice(take) {
    var asif = take * 40;
    return asif;
}
var total = computerPrice(40000);
console.log(total);


function firize(take) {
    var total = take * 5;
    return total;
}
var result = firize(25000);
console.log('apner frize ar mullo hoea daralo:', result);


// FUNCTION KEY FOR EVEN AND ODD NUMBER IN JAVA SCRIPT,,,,,,,
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
var myEvenNum = 235435;
const mynumber = isEven(myEvenNum);
const inMyEven = isEven('Its my even number', mynumber); 
console.log(mynumber);


function itsnum(num) {
    if (num % 2 != 0) {
        return true;
    }
    return false;
}
var numberForTake = 5899;
const myNumber = itsnum(numberForTake);
console.log(myNumber);