LEVEL - 1

q1) Write a program to print the following output for the given values a=10,b=20 Output expected is: 10+20=30 10-20=-10 10*20=200 10/20=0 10%20=10
const a = 10;
const b = 20;
console.log(`${a} + ${b} = ${a + b}`)
console.log(`${a} - ${b} = ${a - b}`)
console.log(`${a} * ${b} = ${a * b}`)
console.log(`${a} / ${b} = ${a / b}`)
console.log(`${a} % ${b} = ${a % b}`)


q2) Write a program to print the following for a given value a=3; Output expected: 3*1=3 3*2=6 3*3=9 3*4=12 3*5=15 3*6=18
const a =3;
console.log(a * 1, a * 2, a * 3, a * 4, a * 5, a * 6)


q3) Given a variable var x = 23. Increment its value by 1.
var x = 1;
console.log(++x);


q4) Print the sum of 12 and 23 using the addition operator.
const a = 12;
const b = 23;
console.log(a + b)


q5) Print the difference of 52 and 36 using the subtraction operator.
const a = 52;
const b = 36;
console.log(a - b)


q6) Print the product of 23 and 56 using the multiplication operator.
const a = 23;
const b = 56;
console.log(a * b)


q7) Divide 36 by 5 and print the output by using the division operator.
const a = 36;
const b = 5;
console.log(a / b)


q8) Divide 67 by 4 and print the quotient.
const a = 67;
const b = 4;
console.log(a / b)


q9) Divide 48 by 7 and print the remainder.
const a = 48;
const b = 7;
console.log(a % b)


q10) Print the value of 2 raised to the power of 6.
console.log(2 ** 6)


q11) Given var x = “Edupoly” and var y = “Training”. Print “Edupoly Training” in the console.
var x = "Edupoly";
var  y = "Training";
console.log(x + " " + y);


q12) Find the perimeter of a square having each side 4cm.
var eachSide = 4;
console.log(eachSide * 4);


q13) Find the perimeter of a rectangle of length 50cm and breadth 35cm.
var l = 50;
var b = 35;
var p = 2 * (l + b);
console.log(p);


q14) Find the circumference of a circle of radius 20cm. (Take π = 3.14)
var pi = 3.14;
var r = 20;
console.log(2 * pi * r);


q15) Find the area of a square having each side 12cm.
var a = 12;
var b = a ** 2;
console.log(b);


q16) Find the area of a rectangle of length 25cm and breadth 16cm.
var l = 25;
var b = 16;
var a = l * b;
console.log(a);


q17) Find the area of a circle of radius 3.75cm.
var pi = 3.14;
var r = 3.75;
console.log(pi * r * r);


q18) Given the marks of 3 subjects as 67,48 and 74. Print the average marks of the 3 subjects.
var suba = 67;
var subb = 48;
var subc = 74;
var avg = (suba + subb + subc) / 3;
console.log(avg);


q19) Given the cost of a product as ₹538.56, add 18% GST to it and print the total cost.
var productCost = 538.56;
var includeGST = productCost * 0.18;
var totalCost = productCost + includeGST;
console.log(totalCost);


q20) Given a variable var x = 48. Decrement its value by 1.
var x = 48;
console.log(--x)


q21) Write a script to swap two numbers;
var x = 10;
var y = 20;
console.log("Before swapping:" + " " + x, y);
[x, y] = [y, x];
console.log("After swapping:" + " " + x, y);


q22) Write a script to swap two numbers without using 3rd variable (please use *,%,/ not + and -)
let a = 10;
let b = 20;
console.log(`Before swapping: ${a}, ${b}`);
a = a * b;
b = a / b;
a = a / b;
console.log(`After swapping: ${a}, ${b}`);


q23) Write a program to print the reminder of a division
var a = 10;
var b = 20;
console.log(a % b);


q24) Write a program to print the simple interest rate of given P T R values
var P = 1000;
var T = 2;
var R = 5;
var SI = (P * T * R) / 100;
console.log(SI);


q25) Write a program to print the simple interest rate of given P T R values
var P = 100;
var T = 6;
var R = 5;
var SI = (P * T * R) / 100;
console.log(SI);


q26) Write a program to print the max of given two numbers using ternary operator
const a = 10;
const b = 20;
const max = a > b ? a : b;
console.log(`The maximum of ${a} and ${b} is ${max}.`);


q27) Write a program to print the max of given three numbers using ternary operator
const a = 10;
const b = 20;
const c = 15;
const max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
console.log(`The maximum of ${a}, ${b}, and ${c} is ${max}.`);


