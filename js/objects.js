// LEVEL - 1

// q1) Given an object:

                            // var person = {
                            //     "firstName" : "Harry",
                            //     "lastName" : "Potter",
                            //     "age": 30,
                            //     "gender": "male",
                            //     "skill" : "ReactJS",                                
                            //     "expertise": "Beginner"
                            // };
                        
// a) Print the firstname.
// console.log(person.firstName)
// console.log(person['firstName'])


// b) Print the lastname.
// console.log(person.lastName)
// console.log(person['lastName'])


// c) Print the fullname("Harry Potter").
// var fullName = person.firstName + " " + person.lastName;
// console.log(fullName)


// d) If the age is less than 18, then print "false". If the age is more than 18, then print "true".
// if(person['age']>18){
//     console.log("true");
// }
// else{
//     console.log("false");
// }


// q2) For the given marks object solve the following
                            // var marks = {
                            //     "maths" : 34,
                            //     "english" : 56,
                            //     "science": 32,
                            //     "hindi" : 75,
                            //     "social science": 65
                            // };
                        
// a) Print the marks of all the subjects.
// console.log(marks)


// b) Print the names of all the subjects from the given object.
// for (var k in marks){
//     console.log(k)
// }


// c) Count the number of subjects from the given object.
// var count = 0;
// for (var k in marks){
//     // console.log(k);
//     count++;
// }
// console.log(count)


// d) Print the percentage of the marks of the student.
// var totalmarks = 0;
// for (var k in marks){
//     totalmarks += marks[k];
//     var percentage = (marks[k]/totalmarks)*100;
// }
// console.log("Totalmarks:" + " " + totalmarks)
// console.log("Percentage:" + " " + percentage)


// e) Print only those subjects where the student scored more than 35.
// for (var k in marks){
//     if(marks[k]>35){
//         console.log(k)
//     }
// }


// f) Print the pass/fail status of the subjects provided 35 is the pass mark.
// for (var k in marks){
//     if(marks[k]>35){
//         console.log(k+ " - " + "pass")
//     }
//     else{
//         console.log(k + " - " + "fail")
//     }
// }


// g) Print only the passed subjects.
// for (var k in marks){
//     if(marks[k]>35){
//         console.log(k + " - " + "pass")
//     }
// }


// h) Count the number of passed subjects.
// var count = 0;
// for (var k in marks){
//     if(marks[k]>35){
//         // console.log(k)
//         count++;
//     }
// }
// console.log(count)


// i) Print only the failed subjects.
// for (var k in marks){
//     if(marks[k]<35){
//         console.log(k + " - " + "fail")
//     }
// }


// j) Count the number of failed subjects.
// var count = 0;
// for (var k in marks){
//     if(marks[k]<35){
//         // console.log(k)
//         count++;
//     }
// }
// console.log(count)


// k) Print the least scored subject.
// var min = Infinity;
// for(var k in marks){
//     for(var i=0; i<=marks[k]; i++){
//         if(marks[k]<min){
//             min = marks[k];
//         }
//     }
// }
// console.log(min)


// l) Print the highest scored subject.
// var max = -Infinity;
// for(var k in marks){
//     for(var i=0; i<=marks[k]; i++){
//         if(marks[k]>max){
//             max = marks[k];
//         }
//     }
// }
// console.log(max)


// m) Check whether the student has passed in all the subjects or not.
// var count = 0;
// for (var k in marks) {
//     // console.log(marks[k])
//     if (marks[k] > 35) {
//         // console.log("pass")
//         count++;
//     }
// }
// if (count === marks[k]) {
//     console.log("passed in all subjects")
// }
// else {
//     console.log("Not passed in all subjects")
// }


// n) Take the subject name from the student through prompt box and print the subject marks and pass/fail status.
// var a = prompt("enter subject:");
// console.log(marks[a])
// if (marks[a] > 35) {
//     console.log("pass")
// }
// else {
//     console.log("fail")
// }


