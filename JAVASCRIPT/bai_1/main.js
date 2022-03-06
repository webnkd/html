
// alert
// console
// confirm
// prompt
// setTimeout
// setInterval

var fullName ='Nguyen Kim Duc';

//alert(fullName)

//console.log(fullName)

// var xacNhan = confirm('Xac nhan tuoi');
// console.log(xacNhan);

// var tuoi = prompt('Xac nhan tuoi');
// console.log(tuoi);

// setTimeout(() => {
//     alert('Het gio!!!')
// }, 1000);

// setInterval(function() {
//     console.log('Day la log' + Math.random())
// }, 1000)

//Kieu du lieu
// Number
// String
// Boolean
// undefined
// null
// Symbol
// function
// object

// let a = 5;
// let ten = 'KimDuc';
// let nam = true;

// var myFunction = function() {
//     alert(ten+a+nam);    
// }
//myFunction();

// var myObject = {
//     name: 'Kim Duc',
//     age: 50,
//     adress: 'Ha Noi'
// };

// var myArray = [
//     'Java',
//     'PHP',
//     'Reactjs'
// ];
// console.log('myObject', myObject, myArray);

// function showDialog(message1, message2) {
//    console.log(message1, message2); 
// }
// function showDialog() {
//     //console.log(arguments); 
//     for (var param of arguments) {
//         console.log(param);
//     }
//  }
// showDialog('Test 1', 'Test 2');

// function cong(a, b) {
//     return a+b;
// }
// var result = cong(5, 6);
// console.log(result);

//document.write('test');
// HTML DOM
// 1. Element: ID, class, tag
// CSS selector, HTML collection
// 2. Attribute
//3. Text

//console.log(document);
var headingNode = document.getElementById('heading');
console.log({
    element: headingNode
});