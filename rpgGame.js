//Introduction to set up the game
alert("Welcome to the mystical land of Altara! One realm, six kings, adventure and danger over every hill. You have come from lands unkown to seek glory and riches from King Aric Sunborn of Dawncrest. Should you prove capable and strong, your name will go down through the annals of history. Are you prepared?")

var userName;
var chooseClass;
var button = document.getElementById("begin");
var intro = function myFunctionHandler(){
    userName = prompt("What is your name, adventurer?")
    chooseClass = prompt("Well, " + userName + ", this world can be a dangerous place. What skillset do you have to face the challenges ahead? (Choose from Warrior, Wizard, or Rogue.)").toLowerCase

//Player class determines weapon.
switch (chooseClass) {
    case chooseClass === "warrior":
        console.log("The warrior has a sword.")
        break;
    case chooseClass === "wizard":
        console.log("The wizard has a staff.")
        break;
    case chooseClass === "rogue":
        console.log("The rogue has a bow.")
        break;
    default:
        break;
};

//The player object's stats
var player = function player() {
    attack = Math.round(Math.random()*4,
    health = 4
};

//The  quest
var response;
var questScenario = ["You have traversed the treacherous Whitesong mountains, searching for the ruins of an ancient city. Untold treasure is said to lie within, if you can find it. A noise makes you look up the jagged cliffside...", "While wandering the wide open plains, making your way to the next inn to regail others of your adventures, you suddenly find yourself ambushed!", "King Aric has tasked you with stopping a mysterious cult from summoning a terrible Demon Lord. While attempting to sneak into their sanctum, you are accosted by one of the guards."];

function randomNumber(range){
    "use strict"
    if(typeof range === "number"){
        return Math.round(Math.random()*range);
    }
};

alert(questScenario[randomNumber(questScenario.length-1)]);

var enemy = function enemy(){
    attack = 3,
    health = 3
};

var enemyName = ["Barbarian", "Black Knight", "Ninja"];

alert("You are attacked by a vicious " + enemyName[randomNumber(enemyName.length-1)] + 
".");

response = prompt("Will you attack the foe head-on? Or will you stand back and let him come to you? Or will you slip around and hit him from behind?(Choose attack, stand back, or slip behind.)");
alert("You " + response + ", ready to engage in glorious battle!");

//Fighting the enemy
function fight(){
    if (player.attack >= enemy.attack) {
    enemy.health--,
    console.log(enemy.health)
    } else if (enemy.attack > player.attack){
    player.health--,
    console.log(player.health)
};

if (player.health > 0){
    fight
} else if (player.health === 0){
    outcome = "lose"
};
if (enemy.health > 0){
    fight
} else if (enemy.health === 0){
    outcome = "win"
};

//Outcome
var outcome;
if (outcome = "lose"){
    alert("Despite your valiant effort, the foe is too much for you. Quickly, you flee the scene and escape to the nearest settlement. King Aric is disappointed with your failure, but he may give you another chance to succeed in the future.")
} else switch (outcome = "win") {
    case chooseClass === "warrior":
        alert("With a mighty swing of your sword, you triumph over your enemy and cut him down. Glorious! Now on to complete your tasks and continue your adventures!")
        break;
    case chooseClass === "wizard":
        alert("Muttering a powerful spell, you set the villain ablaze in blue fire! Haha! Now you can continue your adventure in peace.")
        break;
    case chooseClass === "rogue":
        alert("Speed and cleverness are your watchwords. In a flash you release the bowstring and the arrow sings before it strikes your foe in the chest. With that trouble over, you can get to work seeking glory and riches!")
        break;
    default: chooseClass === undefined
        alert("You win.")
        break;
    };
};
button.addEventListener("click", intro);



