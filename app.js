(function() {
    console.log("beep boop")
    const fields = []
    const gameBoard = document.querySelector("#game-board")
    let numField = 0
    let numTurns = 0

    //function creates an array with 9 entries, all filled with "x"
    function board() {
        for (let i = 0; i < 9; i++) {
            fields[i] = "";
            console.log("hello");
        } 
        
    //all array entries turn into a div with their textcontent being the value of the array
    //every div gets a class of "fieldN" where N=iteration
    //eventlistener works; will be used to turn div content into X or O through other function
        for (let field of fields) {
            numField++
            let newField = document.createElement("div");
            newField.textContent = field;
            newField.classList.add(`field${numField}`)
            newField.addEventListener('click', function test() {newField.innerText = "x"})
            gameBoard.append(newField);
        }
    }


    function init() {
        function createPlayer(name, score) {
            return { 
                name,
                score,
            }
        }
 
        //modal popup
        (function() {
            console.log('INIT')
            // Get the modal, declare buttons and inputs
			const modal = document.getElementById("myModal");
            const playerOne = document.getElementById("div-name-p1")
            const playerTwo = document.getElementById("div-name-p2")
            const letsGo = document.getElementById("div-lets-go");
            const btnNameP1 = document.getElementById("btn-name-p1");
            const btnNameP2 = document.getElementById("btn-name-p2");
            const btnLetsGo = document.getElementById("btn-lets-go");
            const nameErrorP1 = document.getElementById("modal-error-name-p1");
            const nameErrorP2 = document.getElementById("modal-error-name-p2");
            const inputErrorP1 = document.getElementById("name-input-error-p1");
            const inputErrorP2 = document.getElementById("name-input-error-p2");
            const btnErrorP1 = document.getElementById("button-error-name-p1");

			// Modal opens on page load
			(function() {
				modal.style.display = "block";
			})();

            function namePlayer() {
                const inputNameP1 = document.getElementById("input-name-p1").value;
                const labelP1 = document.getElementById("label-p1");
                const p1Name = document.getElementById("p1-name");
                const P1 = createPlayer(inputNameP1, 0);
                if (inputNameP1 === "") {
                    const btnErrorP1 = document.getElementById("btn-error-name-p1");
                    nameErrorP1.style.display = "block";
                    playerOne.style.display = "none";
                    btnErrorP1.onclick = function () {
                        const inputErrorP1 = document.getElementById("input-error-name-p1").value;
                        if (inputErrorP1 === "") {
                            console.log("oopsee")
                        }
                        else {
                            nameErrorP1.style.display = "none";
                            playerTwo.style.display = "block";
                            labelP1.textContent = inputErrorP1;
                            p1Name.textContent = inputErrorP1;
                        }
                    }
                }
                else {
                    playerOne.style.display = "none";
                    playerTwo.style.display = "block";
                    labelP1.textContent = inputNameP1;
                    p1Name.textContent = inputNameP1;
                }
            }

            // When first "Enter" button is clicked, go to next input
            btnNameP1.onclick = function () {
                namePlayer()
                // H2 welcomes players
                // H3 asks for player 1 name
                // When button is pressed, check input box

                // When input box is empty, 
                    // H2 tells player something went wrong
                    // H3 asks for name again

                    // When input box is empty, don't do anything

                // When input box is filled,
                    // Create player Object for player 1
                    // H2 welcomes Player 1
                    // H3 asks for player 2's name

                    // When input box is empty, 
                        // H2 tells player something went wrong
                        // H3 asks for name again

                        // When input box is empty, don't do anything

                    // When player box is filled,
                        // H2 Welcomes player 2
                        // H3 says 'start game'
            };

            btnNameP2.onclick = function () {
                const inputNameP2 = document.getElementById("input-name-p2").value;
                const labelP2 = document.getElementById("label-p2");
                const p2Name = document.getElementById("p2-name");
                const P2 = createPlayer(inputNameP2, 0);
                playerTwo.style.display = "none";
                letsGo.style.display = "block";
                labelP2.textContent = inputNameP2;
                p2Name.textContent = inputNameP2;
            };
            
            btnLetsGo.onclick = function () {
                modal.style.display = "none";
                board()
                begin()
            };
        })()
        //ask for name 


            //if amount of players === 0 put name in label .playerOne
            //factPlayers(name)
            //playerCounter++
            //ask for name

            //if amount of players === 1 put name in label .playerTwo
            //factPlayers(name)
            //close names input
            //board()
            //begin()
    }
    init()

    function factPlayers(name) {
        //create Player object with
        //  -player name
        //  -assigned character (x/o)
        //  -score
    }

    function begin() {
        //resets board (let board() empty playingfield)
        //numTurns = 0
        //randomly choose a player to get the first turn
        //turn()
    }

    function turn() {
        //selected player may a field
        //clicked field content turns into player's icon; X or O
        //check if winning conditions are met and if so run win()
        //numTurns++
        //other player gets selected
        //turn()
    }

    function win() {
        //check if win conditions are met
        //if so, winner()
        //else, turn()
    }

    function winner() {
        //does something cool when winning conditions are met
        //display "Player X wins" for instance
        //winning player's score++
        //begin()
    }

    function scoreReset() {
        //both players' scores = 0
        //begin()
    }

    function fullReset() {
        //reload the page
        //OR
        //players' scores = 0
        //numTurns = 0
        //init()
    }

})()

//board with 9 fields
//each object can contain " ", "X" or "O"
//player input should be able to change " " into either "X" OR "O"
// "X" and "O" values may not be changed (scope and closures)



function Player(name) {
    return { name: name }
}


const playerList = () => {
    list = []
}

function createPlayer(name) {
    
} 

const playerOne = new Player(name)

const players = function(){
    const _playerOne = {
        name : playerOne,
        score : 0
    }

    const _playerTwo = {
        name : playerTwo,
        score : 0
    }}
