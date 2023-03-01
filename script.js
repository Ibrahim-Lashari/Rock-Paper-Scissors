// starting properties for landing page //
document.getElementById('rock').className = 'choice';
document.getElementById('paper').className = 'choice';
document.getElementById('scissors').className = 'choice';

    function hidePanels(){     // Hides panels that are not the active one //
		document.getElementById('rock').style.display = 'none';
		document.getElementById('paper').style.display = 'none';
		document.getElementById('scissors').style.display = 'none';
	}

    function getComputerChoice(){ // Computer will make a randomized choice after the player chooses //
        let randomNumber = Math.floor(Math.random() * 3)
        switch (randomNumber) {
            case 0:
                return cpuRock();
                break;
            case 1:
                return cpuPaper();
                break;
            case 2:
                return cpuScissors();
                break;
            }
    }




function cpuRock(){ // When person chooses, computer picks rock //
    document.getElementById('computer').style.display = '';
}

function cpuPaper(){ // When person chooses, computer picks paper //
    document.getElementById('computer').style.display = '';
}

function cpuScissors() { // When person chooses, computer picks scissors //
    document.getElementById('computer').style.display = '';
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
function reset (){
    document.getElementById('rock').style.display = '';
	document.getElementById('paper').style.display = '';
	document.getElementById('scissors').style.display = '';
    document.getElementById('computer').style.display = '';
}