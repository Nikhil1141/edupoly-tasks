window.onload = initializer;
// create a global counting variable
var theCount = 0;
/** Registers onclick event */
function initializer() {
    document.getElementById("incrementButton").onclick = increaseCount;
    document.getElementById("decrementButton").onclick = decreaseCount;
}
function increaseCount() {
    theCount++;
    document.getElementById("currentCount").innerHTML = theCount;
}
function decreaseCount() {
    theCount--;
    document.getElementById("currentCount").innerHTML = theCount;
}


document.getElementById("button").addEventListener('click', function(){
    document.body.innerHTML = "Hi, welcome <br> My self Nikhileswar!";
})

document.getElementById("button").addEventListener('click', () => document.body.innerHTML = "Hi, welcome <br> My self Nikhileswar!");


var para = document.getElementById('para');
var btn = document.getElementById('btn');
btn.addEventListener('click', changeFont);
function changeFont() {
    para.style.fontSize = '24px';
    para.style.backgroundColor = 'red';
    para.style.color = 'white';
    para.style.display = 'flex';
    para.style.justifyContent = 'center';
    btn.style.padding = '10px';
    btn.style.fontSize = '20px';
    btn.style.backgroundColor = 'lightgreen';
}


1
function colorit(c) {
    var x = document.getElementById("d1");
    x.style.backgroundColor = c;
}


var ar = ['kiran', 'sam', 'ramu', 'vijay'];
var i = 0;
var d1 = document.getElementById('d1');
d1.innerHTML = ar[i];
function nextitem() {
    if (i < ar.length-1) {
        i++;
        d1.innerHTML = ar[i];
    } else {
        i=0;
        d1.innerHTML = ar[i];
    }
}
function previousitem() {
    if (i > 0) {
        i--;
        d1.innerHTML = ar[i];
    } else {
        i=ar.length-1;
        d1.innerHTML = ar[i];
    }
}


var btn = document.getElementById('btn');
var para = document.getElementById('para');
para.style.display = "none";
function toggle() {
    if (para.style.display === 'none') {
        para.style.display = "block";
        btn.innerHTML = "hide";
    }
    else {
        para.style.display = "none";
        btn.innerHTML = "show";
    }
}


3
var ar = ['red', 'lightgreen', 'brown', 'lightblue', 'yellow'];
var colorBox = document.getElementById('d1');
function changeColor() {
    var randomIndex = Math.floor(Math.random() * ar.length);
    var newColor = ar[randomIndex];
    colorBox.style.backgroundColor = newColor;
}


6
var btn = document.getElementById('btn');
btn.addEventListener('click', changeFont);
function changeFont() {
    if(btn.innerHTML === "on"){
        btn.innerHTML = "off"
    }
    else{
        btn.style.display="block";
        btn.innerHTML = "on"
    }
}


7
var para = document.getElementById('para');
var btn = document.getElementById('btn')
btn.addEventListener('click', truefalse);
function truefalse(){
    if(para.innerHTML === "I am nothing"){
        para.innerHTML = "True";
    }
    else if(para.innerHTML === "True"){
        para.innerHTML = "False"
    }
    else{
        para.innerHTML = "True"
    }
}


8
var btn2 = document.getElementById('btn2')
var like = document.getElementById('like')
var dislike = document.getElementById('dislike')
btn1.addEventListener('click', likee);
btn2.addEventListener('click', dislikee);
var likes=0;
var dislikes=0;
function likee(){
    likes++;
    like.innerHTML = likes;
}
function dislikee(){
    dislikes++;
    dislike.innerHTML = dislikes;
}


9
var para = document.getElementById('para');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
btn1.addEventListener('click', onn);
btn2.addEventListener('click', off);
function onn(){
    para.style.backgroundColor = "yellow";
    if(para.style.backgroundColor === "yellow"){
        btn1.style.backgroundColor = "red";
    }
    else{
        btn1.style.backgroundColor = "white";
    }
}
function off(){
    para.style.backgroundColor = "white";
    if(para.style.backgroundColor === "white"){
        btn2.style.backgroundColor = "red";
    }
    else{
        btn2.style.backgroundColor = "white";
    }
}


10
var para = document.getElementById('para');
var btn = document.getElementById('btn');
btn.addEventListener('click', toogle);
var ar = ['yellow', 'white'];
var i = 0;
para.style.backgroundColor = ar[i];
function toogle(){
    if(para.style.backgroundColor === ar[i]){
        i=0;
        para.style.backgroundColor = ar[i];
        i=1;
    }
    else{
        para.style.backgroundColor = ar[i];
    }

    // i=(i+1)% ar.length;
    // para.style.backgroundColor = ar[i];
}