// LEVEL - 2


// q3) For the given array of object, solve the following
                        //     var products = [
                        //     {
                        //         "name": "Duracell - AAA Batteries (4-Pack)",
                        //         "type": "HardGood",
                        //         "price": 5.49,
                        //         "category": "Household Batteries",
                        //         "manufacturer": "Duracell",				
                        //     },
                        //     {
                        //         "name": "Hard Rock TrackPak - Mac",
                        //         "type": "Software",
                        //         "price": 29.99,
                        //         "category": "Recording Equipment",
                        //         "manufacturer": "Hal Leonard",				
                        //     },
                        //     {
                        //         "name": "Duracell - AA 1.5V CopperTop Batteries (4-Pack)",
                        //         "type": "HardGood",
                        //         "price": 5.62,
                        //         "category": "Household Batteries",
                        //         "manufacturer": "Duracell",				
                        //     },
                        //     {
                        //         "name": "Energizer - MAX Batteries AA (4-Pack)",
                        //         "type": "HardGood",
                        //         "price": 5.32,
                        //         "category": "Household Batteries",
                        //         "manufacturer": "Energizer",				
                        //     },
                        //     {
                        //         "name": "METRA - Antenna Cable Adapter - Black",
                        //         "type": "HardGood",
                        //         "price": 13.99,
                        //         "category": "Antennas & Adapters",
                        //         "manufacturer": "Metra",				
                        //     },
                        //     {
                        //         "name": "WipeDrive Six - Mac|Windows",
                        //         "type": "Software",
                        //         "price": 23.99,
                        //         "category": "Maintenance Software",
                        //         "manufacturer": "White Canyon",				
                        //     }
                        // ];
                        
// a) Print all the product names.
// for (var k in products){
//     console.log(products[k].name)
// }


// b) Print all the hardgoods.
// for (var i = 0; i < products.length; i++) {
//   if (products[i].type === "HardGood") {
//     console.log(products[i].name);
//   }
// }


// c) Print all the softwares.
// for (var i = 0; i < products.length; i++) {
//     if (products[i].type === "Software") {
//         console.log(products[i].name);
//     }
// }


// d) Print all the categories.
// for (var i = 0; i < products.length; i++) {
//     if (products[i].category) {
//       console.log(products[i].category);
//     }
//   }


// e) Print only the products manufactured by Duracell.
// for (var i = 0; i < products.length; i++) {
//     if (products[i].manufacturer === "Duracell") {
//         console.log(products[i].name);
//     }
// }


// f) Print the product names in ascending order of their prices.


// g) Print only those products whose price is more than 14.99.
// for (var i = 0; i < products.length; i++) {
//     if (products[i].price > 14.99) {
//         console.log(products[i].name);
//     }
// }


// h) Print only those products whose price is less than 9.99.
// for (var i = 0; i < products.length; i++) {
//     if (products[i].price < 9.99) {
//         console.log(products[i].name);
//     }
// }


// i) Print the total price of all the hardgoods.
// var sum=0;
// for (var i = 0; i < products.length; i++) {
//     if (products[i].price) {
//         sum+= products[i].price;
//     }
// }
// console.log(sum)


// j) Print the average price of the softwares.
// var avg;
// var totalprice = 0;
// for (var i = 0; i < products.length; i++) {
//     if (products[i].price) {
//         totalprice += products[i].price;
//         avg = totalprice/products.length;
//     }
// }
// console.log(avg)