q28) Find the area of a square for given length of a side
const sideLength = 5;
const area = sideLength * sideLength;
console.log(`The area of the square with a side length of ${sideLength} units is ${area} square units.`);


q29) Find the area of a square for given length of a side
const sideLength = 200;
const area = sideLength * sideLength;
console.log(`The area of the square with a side length of ${sideLength} units is ${area} square units.`);


q30) Find the area of a rectangle for given length and breadth
const length = 10;
const breadth = 21;
const area = length * breadth;
console.log(`The area of the rectangle with a length of ${length} units and a breadth of ${breadth} units is ${area} square units.`);


q31) Find the area of a triangle for given base and height
const base = 10;
const height = 21;
const area = (base * height) / 2;
console.log(`The area of the triangle with a base of ${base} units and a height of ${height} units is ${area} square units.`);


q32) Check a given number is even or not using ternary operator
const a = prompt("Enter a number");
const even = a%2 === 0 ? "true" : "false";
console.log(even);


q33) Check a given number is odd or not using ternary operator
const a = prompt("Enter a number");
const odd = a%2 === 1 ? "true" : "false";
console.log(odd);


q34) Check a given number is positive or not using ternary operator
const a = prompt("Enter a number");
const positive = a > 0 ? "true" : "false";
console.log(positive);


q35) Check a given number is multiple of 4 or not using ternary operator
const a = prompt("Enter a number");
const multipleOfFour = a%4 === 0 ? "true" : "false";
console.log(multipleOfFour);


q36) Print the (a+b)^2 for given a and b values
const a = 10;
const b = 20;
const c = a**2 + 2*a*b + b**2;
console.log(c)


q37) Print the (a+b)^3 for given a and b values
const a = 10;
const b = 20;
const c = a**3 + 3*a**2*b + 3*a*b**2 + b**3;
console.log(c)


q38) Print the (a+b+c)^2 for given a,b and c values
const a = 10;
const b = 20;
const c = 30;
const d = a**2 + b**2 + c**2 + 2*a*b + 2*b*c + 2*c*a;
console.log(d)


q39) Ramesh’s basic salary is input through the keyboard. His dearness allowance is 40% of basic salary, and house rent allowance is 20% of basic salary. Write a program to calculate his gross salary.
const basicSalary = prompt("Enter your basic salary");
const dearnessAllowance = basicSalary * 0.4;
const houseRentAllowance = basicSalary * 0.2;
const grossSalary = basicSalary + dearnessAllowance + houseRentAllowance;
console.log(grossSalary);


q40) The distance between two cities (in km.) is input through the keyboard. Write a program to convert and print this distance in meters, feet, inches and centimeters.
const distance2cities = prompt("Enter the distance between two cities in km");
const meters = distance2cities * 1000;
const feet = distance2cities * 3280.84;
const inches = distance2cities * 39370.1;
const centimeters = distance2cities * 100000;
console.log(`The distance between two cities in meters, feets, inches, centimeters are ${meters}, ${feet}, ${inches}, ${centimeters} respectively.`);


q41) If the marks obtained by a student in five different subjects are input through the keyboard, find out the aggregate marks and percentage marks obtained by the student. Assume that the maximum marks that can be obtained by a student in each subject is 100.
var subject1 = +prompt("Enter your marks in subject 1");
var subject2 = +prompt("Enter your marks in subject 2");
var subject3 = +prompt("Enter your marks in subject 3");
var subject4 = +prompt("Enter your marks in subject 4");
var subject5 = +prompt("Enter your marks in subject 5");
var aggregateMarks = subject1 + subject2 + subject3 + subject4 + subject5;
var percentageMarks = aggregateMarks / 5;
console.log(`The aggregate marks and percentage marks obtained by the student are ${aggregateMarks} and ${percentageMarks} respectively.`);


q42) Temperature of a city in Fahrenheit degrees is input through the keyboard. Write a program to convert this temperature into Centigrade degrees.
var fahrenheit = prompt("Enter the temperature in Fahrenheit");
var centigrade = (fahrenheit - 32) * (5/9);
console.log(`The temperature in Centigrade is ${centigrade}`);


q43) The length & breadth of a rectangle and radius of a circle are input through the keyboard. Write a program to calculate the area & perimeter of the rectangle, and the area & circumference of the circle.
var length = prompt("Enter the length of the rectangle");
var breadth = prompt("Enter the breadth of the rectangle");
var radius = prompt("Enter the radius of the circle");
var areaRectangle = length * breadth;
var perimeterRectangle = 2 * (length + breadth);
var areaCircle = 3.14 * radius * radius;
var circumferenceCircle = 2 * 3.14 * radius;
console.log(`The area and perimeter of the rectangle are ${areaRectangle} and ${perimeterRectangle} respectively. The area and circumference of the circle are ${areaCircle} and ${circumferenceCircle} respectively.`);


