Q) check whether a number is prime or not?
var givenNumber = +prompt("Enter number: ");
let isPrime = true;
if(givenNumber===1){
    console.log("neither prime nor composite!");
}
else if(givenNumber>1){
    for(var i=2;i<givenNumber;i++){
        if(givenNumber%i===0){
            isPrime=false;
        }
    }
    if(isPrime){
        console.log(givenNumber + " " + "is a prime number")
    }
    else{
        console.log(givenNumber + " " + "is a not prime number")
    }
}
else{
    console.log("given number is less than 1");
}



 Q) arr = [23,46,21,11,34,97], print prime numbers.
var givenArray = [23,46,21,1,0,11,34,97];
for(var i=0;i<=givenArray.length-1;i++){
    let isPrime = true;
    if(givenArray[i]===1){
        console.log(givenArray[i] + " " + "neither prime nor composite!");
    }
    else if(givenArray[i]>1){
        for(var j=2;j<givenArray[i];j++){
            if(givenArray[i]%j===0){
                isPrime=false;
            }
        }
        if(isPrime){
            console.log(givenArray[i] + " " + "is a prime number")
        }
        else{
            console.log(givenArray[i] + " " + "is a not prime number")
        }
    }
    else{
        console.log("given number is less than 1");
    }
}



Q) arr=[2,4,3,9,8], print sum of it's previous numbers
var arr = [2,4,3,9,8];
for(var i=0;i<=arr.length-1;i++){
    var sum = 0;
    for(var j=1; j<=arr[i]; j++){
        sum += j;
    }
    console.log(sum)
}


q) sum of 1-100
var sum = 0;
for(var i=1; i<=100;i++){
    sum += i;
}
console.log(sum)



Q) ar = [24,36,18,12,49] factors of each number
var ar = [24,36,18,12,49];
var arr;
for(var i=0;i<=ar.length-1;i++){
    for(var j=1; j<=ar[i]; j++){
        if(ar[i]%j===0){
            arr = j;
            console.log(arr)
        }
    }
}


Q) ar = [24,36,18,12,49] factors of each number and give count
var ar = [24, 36, 18, 12, 49];
var arr;
var count = 0;
for (var i = 0; i <= ar.length - 1; i++) {
    for (var j = 1; j <= ar[i]; j++) {
        if (ar[i] % j === 0) {
            arr = j;
            console.log(arr)
            count++;
        }
    }
}
console.log("count: " + count)