// q4) For the given array of object, solve the following
                        //  var people = [
                        //     {
                        //     "firstname": "praveen",
                        //     "lastname": "gubbala",
                        //     "age": 36,
                        //     "gender": "male",
                        //     "city": "hyd",
                        //     "salary": 10000
                        //     },
                        //     {
                        //     "firstname": "srikanth",
                        //     "lastname": "gubbala",
                        //     "age": 32,
                        //     "gender": "male",
                        //     "city": "bengaluru",
                        //     "salary": 20000
                        //     },
                        //     {
                        //     "firstname": "pradeep",
                        //     "lastname": "reddy",
                        //     "age": 21,
                        //     "gender": "male",
                        //     "city": "hyd",
                        //     "salary": 25000
                        //     },
                        //     {
                        //     "firstname": "mounika",
                        //     "lastname": "mudiraj",
                        //     "age": 20,
                        //     "gender": "female",
                        //     "city": "nalgonda",
                        //     "salary": 30000
                        //     },
                        //     {
                        //     "firstname": "nikhil",
                        //     "lastname": "m",
                        //     "age": 22,
                        //     "gender": "male",
                        //     "city": "guntur",
                        //     "salary": 2000
                        //     },
                        //     {
                        //     "firstname": "riya",
                        //     "lastname": "bhadouria",
                        //     "age": 14,
                        //     "gender": "female",
                        //     "city": "indore",
                        //     "salary": 40000
                        //     }
                        //     ];
                     
// a) Print all the firstnames.
// for (var k in people){
//     console.log(people[k].firstname)
// }


// b) Print all the full names.
// for (var k in people){
    // var fullName = people[k].firstname + " " + people[k].lastname;
    // console.log(fullName)
// }


// c) Print only those names whose age is more than 25.
// for (var k in people){
//     if(people[k].age>25){
//         console.log(people[k].age)
//     }
// }


// d) Print all female names.
// for (var k in people){
//     var fullName = people[k].firstname + " " + people[k].lastname;
//     if(people[k].gender === "female"){
//         console.log(fullName)
//     }
// }


// e) Print only those names whose salary is more than 25000 and increase their salaries by 15%.
// for (var k in people){
//     var fullName = people[k].firstname + " " + people[k].lastname;
//     if(people[k].salary>25000){
//         console.log(fullName)
//         var increasesalary = (people[k].salary * 15)/100;
//         console.log(increasesalary)
//         var newsalary = increasesalary + people[k].salary;
//         console.log(newsalary)
//         people[k].salary = newsalary;
//         console.log(people[k].salary)
//     }
// }
// console.log(people)


// f) Using prompt, print only those names whose city is "hyd".
// var cityName = prompt("Enter a city name:");
// for (var k in people) {
//     var fullName = people[k].firstname + " " + people[k].lastname;
//     if (people[k].city === cityName) {
//         console.log(fullName)
//     }
// }


// g) Print the total salary of all the people.
// var totalsalary = 0;
// for (var k in people) {
//     if (people[k].salary) {
//         totalsalary += people[k].salary;
//     }
// }
// console.log(totalsalary)


// h) Print all the male names.
// for (var k in people){
//     var fullName = people[k].firstname + " " + people[k].lastname;
//     if(people[k].gender === "male"){
//         console.log(fullName)
//     }
// }


// i) Print all the firstnames whose salary is more than 25000.
// for(var k in people){
//     if(people[k].salary > 25000){
//         console.log(people[k].firstname)
//     }
// }


// j) Using prompt, print all names whose city is "hyd".
// var cityName = prompt("Enter a city name:");
// for (var k in people) {
//     var fullName = people[k].firstname + " " + people[k].lastname;
//     if (people[k].city === cityName) {
//         console.log(fullName)
//     }
// }


// k) Print all the fullnames in the alphabetical order.



// l) Print all the fullnames in the increasing order of their age.



// m) Print all the fullnames in the reverse alphabetical order.
// for(var k in people){
//     var fullName = people[k].firstname + " " + people[k].lastname;
//     var a = people.reverse(fullName);
//     console.log(a)
// }


// n) Print all the fullnames in the decreasing order of their salaries.



// o) Print all the cities in which the people live. There should not be any duplicate cities.



// p) Print all the male names whose age is greater than 25.
// for(var k in people){
//     var fullName = people[k].firstname + " " + people[k].lastname;
//     if(people[k].age > 25 && people[k].gender === "male"){
//         console.log(fullName)
//     }
// }

 