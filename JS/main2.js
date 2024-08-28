//-----------------Arithmetic operators--------------------
const x =10;
const y =14;

const z=x+y;
console.log(z);

const n = x * y;
console.log(n);

const s = y-x;
console.log(s);

const d = y/x;
console.log(d);


//---------------------String concatnation-----------------------
console.log("Value is :" + z);

//---------------------JS Data Types----------------------
//numbers
var f = 10; 

//String
var r ="Thashi" 

//object
var ob ={ 
    "name" : "Thashi",
    "age"  :  25,
    "salary" : "250000"
}

//undefined
var k; 

//boolean
var b =true 

//----------------------- JS Functions ----------------------------
const number1 = 10;
const number2 =20;

console.log(number1 + number2);

var p= "Hello World";

var isConnected = true;

const number3 = 45;
const number4 =50;

console.log(number3 + number4);

//-----Normal Function-----
function greet(){
    var today= new Date();
    console.log("Today is :" +today)
}

greet();

//-----Parameterized Function-----
function getSum(x,y){
    console.log("From Method:"+ (x+y) );
}

getSum(50,25)

function getName(name){
    console.log("Good Morning "+ name);
}

getName("Thashi");

//------Return Type Functions--------
function getMultiply(x,y,z){
    const answer= x*y*z;
    return answer;
}

const c=getMultiply(10,5,9);
console.log(c);

//--------------------------------------

function seeGreet(){
    document.getElementById('greet').innerHTML = "Good Evening All";
}

function getAge(yourAge){
    return "Age is :"+yourAge;
}

const age=getAge(20);
console.log(age);

//--------------------------------------
const getName1 =function (name){
    console.log(name);
}

getName1("Thashi");

//-------------- Arrow Function ------------
const getAddress = (address) =>{
    console.log(address);
} 

getAddress("panadura");