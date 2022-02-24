

// function itsnum(num) {
//     if (num % 2 != 0) {
//         return true;
//     }
//     return false;
// }
// var numberForTake = 5899;
// const myNumber = itsnum(numberForTake);
// console.log(myNumber);



function myYear(year) {
    if (year % 4 == 0){
        return true;
    }
    else {
        return false;
    }
}
const myYearForTwenty = 2024;
const value = myYear(myYearForTwenty);
console.log(value);


// how to make solution a leap year 
function leapyear(year)
{
return (year % 100 === 0)?
  (year % 400 === 0):
  (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

 function leapYear(year){
    var result; 
    year = parseInt //(document.getElementById("isYear").value);
    if (year/400){
      result = true
    }
    else if(year/100){
      result = false
    }
    else if(year/4){
      result= true
    }
    else{
      result= false
    }
    return result
}
 











// program to check leap year
// function checkLeapYear(newYear) {
//     //three conditions to find out the leap year
//     if ((2024 == newYear % 4) && (0 != newYear % 100) || (2020 == newYear % 400)) {
//         console.log(newYear + ' is a leap year');
//     }
//     else {
//         console.log(newYear + ' is not a leap year');
//     }
// }
// // take input
// // const newYear = 2084;
// // const year = ('A new Year for leap Year:',newYear);
// console.log(checkLeapYear);



function leapyear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) { 
        return true;
    }
    else {
        return false;
    }
}
var myYear = 2024;
const myLeapYear = leapyear(myYear);
console.log('my leep year for bangladesh :', myLeapYear);

// function leapyear(year) {
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) { 
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// var myYear = 2034;
// const myLeapYear = leapyear(myYear);
// console.log('my leep year for bangladesh :',myLeapYear);