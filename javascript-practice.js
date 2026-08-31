//Variables
const  testVariable = "Understanding of javascript const variable";
//testVariable = "we cannot change value of const variable";
console.log(testVariable); 

let testVariable2 = "Understanding of javascript let variable";
testVariable2 = "we can change value of let variable";
console.log(testVariable2);

//Data Types
let stringVariable = "This is a string variable";
let numberVariable = 100;
let booleanVariable = true;
let nullVariable = null;
let undefinedVariable;
console.log(stringVariable);
console.log(numberVariable);
console.log(booleanVariable);
console.log(nullVariable);
console.log(undefinedVariable);

//Arrys
let userArray = ["Numan", "Manj", 34, true];
console.log(userArray);
console.log(userArray[0]);
console.log(userArray[1]);
console.log(userArray[2]);
console.log(userArray[3]);

//Objects
let userObject = {
    name: "Numan",
    age: 34,
    isEmployee: true
};
console.log(userObject);
console.log(userObject.name);
console.log(userObject.age);
console.log(userObject.isEmployee);


//Functions
let userFunction = function(name, age){
    console.log("User name is: " + name);
    console.log("User age is: " + age);
} 
userFunction("Numan", 34);

//Arrow Fucntions
let arrowFunction = (name, age) => {
    console.log("User name is: " + name);
    console.log("User age is: " + age);
}
arrowFunction("Manj", 34);


console.log("This is a test for git and github");
 

let testFunction = () => {
    console.log("This is arrow function test for git and github");
 }
testFunction();

const testFunction2 = (testvalue) => {
    console.log("Hi: " + testvalue);
    console.log("Bye: " + testvalue);
}
testFunction2("Numan Manj");

//reutrn value from function
const testFunction3 = () => {
    const age = 34;
    return age
}
const age = testFunction3();
console.log("User age is: " + age);


//===============================================
//Arithmetic operators
let a = 10;
let b = 5;
let c = a + b; // Addition
let d = a - b; // Subtraction
let e = a * b; // Multiplication
let f = a / b; // Division
let g = a % b; // Modulus

const arithmeticOperators = () => {
    console.log("Addition: " + c);
    console.log("Subtraction: " + d);
    console.log("Multiplication: " + e);
    console.log("Division: " + f);
    console.log("Modulus: " + g);
}
arithmeticOperators();

// Extra arithmetic example
const extraArithmeticExample = () => {
    let num1 = 20;
    let num2 = 8;
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;

    console.log("Extra arithmetic example:");
    console.log("Sum: " + sum);
    console.log("Difference: " + difference);
    console.log("Product: " + product);
    console.log("Quotient: " + quotient);
}
extraArithmeticExample();
//===============================================
//comparison operators
let x = "10";
let y = 5;  
const comparisonOperators = () => {
    console.log("x == y: " + (x == y)); // Equal to
    console.log("x != y: " + (x != y)); // Not equal to
    console.log("x > y: " + (x > y));   // Greater than
    console.log("x < y: " + (x < y));  // Less than
    console.log("x >= y: " + (x >= y)); // Greater than or equal to
    console.log("x <= y: " + (x <= y)); // Less than or equal to
    console.log("x === y: " + (x === y)); // Strict equal to
    console.log("x !== y: " + (x !== y)); // Strict not equal to
    console.log("5 > 3: " + (5 > 3)); // Numeric comparison
    console.log("10 <= 10: " + (10 <= 10)); // Equal comparison with <=
}
comparisonOperators();

//Logical operators
const logicalOperators = () => {
    let a = 5;
    let b = 6;
    let c = 7;

    console.log("&&: " + (a == b && c > b )); // true && true
    console.log("||: " + (a == b || c > b )); // false || true
    console.log("!: " + !(a == b)); // !false
    
}    
logicalOperators();

//if else statement
const ifElseStatement = () => {
    let age = 66;
    if(age >= 18){
        console.log("You are eligible to vote");
    } else {
        console.log("You are not eligible to vote");
    }   
    if(age >= 18 && age <= 60){
        console.log("You are eligible to work");
    }
    else if(age > 60){
        console.log("You are eligible for retirement");
    }
    if(age < 18){
        console.log("You are not eligible to work");
    }   
    if(age > 65){
        console.log("Sit at home and relax");
    }
    else if(age >= 18 && age <= 65){
        console.log("You are eligible to work");
    }
}
ifElseStatement();


//================================================
//Loops
const loops = () => {
    //for loop
    console.log("For loop");
    for(let i = 0; i < 5; i++){
        console.log(i);
    }
}


const whileLoop = () => {
    //while loop
    console.log("While loop");
    let i = 0;
    while(i < 5){
        console.log(i);
        i++;
    }
}
whileLoop();

let userArray2 = ["Numan", "Manj", 34, true];
for(let i = 0; i < userArray2.length; i++){
    console.log("Length of array", userArray2[i]);
    if(userArray2[i] === "Manj"){
        console.log("Found Manj. Stopping the loop.");
        break;
    }
}

// Array sorting example
//smallest number ASCENDING
const numbers = [12, 5, 20, 3, 8];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers);
const findSmallestNumber = sortedNumbers[0];
console.log("Smallest number:", findSmallestNumber);


// Array sorting example
//biggest number DESCENDING
const numbers1 = [12, 5, 20, 3, 8];
const sortedNumbers1 = numbers1.sort((a, b) => b - a);
console.log("Sorted numbers:", sortedNumbers1);
const findbiggestnumber = sortedNumbers1[0];
console.log("Biggest number:", findbiggestnumber);


//finding number in array without sorting
const numbers2 = [12, 5, 20, 3, 8];
const findSmallestNumber2 = Math.min(...numbers2);
console.log("Smallest number without sorting:", findSmallestNumber2);

const findBiggestNumber2 = Math.max(...numbers2);
//let bg("Biggest number without sorting:", findBiggestNumber2);


//finding smallest number in array via loop
const numbers3 = [12, 5, 20, 3, 8];
let smallestnum =numbers3[0]
for (let i = 1; i < numbers3.length; i++) {
if (numbers3[i] < smallestnum) {
    smallestnum = numbers3[i];
}}
console.log("Smallest number via loop:", smallestnum);

//finding biggest number in array via loop

const numbers4 = [12, 5, 20, 3, 8];
let biggestnum =numbers4[0]
for (let i = 1; i < numbers4.length; i++) {
if (numbers4[i] > biggestnum) {
    biggestnum = numbers4[i];
}

}console.log("Biggest number via loop:", biggestnum);

const numbers5 = [12, 5, 20, 3, 8];
for(const number of numbers5){
    console.log("Number in array via for of loop:", number);
}

//Async & await function example
async function fetchData() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
}

//class example( class is a group of methods with similar properties and methods)
class User {
//constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //methods/actions
    login() {
        console.log("User logged in");
    }
    sayhello() {
        console.log("Hello User");
    }
}
//objects are instances of classes. We can create multiple objects from a class. Each object can have its own properties and methods. In the above example, we created a class called User with a constructor that takes name and age as parameters. We then created an object called user from the User class and called the login and sayhello methods.
const user = new User();
user.login();
user.sayhello();

//Objects are instances of classes. We can create multiple objects from a class. Each object can have its own properties and methods. In the above example, we created a class called User with a constructor that takes name and age as parameters. We then created an object called user1 from the User class and passed the name and age as arguments. We can access the properties of the object using dot notation.
const user1 = new User("Numan", 34);
console.log(user1.name);
console.log(user1.age);
//================================================


export default class EmployeeimportExport{

    learn() {
        console.log("Employee is learning");
    }
}