//Introduction
window.alert("Welcome to the mystical land of Altara! One realm, six kings, adventure and danger over every hill.You have come from lands unkown to seek glory and riches from King Aric Sunborn of Dawncrest. He has tasked you with three challenging quests. Should you prove capable and strong, your name will go down through the annals of history. Are you prepared?");

var userName = prompt("What is your name, adventurer?");

//The player object's stats
var player = function player() {
    strength = 2,
    magic = 2,
    speed = 2,
    health = 5,
    weapon = "dagger"
};

//Player class determines changes in stats
var playerClass = window.prompt("Well, " + userName + ", this world can be a dangerous place. What skillset do you have to face the challenges ahead? (Choose from Warrior, Wizard, or Rogue.)").toUpperCase;

if (playerClass === "Warrior") {
    player.strength = 5,
    console.log("The Warrior's strength is 5.")
} else if (playerClass === "Wizard"){
    player.magic = 5,
    console.log("The Wizard's magic is 5.")
} else if (playerClass === "Rogue"){
    player.speed = 5,
    console.log("The Rogue's speed is 5.")
};




