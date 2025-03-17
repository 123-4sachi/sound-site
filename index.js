//variables


let name = "sachi";
let age = "20";
let incollege = false;

document.getElementById("1").textContent = `We can call ${name} right?` ;
document.getElementById("2").textContent = `And how old are you ${age}?`;
document.getElementById("3").textContent = `Are you going to college ${incollege}`;


//Arithmetic operators
let student = 30;

// student *= 69;
// student /= 9;
// student **= 7;

let extraStudent = student ** 4;

console.log(extraStudent);


//Accept user input
let username;
// username = window.prompt("what's your name NIgga?")

// console.log(username);


document.getElementById("submit"),onclick = function(){
    username = this.document.getElementById("myText").value;
    document.getElementById("H1").textContent = `Hello ${username} Nigga`
}


//type conversion

// let aage = window.prompt("what's your age?")

let aage;

document.getElementById("ageSubmit").onclick = function(){
    aage = document.getElementById("ageText").value;
    aage = Number(aage);
    let upAge = aage + 1;

    let msg = `so your age ${aage}, and you are be running for ${upAge}`;
    document.getElementById("myH3").textContent = msg;
}


