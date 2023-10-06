// LEVEL-1


// q1) For the Given array: [23,34,54,0,4,7] print all the Array values. Expected output: 23 34 54 0 4 7
// var ar = [23,34,54,0,4,7];
// var x = ar.map(function(a){
//     return a;
// })
// console.log(x)


// q2) print all numbers in an array except the first element. Expected output: 34 54 0 4 7
// var ar = [23,34,54,0,4,7];
// var x = ar.slice(1).map(function(a){
//     return a;
// })
// console.log(x)

// var ar = [23,34,54,0,4,7];
// ar.slice(1).map(function(a){
// console.log(a);
//     return a;
// })

// var ar = [23,34,54,0,4,7];
// var x = ar.slice(1).filter(function(a){
//     return true;
// })
// console.log(x)


// q3) Print all elements in an array except the last element Expected output: 23 34 54 0 4
// var ar = [23,34,54,0,4,7];
// var x = ar.slice(0,-1).map(function(a){
//     return a;
// })
// console.log(x)

// var ar = [23,34,54,0,4,7];
// var x = ar.slice(0,-1).filter(function(a){
//     return true;
// })
// console.log(x)


// q4) Print all the numbers from last index to first index Expected output: 7 4 0 54 34 23
// var ar = [23,34,54,0,4,7];
// var x = ar.reverse().map(function(a){
//     return a;
// })
// console.log(x)


// q5) Print all the numbers from last index to first index except the first element Expected output: 4 0 54 34 23
// var ar = [23,34,54,0,4,7];
// var x = ar.reverse().slice(1).map(function(a){
//     return a;
// })
// console.log(x)


// q6) Print all the numbers from last index to first index except the last element Expected output: 7 4 0 54 34
// var ar = [23,34,54,0,4,7];
// var x = ar.reverse().slice(0,-1).map(function(a){
//     return a;
// })
// console.log(x)


// q7) Print only the last 4 elements of an array. Expected output: 54 0 4 7
// var ar = [23,34,54,0,4,7];
// var x = ar.slice(-4).map(function(a){
//     return a;
// })
// console.log(x)


// q8) For the Given array: [23,34,54,10,4,7] print values that are greater than the given number. Given number: 20, Expected output: 23,34,54
// var ar = [23,34,54,10,4,7];
// var br = +prompt("enter value:");
// ar.map(function(a,b){
//     if(br<a){
//         console.log(a)
//     }
// })


// q9) For the Given array: [23,34,54,10,4,7] print all the even numbers in an Array. Expected output: 34,54,10,4
// var ar = [23,34,54,10,4,7];
// var br = ar.filter(function(a){
//     if(a%2===0){
//         return true;
//     }
// })
// console.log(br)


// q10) For the Given array: [23,34,54,10,4,7] print all the odd numbers in an Array. Expected output: 23,7
// var ar = [23,34,54,10,4,7];
// var br = ar.filter(function(a){
//     if(a%2!==0){
//         console.log(a)
//         return true;
//     }
// })
// console.log(br)


// q12) For the Given array: [23,-34,-54,10,-4,7] print all the positive numbers in an array. Expected output: 23,10,7
// var ar = [23,-34,-54,10,-4,7];
// var br = ar.filter(function(a){
//     if(a>0){
//         return true;
//     }
// })
// console.log(br)


// q13) Print only the 2 digit numbers from an array
// var ar = [23,34,1,54,213,10,4,7,129];
// var br = ar.filter(function(a){
//     if(a>9 && a<100){
//         return true;
//     }
// })
// console.log(br)


// q14) Print only multiples of 5 from an array
// var ar = [20,35,1,54,210,10,4,7,129];
// var br = ar.filter(function(a){
//     if(a%5===0){
//         return true;
//     }
// })
// console.log(br)


// q15) Print only multiples of 2 AND 3 from an array
// var ar = [20,35,1,54,210,10,4,7,129];
// var br = ar.filter(function(a){
//     if(a%2===0 && a%3===0){
//         return true;
//     }
// })
// console.log(br)


// q16) Print only multiples of 3 OR 5 from an array
// var ar = [20,35,1,54,210,10,4,7,129];
// var br = ar.filter(function(a){
//     if(a%3===0 || a%5===0){
//         return true;
//     }
// })
// console.log(br)


// LEVEL-2


// q17) For the Given array: [23,34,54,10,4,7] print the minimum number in an Array. Expected output: 4
// var ar = [23,34,54,10,4,7];
// var x = ar.reduce(function(a,b){
//     var c = Math.min(a,b);
//     return c;
// },ar[0])
// console.log(x)


// q18) For the Given array: [23,34,54,10,4,7] print the Maximum number in an array. Expected output: 54
// var ar = [23,34,54,10,4,7];
// var x = ar.reduce(function(a,b){
//     var c = Math.max(a,b);
//     return c;
// },ar[0])
// console.log(x)