q44) Two numbers are input through the keyboard into two locations C and D. Write a program to interchange the contents of C and D.
var c = prompt("Enter a number");
var d = prompt("Enter a number");
console.log(`Before swapping: ${c}, ${d}`);
[c, d] = [d, c];
console.log(`After swapping: ${c}, ${d}`);


LEVEL -2

q45) If a four-digit number is input through the keyboard, write a program to obtain the sum of the first and last digit of this number.
var fourDigitNumber = prompt("Enter a four digit number");
var firstDigit = fourDigitNumber[0];
var lastDigit = fourDigitNumber[fourDigitNumber.length - 1];
var sum = +firstDigit + +lastDigit;
console.log(`The sum of the first and last digit of the number is ${sum}`);


q46) If a five-digit number is input through the keyboard, write a program to reverse the number.
var fiveDigitNumber = prompt("Enter a five digit number"); 
var firstDigit = fiveDigitNumber[0];
var secondDigit = fiveDigitNumber[1];
var thirdDigit = fiveDigitNumber[2];
var fourthDigit = fiveDigitNumber[3];
var fifthDigit = fiveDigitNumber[4];
var reverseNumber = fifthDigit + fourthDigit + thirdDigit + secondDigit + firstDigit;
console.log(`The reverse of the number is ${reverseNumber}`);


q47) In a town, the percentage of men is 52. The percentage of total literacy is 48. If total percentage of literate men is 35 of the total population, write a program to find the total number  of illiterate men and women if the population of the town is 80,000.



q48) A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
var amount = prompt("Enter the amount to be withdrawn");
var hundred = parseInt(amount / 100);
var fifty = parseInt(amount / 50);
var ten = parseInt(amount / 10);
console.log(`The total number of currency notes of each denomination the cashier will have to give to the withdrawer are ${hundred} hundreds, ${fifty} fifties, and ${ten} tens.`);


q49) If a five-digit number is input through the keyboard, write a program to calculate the sum of its digits. (Hint: Use the modulus operator ‘%’)
var fiveDigitNumber = prompt("Enter a five digit number");
var firstDigit = +fiveDigitNumber[0];
var secondDigit = +fiveDigitNumber[1];
var thirdDigit = +fiveDigitNumber[2];
var fourthDigit = +fiveDigitNumber[3];
var fifthDigit = +fiveDigitNumber[4];
var sum = firstDigit + secondDigit + thirdDigit + fourthDigit + fifthDigit;
console.log(`The sum of the digits of the number is ${sum}`);


q50) If the total selling price of 15 items and the total profit earned on them is input through the keyboard, write a program to find the cost price of one item.
var totalSellingPrice = prompt("Enter the total selling price of 15 items");
var totalProfit = prompt("Enter the total profit earned on them");
var costPrice = (totalSellingPrice - totalProfit) / 15;
console.log(`The cost price of one item is ${costPrice}`);


q51) If a five-digit number is input through the keyboard, write a program to print a new number by adding one to each of its digits. For example if the number that is input is 12391 then the output should be displayed as 23402.
var fiveDigitNumber = prompt("Enter a five digit number");
var firstDigit = +fiveDigitNumber[0];
var secondDigit = +fiveDigitNumber[1];
var thirdDigit = +fiveDigitNumber[2];
var fourthDigit = +fiveDigitNumber[3];
var fifthDigit = +fiveDigitNumber[4];
// var newNumber = +firstDigit + +secondDigit + +thirdDigit + +fourthDigit + +fifthDigit;
// var newNumber = firstDigit , secondDigit , thirdDigit , fourthDigit , fifthDigit;
// var newNumber = +firstDigit + 1 + +secondDigit + 1 + +thirdDigit + 1 + +fourthDigit + 1 + +fifthDigit + 1;
// var newNumber = firstDigit + 1 + secondDigit + 1 + thirdDigit + 1 + fourthDigit + 1 + fifthDigit + 1;
// console.log(`The new number is ${newNumber}`);
console.log(`The new number is ${firstDigit + 1}${secondDigit + 1}${thirdDigit + 1}${fourthDigit + 1}${fifthDigit + 1}`);


