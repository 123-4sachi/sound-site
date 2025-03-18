// random number math

// let randomNum = Math.floor(Math.random()*100) + 1;

// console.log(randomNum);


const myBtn = document.getElementById("myBTN");
const myLabel = document.getElementById("myLabel");

const min = 1;
const max = 100;

myBtn.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}