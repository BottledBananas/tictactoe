(function() {
    console.log("beep boop")
    const fields = []
    const gameBoard = document.querySelector("#gameBoard")
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
    board()

    function init() {
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
