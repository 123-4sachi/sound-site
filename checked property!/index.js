/// .checked = checkingf which box we have choosen!

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subRel = document.getElementById("subRel");
const paymentRel = document.getElementById("paymentRel");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subRel.textContent = `You Have Choosen Online Payment Method`;  
    }
    else{
        subRel.textContent = `You Have Not Choosen Online Payment Method`;
    }

    if(visaBtn.checked){
        paymentRel.textContent = `You have chosen Visa To Pay`;

    }
    else if(masterCardBtn.checked) {
        paymentRel.textContent = `You have chosen MasterCard To Pay`;
    }
    else if(paypalBtn.checked) {
        paymentRel.textContent = `You have chosen PayPal To Pay`;
    }
    else{
        paymentRel.textContent =`Pick a Damn Payment Provider to Pay`;
    }
}