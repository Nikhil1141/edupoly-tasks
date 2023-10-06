q1) Find the first occurrence of a character in a given string.
var a = "Nikhileswar";
var b = a.at(0);
console.log(b)


q2) Find the last occurrence of a character in a given string.
var a = "Nikhileswar";
var b = a.at(-1);
console.log(b)



q3) Search all occurrences of a character in a given string.
var a = "Nikhileswar";
var b = a.slice();
console.log(b)


q4) Count occurrences of a character in a given string.
var a = "Nikhileswar";
var count = 0;
for(var i = 0;i<=a.length-1;i++){
    var b = a.slice();
    count++;
}
console.log(b)
console.log(count);

q8) Remove the first occurrence of a character from a string.
var a = "Nikhileswar";
var b = a.slice(1);
console.log(b)


q9) Remove the last occurrence of a character from a string.
var a = "Nikhileswar";
var b = a.pop('N');
console.log(b)


q10) Delete all occurrences of a character from a string.
var a = "Nikhileswar";
var b = a.split().slice();
console.log(b)

