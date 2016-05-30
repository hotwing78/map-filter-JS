// code goes here :)
// Answer 1*****************************************************************************
var prices = items.map(function(element, index, arr) {
    return element.price;
});
var averagePrice = prices.reduce(function(accumlator, currentValue, index,
    array) {
    return (accumlator + currentValue);
});
document.getElementById("answer1").innerHTML = "$" + (averagePrice / prices.length)
    .toFixed(2) + " dollars";
//***************************************************************************************
//Answer 2*******************************************************************************
var answer2 = items.filter(function(element, index, arr) {
    return element.price >= 14.00 && element.price <= 18.00 && element.currency_code ===
        "USD";
}).map(function(element, index, arr) {
    return " " + element.title + " ";
});
document.getElementById("answer2").innerHTML = answer2;
//***************************************************************************************
//Answer 3*******************************************************************************
var GBP = items.filter(function(element, index, arr) {
    return element.currency_code === "GBP";
}).map(function(element) {
    return element.title + " $" + element.price.toFixed(2)
});
document.getElementById("answer3").innerHTML = GBP;
//***************************************************************************************
//Answer 4*******************************************************************************
var hasWood = items.filter(function(element, index, array) {
    return element.materials.indexOf("wood") !== -1;
}).map(function(element, index, array) {
    return " " + element.title;
});
document.getElementById("answer4").innerHTML = hasWood;
//***************************************************************************************
//   note to self, I will play around with this later.....................
// function filterWood(obj){
//   obj.materials.filter(function(element){
//     return if(element === "wood"){obj.map(function(element)
//     return obj.title)};
//   });
// }
// var hasWood = items.map(function(element,index,array){
//       if(filterWood(element) === true){
//         return element.title + " "; }
//       });
//Answer 5*******************************************************************************
var numOfMaterials = items.filter(function(element, index, array) {
    return element.materials.length >= 8;
}).map(function(element, index, array) {
    return element.title;
});
document.getElementById("answer5").innerHTML = numOfMaterials;
//***************************************************************************************
//Answer 6*******************************************************************************
var maker = items.filter(function(element, index, arr) {
    return element.who_made === "i_did";
});
document.getElementById("answer6").innerHTML = maker.length +
    " did it themselves";
//***************************************************************************************
// var students = ['damon','phillip','winstion', 'amanda'];
// var namesEndingA = students.filter(function(element,idx,arr){
//   return element[element.length - 1] ==="a"
// });
