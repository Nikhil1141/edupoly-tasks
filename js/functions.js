// q1) Write a function which can return the sum of two numbers.
// function add(a,b){
//     var c = a+b;
//     return c;
// }
// var sum = add(45,67);
// console.log(sum)


// q2) Write a function which can return the greatest of the three numbers passed in arguments.
// function compare(a, b, c) {
// if (a >= b && a >= c) {
//     return a;
// }
// else if (b >= a && b >= c) {
//     return b;
// }
// else {
//     return c;
// }
// }
// var greatest = compare(45, 67, 23);
// console.log(greatest);


// q3) Write a function which can print the given arguments in descending order.
// function sortNums(a, b, c) {
//     if(a > b && a > c){
//         if(b>c){
//             return (" " + a + " " + b + " " + c);
//         }
//         else{
//             return (" " + a + " " + c + " " + b);
//         }
//     }
//     if(b > a && b > c){
//         if(a>c){
//             return (" " + b + " " + a + " " + c);
//         }
//         else{
//             return (" " + b + " " + c + " " + a);
//         }
//     }
//     if(c > b && c > a){
//         if(a>b){
//             return (" " + c + " " + a + " " + b);
//         }
//         else{
//             return (" " + c + " " + b + " " + a);
//         }
//     }
// }
// var descending = sortNums(45, 7, 68);
// console.log(descending);


// q4) Write a function which can return the factorial of a number.
// function fact(a) {
//     if (a === 0 || a === 1) {
//         return 1;
//     }
//     var factorial = 1;
//     for (let i = 2; i <= a; i++) {
//         factorial *= i;
//     }
//     return factorial;
// }
// var factorial = fact(4);
// console.log(factorial);


// q5) Write a function which can to return the reverse of a given number.
// function rev(number) {
//     var reversed = 0;
//     while (number !== 0) {
//         var digit = number % 10;
//         reversed = reversed * 10 + digit;
//         number = Math.floor(number / 10);
//     }
//     return reversed;
// }
// var reverse = rev(14);
// console.log(reverse);


// q6) Write a function which can check a given number is prime number or not
// function isprime(a){
//     var isPrime = true;
//     if(a <= 0){
//         return ("number is less that 1");
//     }
//     else if(a > 1){
//         for(var i=2;i<a;i++){
//             if(a%i===0){
//                 isPrime=false;
//             }
//         }
//         if(isPrime){
//             return ("a prime number");
//         }
//         else{
//             return ("not a prime number");
//         }
//     }
//     else{
//         return ("1 is neither prime nor composite");
//     }
// }
// var prime = isprime();
// console.log(prime)


// q7) Write a function which can check a given number is palindrome or not
// function rev(number){
//     var temp = number;
//     var rem;
//     var sum = 0;
//     while(number>0){
//         rem = number % 10;
//         sum = sum*10 + rem;
//         number = parseInt(number/10);
//     }
//     if(temp===sum){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// var reverse = rev(111);
// console.log(reverse);


// q8) Write a function to return the number of digits in the given number
// function digits(a){
//     var count =0;
//     for (var i=0;i<=a.length-1;i++){
//         count++;
//     }
//     return count;
// }
// console.log(digits("1234"))


// q9) Write a function that prints all even numbers between 1 and 20.
// function even(a,b){
//     for(var i=a;i<=b;i++){
//         if(i%2===0){
//             var c = i;
//             // return c;
//             console.log(c)
//         }
//     }
// }
// console.log(even(1,20));


// q10) Write a function which can add two numbers
// function add(a,b){
//     return a+b;
// }
// console.log(add(1,9))


// q11) Write a function which can display the greatest of the three numbers passed in arguments.
// function compare(a, b, c) {
//     if (a >= b && a >= c) {
//         return a;
//     }
//     else if (b >= a && b >= c) {
//         return b;
//     }
//     else {
//         return c;
//     }
// }
// var greatest = compare(45, 67, 23);
// console.log(greatest);

// console.log(Math.max(45,67,23))


// q12) Write a function which can display the given arguments in descending order
// function sortNums(a, b, c) {
//     if(a > b && a > c){
//         if(b>c){
//             return (" " + a + " " + b + " " + c);
//         }
//         else{
//             return (" " + a + " " + c + " " + b);
//         }
//     }
//     if(b > a && b > c){
//         if(a>c){
//             return (" " + b + " " + a + " " + c);
//         }
//         else{
//             return (" " + b + " " + c + " " + a);
//         }
//     }
//     if(c > b && c > a){
//         if(a>b){
//             return (" " + c + " " + a + " " + b);
//         }
//         else{
//             return (" " + c + " " + b + " " + a);
//         }
//     }
// }
// var descending = sortNums(45, 7, 68);
// console.log(descending);


// q13) Write a function which can display the factorial of a number
// function fact(a) {
//     if (a === 0 || a === 1) {
//         return 1;
//     }
//     var factorial = 1;
//     for (let i = 2; i <= a; i++) {
//         factorial *= i;
//     }
//     return factorial;
// }
// var factorial = fact(4);
// console.log(factorial);


