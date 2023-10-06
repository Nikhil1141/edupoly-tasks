// LEVEL - 1

// q1) For the Given array: [23,34,54,0,4,7] print all the Array values using a for loop. Expected output: 23 34 54 0 4 7
// var array = [23,34,54,0,4,7];
// for(var  i = 0; i<=array.length-1; i++){
//     console.log(array[i]);
// }


// q2) print all numbers in an array except the first element. Expected output: 34 54 0 4 7
// var array = [23,34,54,0,4,7];
// for(var  i = 1; i<=array.length-1; i++){
//     console.log(array[i]);
// }


// q3) Print all elements in an array except the last element Expected output: 23 34 54 0 4
// var array = [23,34,54,0,4,7];
// for(var  i = 0; i<=array.length-2; i++){
//     console.log(array[i]);
// }


// q4) Print all the numbers from last index to first index Expected output: 7 4 0 54 34 23
// var array = [23,34,54,0,4,7];
// for(var  i = array.length-1; i>=0; i--){
//     console.log(array[i]);
// }


// q5) Print all the numbers from last index to first index except the first element Expected output: 4 0 54 34 23
// var array = [23,34,54,0,4,7];
// for(var  i = array.length-2; i>=0; i--){
//     console.log(array[i]);
// }


// q6) Print all the numbers from last index to first index except the last element Expected output: 7 4 0 54 34
// var array = [23,34,54,0,4,7];
// for(var  i = array.length-1; i>=1; i--){
//     console.log(array[i]);
// }


// q7) Print only the last 4 elements of an array. Expected output: 54 0 4 7
// var array = [23,34,54,0,4,7];
// for(var  i = 2; i<=array.length-1; i++){
//     console.log(array[i]);
// }

// var array = [23,34,54,0,4,7,4,2,4,2,23,43,2143,2342,121,2];
// for(var  i = array.length-4; i<=array.length-1; i++){
//         console.log(array[i]);
// }


// q8) For the Given array: [23,34,54,10,4,7] print values that are greater than the given number. Given number: 20, Expected output: 23,34,54
// var array = [23,34,54,10,4,7];
// var a = prompt("number: ");
// for (var i = 0;i<=array.length-1; i++){
//     if (a<array[i]){
//         console.log(array[i])
//     }
// }


// q9) For the Given array: [23,34,54,10,4,7] print all the even numbers in an Array. Expected output: 34,54,10,4
// var array = [23,34,54,10,4,7];
// for (var i=0; i<=array.length-1; i++){
//     if(array[i]%2===0){
//         console.log(array[i]);
//     }
// }


// q10) For the Given array: [23,34,54,10,4,7] print all the odd numbers in an Array. Expected output: 23,7
// var array = [23,34,54,10,4,7];
// for (var i=0; i<=array.length-1; i++){
//     if(array[i]%2===1){
//         console.log(array[i]);
//     }
// }


// q11) For the Given array: [23,-34,-54,10,-4,7] print all the positive numbers in an array. Expected output: 23,10,7
// var array = [23,-34,-54,10,-4,7];
// for (var i=0; i<=array.length-1; i++){
//     if(array[i]>0){
//         console.log(array[i]);
//     }
// }

// var array = [23,-34,-54,10,-4,7];
// var i=0;
// while (i<=array.length-1){
//     if(array[i]>0){
//         console.log(array[i]);
//     }
//     i++;
// }


// q12) Print only the 2 digit numbers from an array
// var array = [21,2,43,612,7,65,4,23,123];
// for (var i=0;i<=array.length-1; i++){
//     if(array[i]>9 && array[i]<100){
//         console.log(array[i])
//     }
// }

// var array = [21,2,43,612,7,65,4,23,123];
// var i=0;
// while (i<=array.length-1){
//     if(array[i]>9 && array[i]<100){
//         console.log(array[i])
//     }
//     i++;
// }


// q13) Print only multiples of 5 from an array
// var array = [12,13,15,17,20,5,2,55];
// for (var i=0; i<=array.length-1;i++){
//     if(array[i]%5===0){
//         console.log(array[i])
//     }
// }

