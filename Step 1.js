var affinityMain = [];
// Lands
addCards("Blinkmoth Nexus", 4);
addCards("Darksteel Citadel", 4);
addCards("Inkmoth Nexus", 4);
addCards("Mountain", 1);
addCards("Spire of Industry", 4);
// Creatures
addCards("Arcbound Ravager", 4);
addCards("Etched Champion", 2);
addCards("Master of Etherium", 1);
addCards("Memnite", 2);
addCards("Ornithopter", 4);
addCards("Signal Pest", 4);
addCards("Vault Skirge", 4);
addCards("Steel Overseer", 4);
// Instants and Sorceries
addCards("Galvanic Blast", 3);
// Artifacts
addCards("Cranial Plating", 4);
addCards("Mox Opal", 4);
addCards("Springleaf Drum", 4);
addCards("Welding Jar", 1);
// Planeswalkers
addCards("Karn, Scion of Urza", 2);

var affinitySide = [
"2 Ancient Grudge",
"2 Blood Moon",
"1 Etched Champion",
"2 Ghirapur Aether Grid",
"2 Rest in Peace",
"2 Stubborn Denial",
"2 Thoughtseize",
"2 Whipflare"];

function addCards(name, quantity) {
  for (var i = 0; i < quantity; i++) {
    affinityMain.push(name);
    if (affinityMain.length > 60) {
        console.log('Warning: greater than 60 cards when adding ' + name)
    }
  }
}

function randomWholeNum() {
      return Math.floor(Math.random() * 60);
}

var rand = affinityMain[Math.floor(Math.random() * affinityMain.length)];
function openingHand() {return rand;}

function randomize(affinityMain) {
    var i = affinityMain.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = affinityMain[i];
        affinityMain[i] = affinityMain[j];
        affinityMain[j] = temp;

    }
    return affinityMain;  
}
function didIWin (hand){
    return false
;}

for (var i = 0; i < 5; i++) {
    var Shuffle = randomize(affinityMain);
    console.log ();
    var openingHand = Shuffle.slice(0,7).join(', ');
    console.log(openingHand);
    if (didIWin(openingHand)) {
        console.log("I win!");
    
    } else {
        console.log (" I lose!");
        
    }
    
}
// next steps: figure out the Iwin function and add global variable set to 0 increment I win and I lose. Instead of hardcoding 5, amke that 
// a variable win% and lose%.
