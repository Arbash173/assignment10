// |||||||||||||||||||||||||||||||||||||||||||| FUNCTION (Ch # 35 - 38) |||||||||||||||||||||||||||||||||||||||||||||

// ***************************************** Question # 01 *****************************************

// function dt(){
//     var dt = new Date();
//     document.write(dt);
// }
// dt();

// ***************************************** Question # 02 *****************************************

// function greet(){
//     alert("Hello! " + first + " " + last);
// }

// var first = prompt("Enter your first name: ");
// var last = prompt("Enter your last name: ");
// greet();

// ***************************************** Question # 03 *****************************************

// function addNums(num1, num2){
//     return num1 + num2
// }

// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");
// var sum = addNums(num1, num2);
// console.log("Sum of two numbers is " + sum);

// ***************************************** Question # 04 *****************************************

// function oprNums(num1, num2, opr){
//     if(opr === "+"){
//         return num1 + num2;
//     }else if(opr === "*"){
//         return num1 * num2;
//     }else if(opr === "-"){
//         return num1 - num2;
//     }else if(opr === "/"){
//         return num1 / num2
//     }else if(opr === "%"){
//         return num1 % num2
//     }else{
//         return "Opr not match";
//     }
// }

// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");
// var opr = prompt("Enter your operator(+, -, *, /, %): ");
// var sum = oprNums(num1, num2, opr);
// console.log(sum);

// ***************************************** Question # 05 *****************************************

// function square(num){
//     return num * num;
// }

// var square = square(5);
// console.log(square);

// ***************************************** Question # 06 *****************************************

// function factorial(num){
//     for(var i=num-1 ; i>=1; i--){
//         num *= i;
//     }
//     return num;
// }

// var factorial = factorial(5);
// console.log(factorial);

// ***************************************** Question # 07 *****************************************

// function counting(){
//     for(var i=fn; i<=ln; i++){
//         document.write(i + "<br/>")
//     }
// }

// var fn = +prompt("Enter first number: ");
// var ln = +prompt("Enter last number: ");
// counting();

// ***************************************** Question # 09 *****************************************

// (i)

// function area(width, height){
//     return width * height;
// }


// var area = area(10, 5);
// document.write("Area of Triangle = " + area);

// (ii)

// function area(width, height){
//     return width * height;
// }

// var width = 10; height = 20;
// var area = area(width, height);
// document.write("Area of Triangle = " + area);

// ***************************************** Question # 10 *****************************************

// function palindrome(user){
//     var reverse = user.split("").reverse().join("");
//     if(user === reverse){
//         alert("It's a Palindrome");
//     }else{
//         alert("It's not a Palindrome");
//     }
// }

// var user = prompt("Enter your word");
// palindrome(user);

// ***************************************** Question # 11 *****************************************

// function titleCase(string){
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     document.write(sentence.join(" "));
// }
// var string = prompt("Enter a word or sentence: ")
// titleCase(string);

// ***************************************** Question # 14 *****************************************

// function calcCircumference(radius){
//     return 2 * 3.142 * radius
// }

// function calcArea(radius){
//     return 3.142 * radius * radius
// }

// var radius = 10;
// var circumference = calcCircumference(radius)
// var area = calcArea(radius)
// document.write("The circumference is " + circumference + "<br/>The area is " + area)