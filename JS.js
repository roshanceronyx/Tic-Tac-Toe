var selections = new Array(); 
	selections['X'] = new Array();
	selections['O'] = new Array();

function resetParams() {
	turn = 'X';
	total_turns = 0;
	finished = false;

	selections['X'] = new Array();
	selections['O'] = new Array();
}

function changeTurn(){
	if (turn == 'X') turn = 'O';
	else turn = 'X';
}

function winnerPatterns() {
	var wins = Array();

if (game_type==5) wins = [ 
    [11,12,13,14,15], [21,22,23,24,25], [31,32,33,34,35], [41,42,43,44,45], [51,52,53,54,55],
     [11,21,31,41,51], [12,22,32,42,52], [13,23,33,43,53], [14,24,34,44,54], [15,25,35,45,55],
     [11,22,33,44,55], [15,24,33,42,51]
 ];

return wins
}
function checkWinner() {
var selected = selections[turn].sort();
	var win_patterns = winnerPatterns();

	finished = false;
	for (var x=0; x < win_patterns.length; x++) {
		
		if (finished != true) { 
			finished = isWinner(win_patterns[x], selections[turn]);

			if ( finished === true );
		}
	}
}

function generateGame(){

	resetParams();

	game_type = Number(document.getElementById('game_type').value);

	document.getElementById('game-board').innerHTML = '';

	for (var row = 1; row <= game_type; row++){
		for (var col = 1; col <= game_type; col++) {

			var unique_name = 'grid-'+row+'-'+col;
			var unique_id = row+''+col;
			var button = document.createElement("input");

			button.setAttribute("value", ' ');
			button.setAttribute("id", unique_id);
			button.setAttribute("name", unique_name);
			button.setAttribute("class", 'grid-box');
			button.setAttribute("type", 'button');
			button.setAttribute("onclick", "markCheck(this)");
			document.getElementById('game-board').appendChild(button);
		}

		var breakline = document.createElement("br");
			document.getElementById('game-board').appendChild(breakline);
	}

}


function markCheck(obj){

	obj.value = turn;
	total_turns++;

	obj.setAttribute("disabled", 'disabled');
	selections[turn].push(Number(obj.id));

	changeTurn();
}
