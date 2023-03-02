// starting properties for landing page //
document.getElementById('rock').className = 'choice';
document.getElementById('paper').className = 'choice';
document.getElementById('scissors').className = 'choice';
document.getElementById('cpuRock').style.display = 'none';
document.getElementById('cpuPaper').style.display = 'none';
document.getElementById('cpuScissors').style.display = 'none';

    function hidePanels(){     // Hides panels that are not the active one //
		document.getElementById('rock').style.display = 'none';
		document.getElementById('paper').style.display = 'none';
		document.getElementById('scissors').style.display = 'none';
        document.getElementById('cpuRock').style.display = 'none';
		document.getElementById('cpuPaper').style.display = 'none';
		document.getElementById('cpuScissors').style.display = 'none';
	}

    function getComputerChoice(){ // Computer will make a randomized choice after the player chooses //
        let randomNumber = Math.floor(Math.random() * 3)
        switch (randomNumber) {
            case 0:
                return computerRock();
                break;
            case 1:
                return computerPaper();
                break;
            case 2:
                return computerScissors();
                break;
            }
    }




function computerRock(){ // When person chooses, computer randomly picks rock //
    document.getElementById('cpuRock').style.display = 'block';
    document.getElementById('cpuRock').className = 'afterChoice';
}

function computerPaper(){ // When person chooses, computer randomly picks paper //
    document.getElementById('cpuPaper').style.display = 'block';
    document.getElementById('cpuPaper').className = 'afterChoice';
}

function computerScissors() { // When person chooses, computer randomly picks scissors //
    document.getElementById('cpuScissors').style.display = 'block';
    document.getElementById('cpuScissors').className = 'afterChoice';
}


function playRock (){ // When rock is clicked, person will play rock //
    hidePanels();
    document.getElementById('rock').style.display = 'block';
}
function playPaper (){ // When paper is clicked, person will play paper //
    hidePanels();
    document.getElementById('paper').style.display = 'block';
}
function playScissors (){ // When scissors is clicked, person will play scissors //
    hidePanels();
    document.getElementById('scissors').style.display = 'block';
}
function reset (){ // Resets the game //
    document.getElementById('rock').style.display = '';
	document.getElementById('paper').style.display = '';
	document.getElementById('scissors').style.display = '';
    document.getElementById('cpuRock').style.display = 'none';
    document.getElementById('cpuPaper').style.display = 'none';
    document.getElementById('cpuScissors').style.display = 'none';
}