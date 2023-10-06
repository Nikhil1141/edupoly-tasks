var a:number = 232;
var b:string = '32';
var c:boolean = true;
var d:number[];
d = [32,434,34];
var e:string[];
e=['dfdf','efrwe','ewwe'];
var f:object;
f = {
    nikhil:'fgdfgd',
    nejfwjfw:'ewew',
    wfwfw:2132
};
var g:(number|string)[];
g = [322,'232',232,'ewwe'];

interface Student{
    firstname:string;
    lastname:string;
    age?:number;
}
var std:Student;
std = {
    firstname:'nikhil',
    lastname:'eswar',
    age:23
}

var h:[number,string];
h=[21,'ew'];

var i:any = [223,'323',333,'dfvdfv'];

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(std)
console.log(h)
console.log(i)