11
var imgs = document.getElementById('imgs');
var btn = document.getElementById('btn');
btn.addEventListener('click', toogle);
var img1 = document.createElement('img');
var img2 = document.createElement('img');
img1.src = "https://static.vecteezy.com/system/resources/previews/000/554/759/non_2x/lightbulb-vector-icon.jpg";
var imgg1 = img1.src;
img2.src = "https://as2.ftcdn.net/v2/jpg/00/77/99/99/1000_F_77999958_tZYT7xWlSJewLgsMYY3CrAWvYITlWYTF.jpg";
var imgg2 = img2.src;
img1.style.width = "200px";
img1.style.height = "300px";
imgs.src = imgg1;
btn.innerHTML = "OFF";
function toogle() {
    if (imgs.src === imgg1) {
        imgs.src = imgg2;
        btn.innerHTML = "ON";
    }
    else {
        imgs.src = imgg1;
        btn.innerHTML = "OFF";
    }
}


12
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var imgs = document.getElementById('imgs');
// img1.addEventListener('mouseover', imgg1);
// img2.addEventListener('mouseover', imgg2);
// img3.addEventListener('mouseover', imgg3);
function imgg1(ev) {
    imgs.src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
}
function imgg2(av) {
    imgs.src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0="
}
function imgg3(bv) {
    imgs.src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
}


14
var input = document.getElementById('input');
var btn = document.getElementById('btn');
var imggg = document.getElementById('imggg')
btn.addEventListener('click', submitt);
var ar = [];
function submitt() {
    var inputimg = input.value;
    ar.push(inputimg);
    imggg.innerHTML = '';
    ar.forEach(a => {
        var img = document.createElement('img');
        img.style.width = '200px';
        img.style.height = '200px';
        img.style.margin = '10px'
        img.src = a;
        imggg.appendChild(img);
        input.value = '';
    })
}


15
var todo = document.getElementById('text');
var btn = document.getElementById('btn');
var ul = document.getElementById('ul');
// btn.addEventListener('click', submitt);
var ar = [];
function submitt() {
    var todotext = todo.value;
    ar.push(todotext);
    ul.innerHTML = '';
    ar.forEach(a => {
        var li = document.createElement('li');
        li.innerHTML = a;
        ul.appendChild(li);
        todo.value = '';
    })
}


16
var ar = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=', 'https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg', 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200'];
var imgBox = document.getElementById('d1');
function changeimg() {
    var randomIndex = Math.floor(Math.random() * ar.length);
    var newImg = ar[randomIndex];
    imgBox.src = newImg;
}


17
var img = document.getElementById('img');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var ar = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=', 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=']
var i = 0;
img.src = ar[i];
btn1.addEventListener('click', () =>{
    if(i<ar.length-1){
        i++;
        img.src = ar[i];
    }
    else{
        i=0;
        img.src = ar[i];
    }
})
btn2.addEventListener('click', () =>{
    if(i>0){
        i--;
        img.src = ar[i];
    }
    else{
        i=ar.length-1;
        img.src = ar[i];
    }
})


19
var namee = document.getElementById('name');
var phnum = document.getElementById('phnum');
var email = document.getElementById('email');
var img = document.getElementById('img');
var btn = document.getElementById('btn');
// btn.disabled = true;
var contactcard = document.getElementById('contactcard');
var ar = [];
btn.addEventListener('click', () => {
    var br = {
        namee: "",
        phnum: "",
        email: "",
        img: ""
    };
    var nameee = namee.value;
    var phnumm = phnum.value;
    var emaill = email.value;
    var imgg = img.value;
    br.namee = nameee;
    br.phnum = phnumm;
    br.email = emaill;
    br.img = imgg;
    ar.push(br);
    contactcard.innerHTML = '';
    var div = document.createElement('div')
    ar.forEach(a => {
        contactcard.style.height = 'auto';
        contactcard.style.width = '300px';
        contactcard.style.backgroundColor = 'yellow';
        contactcard.style.border = '2px solid red';
        contactcard.style.borderRadius = '5px';
        contactcard.style.color = 'red';
        contactcard.style.marginTop = '100px';
        contactcard.style.margin = '5px';
        var newimg = document.createElement('img');
        newimg.style.height = '20px';
        newimg.style.width = '20px';
        newimg.style.borderRadius = '50%';
        newimg.style.border = '2px solid red';
        btn.disabled = false;
        var newinput1 = document.createElement('p');
        var newinput2 = document.createElement('p');
        var newinput3 = document.createElement('p');
        newinput1.innerHTML = `Name: ${a.namee}`;
        newinput2.innerHTML = `Number: ${a.phnum}`;
        newinput3.innerHTML = `Email: ${a.email}`;
        newimg = a.img;
        contactcard.src = newimg;
        contactcard.appendChild(newinput1);
        contactcard.appendChild(newinput2);
        contactcard.appendChild(newinput3);
        div.appendChild(contactcard)
        namee.value = '';
        phnum.value = '';
        email.value = '';
        img.value = '';
    })
})


23
var input = document.getElementById('input');
var btn = document.getElementById('btn');
input.disabled = true;
function toggle(){
        if(input.disabled){
            input.disabled = false;
            btn.innerHTML = "disable the text button";
        }
        else{
            input.disabled = true;
            btn.innerHTML = "enable the text button";
        }
}


24
function checkun() {
    var un = document.getElementById("i1").value;
    if (un.length === 0) {
        document.getElementById("msg").innerText = "**The above field is mandatory";
    }
    else {
        document.getElementById("msg").innerText = "";
    }
}
