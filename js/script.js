/*

Programmeren
CMD @ HvA
Stef van Dijk - Magenta

*/

/* Gebruikte Bronnen:

On-Click Event: http://www.w3schools.com/js/js_htmldom_events.asp
Slice Array: http://www.w3schools.com/js/tryit.asp?filename=tryjsref_slice_array
Add Class with JS: http://stackoverflow.com/questions/927312/how-to-append-a-css-class-to-an-element-by-javascript
Reload page: http://www.w3schools.com/jsref/met_loc_reload.asp
Remove On-Click Event: http://www.webdesignerforum.co.uk/topic/44218-remove-onclick-event-with-javascript/
LocalStorage: Presentatie Stef van Dijk - Internetstandaarden
Switch: http://www.w3schools.com/js/js_switch.asp
Round: http://www.w3schools.com/jsref/jsref_round.asp
Codecademy JS tutorials: http://www.codecademy.com/en/tracks/javascript/
Append Child: http://www.w3schools.com/jsref/met_node_appendchild.asp
Append Child: http://stackoverflow.com/questions/19649778/how-to-create-div-element-dynamically-and-add-styling-using-javascript
String replace: http://www.w3schools.com/jsref/jsref_replace.asp

*/

// Set some vars to work with
var blockArray = [];
var bombcounter = 0;
var noBomb = 25;
var bomb, chkBlock, bombstatus;

// Call the start-up stuff
window.onload = function() {
	blockDraw();
	randomizer();
};

// Check if played before - Set the LS if not --> +1 if played before
if (localStorage.played) {
	localStorage.played ++;
} else {
	localStorage.played = 0;
}

// Check if died before - Set the LS if not set before
if (!localStorage.died) {
	localStorage.died = 0;
}

// Check if won before - Set the LS if not set before
if (!localStorage.won) {
	localStorage.won = 0;
}

// Calculate Percentage won --> make round number
var percwon = Math.round(localStorage.won / localStorage.played * 100);

// Write statistic amounts to HTML
document.getElementById("played").innerHTML = localStorage.played;
document.getElementById("died").innerHTML = localStorage.died;
document.getElementById("won").innerHTML = localStorage.won;
document.getElementById("percwon").innerHTML = percwon + "%";

// Randomize bombs with a loop
var randomizer = function() {
	for (var i = 0; i <= 25; i++) {
		// Use random number to define bomb true/false
		bomb = Math.random(); 
	    // Used low number to prevent cluttering at the start
		if (bomb >= 0.3) {
			bomb = false;
		} else {
			// Limit max number of bombs
			if (bombcounter <=7) {
				bomb = true;
				bombcounter++;
			} else {
				bomb = false;
			}
		}
		// Push the randomized blocks into the blockArray
		blockArray.push({
			bombId: i,
			bombStatus: bomb
		});
	}
};

// Draw the div's and connect an on-click event
var blockDraw = function() {
	blocktainer = document.getElementById("blocktainer");
	for (var i = 1; i<=25; i++) {
		buildblock = document.createElement('div');
		buildblock.className = "block";
		buildblock.id = "bl_" + i;
		buildblock.onclick = function() {	
			check(this.id);
		}
		blocktainer.appendChild(buildblock);
	}
};

// Get total number of clean blocks - Used to check for win
noBomb = noBomb - bombcounter;

// Show all bombs when died (Called in function Check)
var bombShow = function() {
	for (i=1; i<=25; i++){
		chkBlock = blockArray[i];
		blockid = chkBlock.bombId;
		bombstatus = chkBlock.bombStatus;
		if (bombstatus) {
			var blockid = "bl_" + blockid;
			var block = document.getElementById(blockid);
			block.className += " " + "aBomb";
		}
	}
};

// Show numbers for surrounding bombs (L, R, T, D, not diagonal)
var numberCheck = function(id) {
	// Var for counting surrounding bombs
	var areacount = 0;

	// Vars to know what to check
	var bLeft = false;
	var bRight = false;
	var bTop = false;
	var bBottom = false;

	// Check which sides should be checked
	if (id !== 1 && id !== 6 && id !== 11 && id !== 16 && id !== 21) {
		bLeft = true;
	}
	if (id !== 5 && id !== 10 && id !== 15 && id !== 20 && id !== 25) {
		bRight = true;
	}
	if (!(id <= 5)) {
		bTop = true;
	}
	if (!(id >= 21)) {
		bBottom = true;
	}

	// Actually check
	if (bLeft) {
		// Block to Left
			chkBlock = blockArray[id-1];
			bombstatus = chkBlock.bombStatus;
			if (bombstatus) {
				areacount ++;
			}
	}
	if(bRight){
		// Block to Right
			chkBlock = blockArray[id+1];
			bombstatus = chkBlock.bombStatus;
			if (bombstatus) {
				areacount ++;
			}
	}
	if(bTop){
		// Block Above
			chkBlock = blockArray[id-5];
			bombstatus = chkBlock.bombStatus;
			if (bombstatus) {
				areacount ++;
			}
	}
	if(bBottom){
		// Block Below
			chkBlock = blockArray[id+5];
			bombstatus = chkBlock.bombStatus;
			if (bombstatus) {
				areacount ++;
			}
	}
	// Write result to HTML/Block

	chkBlock = blockArray[id];
	blockid = chkBlock.bombId;
	var blockid = "bl_" + blockid;
	document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";

};

// Check function --> Called on-click --> Pushes block ID
var check = function (id) {
	id = parseInt(id.replace("bl_", ""));
	numberCheck(id);
	// Get true/false status
	chkBlock = blockArray[id];
	blockid = chkBlock.bombId;
	bombstatus = chkBlock.bombStatus;
	// Get the ID of the block to add a class later on
	var blockid = "bl_" + blockid;
	var block = document.getElementById(blockid);
	if (bombstatus) {
		// BOMB! You have died --> Restart
		bombShow();
		localStorage.died ++;
		alert("Darn, you died. (Again?)");
		location.reload();
	} else {
		// Take care of the item being clicked (remove onclick) + styled as no bomb
		block.className += " " + "noBomb";
		block.onclick = null;
		// Subtract one clean field for WIN-situation
		noBomb--;
	}

	// Check if you've won the game!
	if (noBomb === 0) {
		localStorage.won ++;
		alert("Winner!");
		location.reload();
	}
};