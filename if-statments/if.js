// if statments = if a condition is this then do this else do this!
//******** for the website exercise! **************


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function () {

    age = myText.value;
    age = Number(age);

    if (age >= 100) {
        // console.log("Yeah dude you are too old");
        resultElement.textContent = `Yeah dude you are too old to be driving!`;
    
    }
    else if(age === 0) {
        resultElement.textContent = `You can't enter. You were just born.`;
    }
    
    else if( age >= 18) {
        resultElement.textContent = `Yeah, Good to go!`;
    }
    
    else{
        resultElement.textContent = `Go away kid. You must be 18+ to to get a license`;
    }

}





