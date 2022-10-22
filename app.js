(function() {
    console.log("beep boop")
    const fields = []
    const gameBoard = document.querySelector("#gameBoard")
    let newField = document.createElement("div")
    function board() {
        for (let i = 0; i < 9; i++) {
            fields[i] = "x";
            console.log("hello");
        } 
        for (let field of fields) {
            let newField = document.createElement("div");
            newField.textContent = field;
            gameBoard.append(newField);
        }
        console.log(fields)
        return fields
    }
    board()
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
