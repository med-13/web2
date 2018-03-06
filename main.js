/*jslint plusplus: true, evil: true*/
/*global console, alert, prompt*/
/*
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(value, index, array) {
    if (value % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

var result = myArray.filter(isEven);

console.log(result); 
*/
/*
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
newArray = myArray.filter(function(newArray){
    return newArray < 6;
})
console.log(newArray);
*/

//Deep coping

var deepArray = [["freeCodeCamp"]];
var shallowCopy = deepArray.slice(0);
shallowCopy[0].push("is great")
console.log(shallowCopy[0], shallowCopy[0]);