// var array = [12,13,15,17,20,5,2,55];
// var i=0;
// while (i<=array.length-1){
//     if(array[i]%5===0){
//         console.log(array[i])
//     }
//     i++;
// }


// q14) Print only multiples of 2 AND 3 from an array
// var array = [12,13,15,17,20,5,2,6];
// for (var i=0; i<=array.length-1;i++){
//     if(array[i]%2===0 && array[i]%3===0){
//         console.log(array[i])
//     }
// }

// var array = [12,13,15,17,20,5,2,6];
// var i=0;
// while (i<=array.length-1){
//     if(array[i]%2===0 && array[i]%3===0){
//         console.log(array[i])
//     }
//     i++;
// }


// q15) Print only multiples of 3 OR 5 from an array
// var array = [12,13,15,17,20,5,2,6];
// for (var i=0; i<=array.length-1;i++){
//     if(array[i]%3===0 || array[i]%5===0){
//         console.log(array[i])
//     }
// }

// var array = [12,13,15,17,20,5,2,6];
// var i=0;
// while (i<=array.length-1){
//     if(array[i]%3===0 || array[i]%5===0){
//         console.log(array[i])
//     }
//     i++;
// }


// LEVEL - 2


// q16) For the Given array: [23,34,54,10,4,7] print the minimum number in an Array. Expected output: 4
// var array = [23,34,54,10,4,7];
// var min = Infinity;
// for(var i=0; i<=array.length-1; i++){
//     if(array[i]<min){
//         min = array[i];
//     }
// }
// console.log(min)

// var array = [23,34,54,10,4,7];
// var min = Infinity;
// var i=0;
// while(i<=array.length-1){
//     if(array[i]<min){
//         min = array[i];
//     }
//     i++;
// }
// console.log(min)


// q17) For the Given array: [23,34,54,10,4,7] print the Maximum number in an array. Expected output: 54
// var array = [23,34,54,10,4,7];
// var max = -Infinity;
// for(var i=0; i<=array.length-1; i++){
//     if(array[i]>max){
//         max = array[i];
//     }
// }
// console.log(max)

// var array = [23,34,54,10,4,7];
// var max = -Infinity;
// var i=0;
// while(i<=array.length-1){
//     if(array[i]>max){
//         max = array[i];
//     }
//     i++;
// }
// console.log(max)


// q18) For the Given array: [23,34,54,10,4,7] sum of all the numbers in an Array. Expected output: 132
// var array = [23,34,54,10,4,7];
// var sum = 0;
// for(var i=0;i<=array.length-1;i++){
//     sum += array[i];
// }
// console.log(sum)

// var array = [23,34,54,10,4,7];
// var sum = 0;
// var i=0;
// while(i<=array.length-1){
//     sum += array[i];
//     i++;
// }
// console.log(sum)


// q19) For the Given array: [23,34,54,10,4,7] Average of all the numbers in an Array. Expected output: 22
// var array = [23,34,54,10,4,7];
// var digit;
// sum = 0;
// for(var i=0;i<=array.length-1;i++){
//     sum += array[i];
// }
// digit = (sum/array.length);
// console.log(digit)

// var array = [23,34,54,10,4,7];
// var digit;
// sum = 0;
// var i=0;
// while(i<=array.length-1){
//     sum += array[i];
//     i++;
// }
// digit = (sum/array.length);
// console.log(digit)


// q20) For the Given array: [23,34,54,10,4,7] search if the given number is there in an array or not. Given number: 34, Expected output: true Given number: 26, Expected output: false
// var array = [23,34,54,10,4,7];
// var given = +prompt("enter the number: ");
// 
// for (var i=0;i<=array.length-1;i++){
//     if(given===array[i]){
//         var emp = given;
//     }
// }
// if(emp){
//     console.log("true")
// }
// else{
//     console.log("false")
// }

// var array = [23,34,54,10,4,7];
// var given = +prompt("enter the number: ");
// var temp = given;
// var i=0;
// while (i<=array.length-1){
//     if(temp===array[i]){
//         var emp = temp;
//     }
//     i++;
// }
// if(emp){
//     console.log("true")
// }
// else{
//     console.log("false")
// }


