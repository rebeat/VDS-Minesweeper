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

*/

// Set some vars to work with
var blockarray = [];
var bombcounter = 0;
var noBomb = 25;

// Check if played before - Set the LS if not --> +1 if played before
if (localStorage.played) {
	localStorage.played ++;
} else {
	localStorage.played = 0;
}

// Check if died before - Set the LS if not set before
if (localStorage.died) {

} else {
	localStorage.died = 0;
}

// Check if won before - Set the LS if not set before
if (localStorage.won) {

} else {
	localStorage.won = 0;
}

// Calculate Percentage won --> make round number
var percwon = Math.round(localStorage.won / localStorage.played * 100);

// Write statistic amounts to HTML
document.getElementById("played").innerHTML = localStorage.played;
document.getElementById("died").innerHTML = localStorage.died;
document.getElementById("won").innerHTML = localStorage.won;
document.getElementById("percwon").innerHTML = percwon + " %";

//Randomize bombs with a loop
for (i=0; i < 25; i++) {
	// Use random number to define bomb true/false
	bomb = Math.random() 
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
	// Push the randomized blocks into the blockarray
	blockarray.push(block = [i+1, bomb]);
}

// Get total number of clean blocks - Used to check for win
noBomb = noBomb - bombcounter;

// Show all bombs when died (Called in function Check) - Work-in-Progress - Not working, yet
var bombshow = function(id) {
	for (i=0; i<25; i++){
		chkBlock = blockarray[i-1];
		blockid = chkBlock[0];
		bombstatus = chkBlock[1];
		if (bombstatus) {
			block.className += " " + "aBomb";
		}
	}
}

// Show numbers for surrounding bombs (L, R, T, D, not diagonal)
var numberCheck = function (id) {
	var areacount = 0;
	switch (id) {
		case 1:
			// Block to Right
			chkBlock = blockarray[id-1+1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Below
			chkBlock = blockarray[id-1+5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		case 2:
			// Block to Left
			chkBlock = blockarray[id-1-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block to Right
			chkBlock = blockarray[id-1+1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Below
			chkBlock = blockarray[id-1+5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		case 3:
			// Block to Left
			chkBlock = blockarray[id-1-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block to Right
			chkBlock = blockarray[id-1+1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Below
			chkBlock = blockarray[id-1+5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		case 4:
			// Block to Left
			chkBlock = blockarray[id-1-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block to Right
			chkBlock = blockarray[id-1+1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Below
			chkBlock = blockarray[id-1+5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		case 5:
			// Block to Left
			chkBlock = blockarray[id-1-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Below
			chkBlock = blockarray[id-1+5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		case 6:
			// Block to Right
			chkBlock = blockarray[id-1+1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Below
			chkBlock = blockarray[id-1+5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Above
			chkBlock = blockarray[id-1-5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		case 10:
			// Block to Left
			chkBlock = blockarray[id-1-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Below
			chkBlock = blockarray[id-1+5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Above
			chkBlock = blockarray[id-1-5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		case 15:
			// Block to Left
			chkBlock = blockarray[id-1-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Below
			chkBlock = blockarray[id-1+5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Above
			chkBlock = blockarray[id-1-5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		case 20:
			// Block to Left
			chkBlock = blockarray[id-1-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Below
			chkBlock = blockarray[id-1+5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Above
			chkBlock = blockarray[id-1-5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		case 21:
			// Block to Right
			chkBlock = blockarray[id-1+1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Above
			chkBlock = blockarray[id-1-5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		case 22:
			// Block to Left
			chkBlock = blockarray[id-1-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block to Right
			chkBlock = blockarray[id-1+1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Above
			chkBlock = blockarray[id-1-5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		case 23:
			// Block to Left
			chkBlock = blockarray[id-1-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block to Right
			chkBlock = blockarray[id-1+1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Above
			chkBlock = blockarray[id-1-5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		case 24:
			// Block to Left
			chkBlock = blockarray[id-1-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block to Right
			chkBlock = blockarray[id-1+1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Above
			chkBlock = blockarray[id-1-5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		case 25:
			// Block to Left
			chkBlock = blockarray[id-1-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Above
			chkBlock = blockarray[id-1-5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
		default:
			// Block to Left
			chkBlock = blockarray[id-1-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block to Right
			chkBlock = blockarray[id-1+1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Below
			chkBlock = blockarray[id-1+5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Block Above
			chkBlock = blockarray[id-1-5]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			if (bombstatus) {
				areacount ++;
				console.log("area = " + areacount);
			}
			// Original Block
			chkBlock = blockarray[id-1]
			blockid = chkBlock[0]
			bombstatus = chkBlock[1]
			var blockid = "bl_" + blockid;
			document.getElementById(blockid).innerHTML = "<p>" + areacount + "</p>";
			break;
	}
}

// Check function --> Called on-click --> Pushes block ID
var check = function (id) {
	numberCheck(id);
	// Get true/false status
	chkBlock = blockarray[id-1]
	blockid = chkBlock[0]
	bombstatus = chkBlock[1]
	// Get the ID of the block to add a class later on
	var blockid = "bl_" + blockid;
	var block = document.getElementById(blockid)
	if (bombstatus) {
		// BOMB! You have died --> Restart
		block.className += " " + "aBomb";
		localStorage.died ++;
		alert("Darn, you died. (Again?)");
		location.reload();
	} else {
		// Take care of the item being clicked (remove onclick) + styled as no bomb
		block.className += " " + "noBomb";
		block.onclick = null;
		// Subtract one clean field for WIN-situation
		noBomb--;
		console.log("Lucky!");
		console.log("No Bomb = " + noBomb);
	}

	// Check if you've won the game!
	if (noBomb === 0) {
		localStorage.won ++;
		alert("Winner!");
		location.reload();
	}
}

// Debug
console.log("COUNT = " + bombcounter)