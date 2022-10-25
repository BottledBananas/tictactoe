(function() {
    console.log("beep boop")
    const fields = []
    const gameBoard = document.querySelector("#gameBoard")
    let numField = 0



    //function creates an array with 9 entries, all filled with "x"
    function board() {
        for (let i = 0; i < 9; i++) {
            fields[i] = "x";
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
            newField.addEventListener('click', function test() {console.log('helloooo')})
            gameBoard.append(newField);
        }
        console.log(fields)
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
