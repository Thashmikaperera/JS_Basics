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

//-------------- Arrow Functions ------------
const getAddress = (address) =>{
    console.log(address);
} 

getAddress("panadura");

//---------------- Flow Controllers --------------------------
var customer_age = 26;
//logic Operators (<,>,==,<=,>=,&,|)

//if else ladder
if(customer_age > 26){
    console.log("Age OK");
}else if(customer_age == 26){
    console.log("Age equal");
}else{
    console.log("Age not Ok");
}

console.log("end");


var user_name = "Thashi@gmail.com";
var password = "Thashi123";

if(user_name == "Thashi@gmail.com" & password == "Thashi123"){
    console.log("Loging Success");
}else{
    console.log("Loging UnSuccess");
}

//------------ Switch Case -------------------
var j =2;

switch(j){
    case 1:
        console.log("Output is 1");
        break;
    case 2:
        console.log("Output is 2");
        break;
    case 3:
        console.log("Output is 3");
        break;  
    default:
        console.log("Default");
}


var m ="January";

switch(m){
    case "January":
        console.log("Output is 1");
        break;
    case "February":
        console.log("Output is 2");
        break;
    case "March":
        console.log("Output is 3");
        break;  
    default:
        console.log("Default");
}

//--------------------------
function getAlert(){
    alert("Hello Thashi");
}

getAlert();


//---------------- Loops ----------------------

//for loop
for(var i=0; i<10; i++){
    console.log("Hello Girl");
}

//while loop
var r=10;

while(r>5){
    console.log("while loop");
    r--;
}

//do while loop
var t=10;
do{
    console.log("do while loop");
    t--;
}while(t>5);

//------------- Arrays --------------
const student =["Kasun","saman","Nimal","vimal"];
console.log(student);
console.log(student[0]);
console.log(student.length);

const marks = [10,50,30,55,12,36];
var k=marks[2] + 10;
console.log(k);

for(var p=0; p< student.length;p++){
    console.log(student[p]);
}

//-------------- for each loop -----------------
for(var f in student){
    console.log(f);
}

//-------------- OOP-Object Oriented Programming------------------
const madushan = {
    "name" : "Madushan",
    "age" : 20,
    "Address" : "Panadura",
    "salary" : 200000
}

//----------------- JSON -----------------------


//--------- Event Handling and DOM Manipulation ------------
function btnClick(){
    var data = document.getElementById('userName').value
    console.log(data);
}

function keyDown(){
    console.log("btn down");
}