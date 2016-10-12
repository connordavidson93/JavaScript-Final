//Introduction to set up the game
alert("Welcome to the mystical land of Altara! One realm, six kings, adventure and danger over every hill. You have come from lands unkown to seek glory and riches from King Aric Sunborn of Dawncrest. He has tasked you with three challenging quests. Should you prove capable and strong, your name will go down through the annals of history. Are you prepared?")

var userName;
var chooseClass;
var button = document.getElementById("begin");
var intro = function myFunctionHandler(){
    userName = prompt("What is your name, adventurer?")
    chooseClass = prompt("Well, " + userName + ", this world can be a dangerous place. What skillset do you have to face the challenges ahead? (Choose from Warrior, Wizard, or Rogue.)").toLowerCase

};
button.addEventListener("click", intro);

//The player object's stats
var player = function player() {
    strength = 2,
    magic = 2,
    speed = 2,
    health = 5,
    role = playerClass
};

var fight = math.round(math.random)*3;

//Player class determines changes in stats
var playerClass = chooseClass;

if (playerClass === "warrior") {
    player.strength = 5
    console.log("The warrior's strength is 5.")
};
if (playerClass === "wizard"){
    player.magic = 5
    console.log("The wizard's magic is 5.")
};
if (playerClass === "rogue"){
    player.speed = 5
    console.log("The rogue's speed is 5.")
};

//The First Quest
var firstButton = document.getElementById("first");
var weapon;
var barbarian = function barbarian(){
    attack = 3,
    health = 2
};
var firstQuest = function firstQuestHandler(){
    alert("King Aric has your first quest - to find the Ring of Jord. It was last seen in the city Whitesong, destroyed in the great war long ago. Climbing over treacherous mountains, you finally find the ancient ruins. Who knows if the ring is still there? Or what else might reside within? Suddenly, noise makes you turn around. A massive, hulking barbarian has ambushed you!")
    weapon = prompt("You're going to have to fight him to continue. What weapon do you have to defend yourself?");
    alert("You attack the barbarian with your " + weapon + ". Time to prove your worth, " + userName + ".")
    

};
button.addEventListener("click", firstQuest);

//The Second Quest
var secondButton = document.getElementById("second");
var enemyLeader = ["King Osrin Goldcliff of Startower.", "King Markus Hammerfall of Redstone.", "King Ulric Shadowbane of Blackreach."];
var blackKnight = function blackKnight (){
    attack = 4,
    health = 4
};
var secondQuest = function secondQuestHandler(){
    alert("The king has invited you to join his family on a hunt in the Brightwood. The road to the forest is long and exposed on the open road. Though you try to remain vigilant, the little princess Lyanna scampers off. You need to find her quickly, before she gets into too much trouble.")
    alert("Before you find her, you hear a terrified shriek. You rush toward the noise to find the little girl being threatened by a rogue knight clad in ebony black armor. Surely, this must be an agent sent by King Aric's rival, ")
};
button.addEventListener("click", secondQuest);

//The Third Quest
var thirdButton = document.getElementById("third");
var demonLord = function demonLord(){
    attack = 5,
    health = 7
};
var thirdQuest = function thirdQuestHandler(){
    alert("King Aric is furious at the attempt on his family, but there is something more pressing at hand. His spies have reported that ")
};
button.addEventListener("click", thirdQuest);

var outcome;




