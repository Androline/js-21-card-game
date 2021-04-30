let playerTarget = document.getElementById("playerCard");
let computerTarget = document.getElementById("cpuCard");
let messageTarget = document.getElementById("message");
let totalTarget = document.getElementById("totalPlayer");
let totalCPUTarget = document.getElementById("totalCPU");
let sum = 0;
let cpuSum = 0;

let suits = ["♠", "♡", "♣", "♢"];
let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// function getDeck() {
let deck = new Array();

for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = {Value: values[x], Suit: suits[i]};
        deck.push(card);
    }
}
console.log(randomCard(deck));
// return deck;
// }


document.getElementById("hit").addEventListener("click", function () {
    let someCard = randomCard(deck);
    let cpuCard = randomCard(deck);
if (sum >= 21 || cpuSum >= 21){
    reset()
}
    sum=+sum+ +someCard.Value;
    cpuSum = +cpuSum+ +cpuCard.Value;

    playerTarget.innerHTML += " "+ someCard.Value+ someCard.Suit;
    totalTarget.innerHTML = sum;

    if(sum < 21) {
        setTimeout(function() {
            computerTarget.innerHTML += " "+ cpuCard.Value+ cpuCard.Suit;
            totalCPUTarget.innerHTML = cpuSum;
            if (cpuSum >21){
                messageTarget.innerHTML = "YOU WIN!";
            }
        }, 500);
    }else if(sum > 21){
        messageTarget.innerHTML = "YOU LOST!";

    }
});

document.getElementById("stand").addEventListener("click", function () {

});

function randomCard(arr) {

    return arr[Math.floor(Math.random() * arr.length)];
}
function reset(){
    sum = 0;
    cpuSum = 0;
    messageTarget.innerHTML ="PLAY AGAIN";
    playerTarget.innerHTML = "Your cards:";
    computerTarget.innerHTML= "CPUs cards:";
    totalTarget.innerHTML= "0";
    totalCPUTarget.innerHTML= "0";
}


