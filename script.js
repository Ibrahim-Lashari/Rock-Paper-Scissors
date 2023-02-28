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
                return playRock()
                break;
            case 1:
                return playPaper();
                break;
            case 2:
                return playScissors();
                break;
        }
    }

function computerChoice () { // When person makes a choice, computer plays the randomized choice //
    getComputerChoice();
    document.getElementById('computer').style.display ='block';
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