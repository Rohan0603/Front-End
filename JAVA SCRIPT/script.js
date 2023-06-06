alert("hello")

console.dir(document);
document.querySelector('h1').innerHTML = 'hello'

//variables
var a = 'hello'
//operators
a = a + ' ' + "world"

//functions
function replace(a) {
    document.querySelector('h1').innerHTML = a
}

//exercise 2
var a = 0, b = 0, c = 0;
function one() {
    a++;
    msg();
}
function two() {
    b++;
    msg();
}
function three() {
    c++;
    msg();
}
function msg() {
    document.querySelector('h1').innerHTML = a + ' ' + b + ' ' + c
}

//Objects
var car = {
    company: "Suzuki",
    model: "Waganor LXI",
    color: "Grey",
    year: "2015",
    price: 500000,
    message: msg1()
}
function msg1() {
    return "My Car"
}

//switch
var a = 2;
switch (a) {
    case 1:
        document.write("Counter1");
        break;
    case 2:
        document.write("Counter2");
        break;
    case 3:
        document.write("Counter3");
        break;
    default:
        document.write("Counter4");
        break;
}

//for loop
var myArray = [1, 4, 2, 7, 3]
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

//while loop
var myArray = [1, 4, 2, 7, 3]
var x = 0;
while (x < myArray.length) {
    console.log(myArray[x]);
    x++;
}

//string method
var a = "hello world how are you world world my world";
find('you');
function find(b) {
    document.querySelector('h1').innerHTML = a.indexOf(b);
}

//dynamic display the value changed
//<input type="text" id="ip" oninput="display()">
function display() {
    let ip = document.getElementById("ip").value;
    document.querySelector('h1').innerHTML = ip;
}
//same using event listeners
/*<input type="text" id="ip">
    <button type="button" id="myBtn">Click</button>*/
var btn = document.querySelector("#myBtn");
btn.addEventListener('click', msg);
function msg() {
    let ip = document.getElementById("ip").value;
    document.querySelector('h1').innerHTML = ip;
}


//adding event listeners
var ele1 = document.getElementsByTagName('p');
ele1[0].addEventListener('mouseover', func);
function func(params) {
    ele1[0].style.color = 'blue';
}

//keyboard events
var ele1 = document.getElementsByTagName('body');
ele1[0].addEventListener('keypress', func);
function func(event) {
    if (event.keyCode == 13) {
        ele1[0].style.color = 'red';
    }
}

//mouse events
var ele1 = document.getElementsByTagName('body');
ele1[0].addEventListener('mouseover', func);
function func(event) {
    ele1[0].style.color = 'red';
}

//add to list by creating the element
var ip = document.getElementsByTagName('input');
var btn = document.getElementById('btn');
var ul = document.getElementsByTagName('ul');

btn.addEventListener('click', function () {
    var newpoint = document.createElement('li')
    ul[0].appendChild(newpoint)
    newpoint.textContent = ip[0].value;
    ip[0].value = '';
})