q52) Write a program that converts Centigrade to Fahrenheit. Expected Output : Input a temperature (in Centigrade): 45 113.000000 degrees Fahrenheit.
var centigrade = prompt("Enter the temperature in Centigrade");
var fahrenheit = (centigrade * 9/5) + 32;
console.log(`The temperature in Fahrenheit is ${fahrenheit}`);


q53) Write a JavaScript program that calculates the volume of a sphere. Expected Output : Input the radius of the sphere : 2.56 The volume of the sphere is 70.276237.
var radius = prompt("Enter the radius of the sphere");
var volume = (4/3) * 3.14 * radius * radius * radius;
console.log(`The volume of the sphere is ${volume}`);


q54) Write a JavaScript program that prints the perimeter of a rectangle to take its height and width as input. Expected Output : Input the height of the Rectangle : 5 Input the width of the Rectangle : 7 Perimeter of the Rectangle is : 24.000000
var height = prompt("Enter the height of the rectangle");
var width = prompt("Enter the width of the rectangle");
var perimeter = 2 * (height + width);
console.log(`The perimeter of the rectangle is ${perimeter}`);


q55) Write a JavaScript program that converts kilometers per hour to miles per hour. Expected Output : Input kilometers per hour: 15 9.320568 miles per hour
var kilometersPerHour = prompt("Enter the kilometers per hour");
var milesPerHour = kilometersPerHour * 0.621371;
console.log(`The miles per hour is ${milesPerHour}`);


q56) Write a JavaScript program that takes hours and minutes as input, and calculates the total number of minutes. Expected Output : Input hours: 5 Input minutes: 37 Total: 337 minutes.
var hours = prompt("Enter the number of hours");
var minutes = +prompt("Enter the number of minutes");
var totalMinutes = (hours * 60) + minutes;
console.log(`The total number of minutes is ${totalMinutes}`);


q57) Write a program in JavaScript that takes minutes as input, and display the total number of hours and minutes. Expected Output : Input minutes: 546 9 Hours, 6 Minutes
var minutes = prompt("Enter the number of minutes");
var hours = minutes / 60;
var minutes = minutes % 60;
console.log(`The total number of hours and minutes are ${hours} hours and ${minutes} minutes respectively.`);


q58) Write a program in JavaScript that reads a forename, surname and year of birth and display the names and the year one after another sequentially. Expected Output : Input your firstname: Tom Input your lastname: Davis Input your year of birth: 1982 Tom Davis 1982
var foreName = prompt("Enter your fore name");
var surName = prompt("Enter your surname");
var yearOfBirth = prompt("Enter your year of birth");
// console.log(`${foreName} ${surName} ${yearOfBirth}`);
console.log("Forename:" + foreName + " " +"Surname:" + surName + " " + "DOB:" + yearOfBirth);


q59) Write a program in JavaScript to calculate the sum of three numbers with getting input in one line separated by a comma. Expected Output : Input three numbers separated by comma : 5,10,15 The sum of three numbers : 30
var a = 5;
var b = 10;
var c = 15;
var sum = a + b + c;
console.log(`The sum of ${a}, ${b}, and ${c} is ${sum}.`);


q60) Write a JavaScript program to perform addition, subtraction, multiplication and division of two numbers Expected Output : Input any two numbers separated by comma : 10,5 The sum of the given numbers : 15 The difference of the given numbers : 5 The product of the given numbers : 50 The quotient of the given numbers : 2.000000
var a = 10;
var b = 5;
var sum = a + b;
var difference = a - b;
var product = a * b;
var quotient = a / b;
console.log(`The sum of ${a} and ${b} is ${sum}. The difference of ${a} and ${b} is ${difference}. The product of ${a} and ${b} is ${product}. The quotient of ${a} and ${b} is ${quotient}.`);


q61) Write a JavaScript program to find the third angle of a triangle if two angles are given. Expected Output : Input two angles of triangle separated by comma : 50,70 Third angle of the triangle : 60
var a = 50;
var b = 70;
var c = 180 - (a + b);
console.log(`${a}, ${b} Third angle of the triangle: ${c}.`);


q62) Write a script to display the maximum number in given two numbers using operators
var a = 10;
var b = 20;
var max = a > b ? a : b;
console.log(`The maximum of ${a} and ${b} is ${max}.`);


q63) Write a script to display the maximum number in given three numbers using operators
var a = 10;
var b = 20;
var c = 15;
var max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
console.log(`The maximum of ${a}, ${b}, and ${c} is ${max}.`);


q64) Write a script to display the given two strings in ascending order using operators
var a = "Edupoly";
var b = "Training";
a > b ? console.log(a,b) : console.log(b,a);