// q21) For the Given array: [23,34,54,10,34,7,23,10,34] print the total number of times an element found in the array. Given number: 23, Expected output: 2 Given number: 34, Expected output: 3 Given number: 10, Expected output: 2 Given number: 54, Expected output: 1
// var array = [23,34,54,10,34,7,23,10,34];
// var number = +prompt("enter number: ");
// var count=0;
// for (var i=0;i<=array.length-1;i++){
//     if(number===array[i]){
//         count++;
//     }
// }
// console.log(count)

// var array = [23,34,54,10,34,7,23,10,34];
// var number = +prompt("enter number: ");
// var count=0;
// var i=0;
// while (i<=array.length-1){
//     if(number===array[i]){
//         count++;
//     }
//     i++;
// }
// console.log(count)


// q22) For the Given array: [23,34,54,10,4,7] print index of a given element in an Array. Given number: 23, Expected output: 0 Given number: 34, Expected output: 1 Given number: 10, Expected output: 3 Given number: 54, Expected output: 2
// var array = [23,34,54,10,4,7];
// var a = +prompt("enter number");
// var index;
// for (var i=0;i<=array.length-1;i++){
//     if(a===array[i]){
//         index = i;
//     }
// }
// console.log(index)

// var array = [23,34,54,10,4,7];
// var a = +prompt("enter number");
// var index;
// var i=0;
// while (i<=array.length-1){
//     if(a===array[i]){
//         index = i;
//     }
//     i++;
// }
// console.log(index)


// q23) a program to store an array into another array var ar = [23,34,54,10,4,7] var br = [ ] Expected output: br = [23,34,54,10,4,7]
// var ar = [23,34,54,10,4,7];
// var br = [];
// for (var i=0;i<ar.length;i++){
//     br[i]=ar[i];
// }
// console.log(br);

// var ar = [23,34,54,10,4,7];
// var br = [];
// var i=0;
// while (i<ar.length){
//     br[i]=ar[i];
//     i++;
// }
// console.log(br);


// q24) Sort an array in ascending order. Given array: [23,34,54,10,4,7] Expected output: 4,7,10,23,34,54


// q25) Store only even numbers of a given array in another array.
// var ar = [23,34,54,10,4,7];
// var br = [];
// for (var i=0;i<ar.length;i++){
//     if(ar[i]%2===0){
//         br[br.length]=ar[i];
//     }
// }
// console.log(br);

// var ar = [23,34,54,10,4,7];
// var br = [];
// var i = 0;
// while (i<ar.length){
//     if(ar[i]%2===0){
//         br[br.length]=ar[i];
//     }
//     i++
// }
// console.log(br);


// q26) print only the perfect squares in an array
// var perfect = [];
// for (var i=0;i<=50;i++){
//     if(Math.sqrt(i)%1===0){
//         perfect[perfect.length]=i;
//     }
// }
// console.log(perfect);

// var perfect = [];
// var i=0;
// while (i<=50){
//     if(Math.sqrt(i)%1===0){
//         perfect[perfect.length]=i;
//     }
//     i++;
// }
// console.log(perfect);

// var perfect = [];
// for (var i = 0; i <= 50; i++) {
//   var isPerfectSquare = false;
//   for (var j = 1; j * j <= i; j++) {
//     if (j * j === i) {
//       isPerfectSquare = true;
//     }
//   }
//   if (isPerfectSquare) {
//     perfect[perfect.length] = i;
//   }
// }
// console.log(perfect);


// check if the given number is perfect square or not?
// var a = +prompt("enter number: ");
// var isPerfectSquare = false;
// for (var i = 1; i * i <= a; i++) {
//         if (i * i === a) {
//                 isPerfectSquare = true;
//         }
// }
// if (isPerfectSquare) {
//         console.log("true");
// }
// else {
//         console.log("false");
// }


// var a = [23, 49, 34, 54, 10, 4, 7, 25];
// for (var i = 0; i < a.length; i++) {
//   var number = a[i];
//   var isSquare = false;
//   for (var j = 1; j * j <= number; j++) {
//     if (j * j === number) {
//       isSquare = true;
//     }
//   }
//   if (isSquare) {
//     console.log(number);
//   }
// }
