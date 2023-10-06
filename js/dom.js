document.getElementById('click');
function myFunction(){
    setTimeout(function(){
        document.write("welcome!");
    },500)
}

var x = document.getElementById('h1');
x.style.background = "lightgreen"
setTimeout(function () {
    x.innerHTML = "Welcome to edupoly";
}, 2000)
console.log(x)
console.dir(x)

var x = document.getElementsByClassName('a');
var y = document.getElementsByClassName('b');
console.log(x)
console.dir(x)
console.log(y)
console.dir(y)

var x = document.querySelectorAll('li');
var y = [];
x.forEach(function(li){
    y.push(li.textContent)
})
console.log(y)

var x = document.createElement("h1");
x.innerHTML = "Hello DOM World!"
document.body.appendChild(x).style.color = "red";

var a = ["Nikhil", "Siri", "Arjun", "Dhoni"];
a.forEach(function(b,i){
    setTimeout(function(){
        var x = document.createElement("li");
        x.innerHTML = b;
        var y=document.getElementById('ul');
        y.appendChild(x);
    },i*1000)
})

var a = [
    {
        Name:"Nikhil",
        Age:20,
        Gender:" male",
        Salary:100000,
        City:"Hyd"
    },
    {
        Name:"Siri",
        Age:20,
        Gender:"female",
        Salary:100000,
        City:"Hyd"
    },
    {
        Name:"arjun",
        Age:40,
        Gender:"male",
        Salary:1000000,
        City:"Hyd"
    },
    {
        Name:"msd",
        Age:45,
        Gender:"male",
        Salary:10000000,
        City:"ranchi"
    },
    {
        Name:"sreeleela",
        Age:22,
        Gender:"female",
        Salary:100000,
        City:"KA"
    }
];
a.forEach(function(b){
    var x = document.createElement("tr");
    var y = document.createElement("td");
    y.innerHTML = b.Name;
    var z = document.createElement("td");
    z.innerHTML = b.Age;
    var xx = document.createElement("td");
    xx.innerHTML = b.Gender;
    var yy = document.createElement("td");
    yy.innerHTML = b.Salary;
    var zz = document.createElement("td");
    zz.innerHTML = b.City;
    x.appendChild(y);
    x.appendChild(z);
    x.appendChild(xx);
    x.appendChild(yy);
    x.appendChild(zz);
    var p = document.getElementById('tbody');
    p.appendChild(x);
})

var students = [
    {
        name: 'jaya',
        gender: 'female',
        place: 'gachibowli',
    },
    {
        name: 'dasu',
        gender: 'male',
        place: 'kphb'
    },
    {
        name: 'swati',
        gender: 'female',
        place: 'pune'
    },
    {
        name: 'pallavi',
        gender: 'female',
        place: 'assam'
    },
    {
        name: 'kiran',
        gender: 'male',
        place: 'kondapur'
    },
    {
        name: 'thirumala',
        gender: 'male',
        place: 'madhapur'
    },
    {
        name: 'priya',
        gender: 'female',
        place: 'hitech'
    },
];

students.forEach(function (b) {
    var p = document.getElementById('ul');
    var q = document.getElementById('ull');
    var nam = document.createElement("li");
    var gen = document.createElement("li");
    var pla = document.createElement("li");
    nam.innerHTML = b.name;
    gen.innerHTML = b.gender;
    pla.innerHTML = b.place;
    p.appendChild(nam);
    q.appendChild(gen);
    q.appendChild(pla);
})

