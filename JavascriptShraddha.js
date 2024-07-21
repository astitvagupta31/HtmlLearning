/* ------------ Lecture-1 ----------------- */

// Java script definition 
// Variables [let,var,const], RULES
// Data Types [number,string,boolean,undefined,null,bigInt,symbol]

// Code : Lecture-1

// const product = {
//     title : "Parker Jotter",
//     rating: 4,
//     text : "Deal of the day",
//     price : 270,
//     isDeal:true,
// }
// console.log(product);

/* -------------- Lecture-2 ------------------ */

// Conditional operators and conditional statements
// Operators --> Used to perform operations on data 
// Modulus operator --> it will give the remainder when a%b.

// let a=10;
// const b="10";
// console.log("a+b= ",a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(b/a);
// console.log(b%a);
// console.log(b**a) // 20^10 --> 20 ki power 10 
// console.log(a);
// console.log(--a);
// console.log(--b);
// console.log(a===b);

// Ternary Operator --> a? b : c (b--> True, c--> False)

// let a =20;
// let b =25;
// console.log(a>b? "b is smaller than a" : "a is amaller than b");

// let a =18;

// console.log(a>=18? "vote" : "notvote" );

//Code practice lecture -2 --> Code-1

// let a = prompt("Enter a number");

// if (a%5==0){
//     console.log("yes it is multiple of 5 ");
// }else{
//     console.log("No it is not a multiple of 5 ")
// }

//Code practice lecture -2 --> Code-2

// let score = prompt("Enter a marks with in a range of 0-100");

// if(score>=80 && score<=100){
//     console.log("The Grade is 'A' ");
// }
// else if(score>=70 && score<=79){
//     console.log("The Grade is 'B' ");
// }
// else if(score>=60 && score<=69){
//     console.log("The Grade is 'C' ");
// }
// else if(score>=50 && score<=59){
//     console.log("The Grade is 'D' ");
// }else if(score>=0 && score<=49){
//     console.log("The Grade is 'F' ");
// }
// else{
//     console.log("Score is not in a range of 0-100")
// }


/* Lecture-3 [Loops And Strings]

----> LOOPS [FOR,WHILE,DO-WHILE,FOR-OF,FOR-IN] --> Loops are used to execute a piece of code again and again

Ques: Sum of 1 to n
 let n = prompt("Enter a number till the sum you want to get ")
 let sum=0;
 for(let i=0;i<=n;i++){
      sum = sum + i ;
 }
 console.log(sum);


STRINGS : Sequence of characters used to represent text 
--> Define a string by using single quotes ('abc'), double quotes ("abc") as well as by bactick(`add the ${value} number`) 
--> By using backtick this is also known as template literal or string interpolation. [The way to embedded expression into strings]

Ex --> let str = "astitva" , let str = 'abcde', let str = `abc abc abc`
Ex : str.length , str[0]   --> String functions 


* ESCAPE CHARACTER :

--> \n -> New Line 
--> \t -> Tab Space 

Note : Excape characters length count as one character not two

* STRINGS METHODS : 

-> They are built in functions to manipulate a string 
-> Note : Strings are immutable in javascript that means it cannot change (the original string after manipulation), new string is taken as output and we have to print that one. 

-> let str1 = " astitva ";
-> let str2 = "gupta";

let newString = str1.toUpperCase();
console.log(newString) :- Original str1 remains same as strings are immutable in nature. 

-> str1.toLowerCase()
-> str1.trim();             --> To remove white spaces from beginning and end
-> str1.slice(start,end?)   --> It will return the string with slice part and it cannot include the end index 
-> str1.concat(str2); or str1 +str2 
-> str1.replace("as","ar");
-> str1.charAt(index);

** Question : prompt the user to enter fullname , generate a username for the user that contains @ at starting and then 
              username and then length of his/her name.
*/              

// let fullName = prompt("Enter your fullname ");
// let initials = "@";
// let fullNameLength = fullName.length;

// console.log(`Your Username is ${initials}${fullName}${fullNameLength}`)