// q14) Write a function which can to display the reverse of a given number
// function rev(number) {
//     var reversed = 0;
//     while (number !== 0) {
//         var digit = number % 10;
//         reversed = reversed * 10 + digit;
//         number = Math.floor(number / 10);
//     }
//     return reversed;
// }
// console.log(rev(14));


// q15) Write a function which can check a given number is palindrome or not
// function rev(number){
//     var temp = number;
//     var rem;
//     var sum = 0;
//     while(number>0){
//         rem = number % 10;
//         sum = sum*10 + rem;
//         number = parseInt(number/10);
//     }
//     if(temp===sum){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(rev(111));


// q16) Write a function which can check a given number is prime number or not
// function isprime(a){
//     var isPrime = true;
//     if(a <= 0){
//         return ("number is less that 1");
//     }
//     else if(a > 1){
//         for(var i=2;i<a;i++){
//             if(a%i===0){
//                 isPrime=false;
//             }
//         }
//         if(isPrime){
//             return ("a prime number");
//         }
//         else{
//             return ("not a prime number");
//         }
//     }
//     else{
//         return ("1 is neither prime nor composite");
//     }
// }
// console.log(isprime(2))


// q17) Write a function which can check a given number is armstrong number or not
// function armstrong(a) {
//     var temp = a;
//     var arm = a;
//     var count = 0;
//     var digit;
//     var sum = 0;
//     while (a > 0) {
//         digit = a % 10;
//         count++;
//         a = parseInt(a / 10);
//     }
//     while (temp > 0) {
//         digit = temp % 10;
//         sum = sum + (digit ** count);
//         temp = parseInt(temp / 10);
//     }
//     if (arm === sum) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(armstrong(153))


// q18) Write a function which can return the factorial of a number to another variable



// q19) Write a function to display the number of digits in the given number
// function digits(a){
//     var count =0;
//     for (var i=0;i<=a.length-1;i++){
//         count++;
//     }
//     return count;
// }
// console.log(digits("12324"))


// q20) Write a function that returns an array of all even numbers between 1 and 20.
// function getEvenNumbers(a,b) {
//     const evenNumbers = [];
//     for (let i = a; i <= b; i++) {
//         if(i%2===0){
//             evenNumbers.push(i);
//         }
//     }
//     return evenNumbers;
// }
// const evenNumbersArray = getEvenNumbers(4,29);
// console.log(evenNumbersArray);


// q21) Cube of any number using the function.
// function cube(a){
//     return (a**3);
// }
// console.log(cube(12))


// q22) Find diameter, circumference and area of a circle using functions.
// function circle(r){
//     var pi=3.14;
//     var diameter = 2*r;
//     var circumference = 2*pi*r;
//     var area = pi*(r**2);
//     return ("diameter: " + diameter + " circumference: " + circumference + " area: " + area);
// }
// console.log(circle(3));


// q23) Maximum and minimum between two numbers using functions.
// function maxmin(a,b){
//     var x = Math.max(a,b);
//     var y = Math.min(a,b);
//     var z = x + " " + y;
//     return z;
// }
// console.log(maxmin(12,32));


// q24) Check whether a number is even or odd using functions.
// function evenorodd(a){
//     if(a%2===0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }
// console.log(evenorodd(91))


// q25) Check whether a number is prime, Armstrong or perfect number using functions.



// q26) Find all prime numbers between the given interval using functions.
// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function findPrimesInRange(a, b) {
//     var primes = [];
//     for (var number = a; number <= b; number++) {
//         if (isPrime(number)) {
//             primes.push(number);
//         }
//     }
//     return primes;
// }
// console.log(findPrimesInRange(1,20));


// q27) Print all strong numbers between the given interval using functions.



// q28) Armstrong numbers between the given interval using functions.



// q29) Print all perfect numbers between the given interval using functions.



// q30) Find the power of any number using recursion.



// q31) Print all natural numbers between 1 to n using recursion.



// q32) Print all even or odd numbers in a given range using recursion.



// q33) Sum of all natural numbers between 1 to n using recursion.



// q34) Find the sum of all even or odd numbers in a given range using recursion.



// q35) Find reverse of any number using recursion.



// q36) Check whether a number is a palindrome or not using recursion.



// q37) Find the sum of digits of a given number using recursion.



// q38) Find factorial of any number using recursion.



// q39) Generate nth Fibonacci term using recursion.



// q40) Find gcd (HCF) of two numbers using recursion.



// q41) Find lcm of two numbers using recursion.



// q42) Display all array elements using recursion.



// q43) Find the sum of elements of the array using recursion.



// q44) Find maximum and minimum elements in an array using recursion.



// q45) implement all the Array Assignments using Array Methods



// q46) implement all the Object Assignments and Array of Object Assignments



// q47) impletement string assingments using string methods