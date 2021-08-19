function Player(name, choice) {
    function getName() {
        return name;
    }
    function getChoice() {
        return choice;
    }
    function makeMove(index) {
        Game.move(index, choice);
    }
    return { getName, getChoice, makeMove };
}


let GameBoard = (function () {
    gameBoard = [];

    function init() {
        render();
    }

    function render() {
        boxes = document.querySelectorAll("[data-box-index]")
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].textContent = gameBoard[i];
        }
    }

    function getBoard() {
        return gameBoard;
    }

    function updateBoard(index, value) {
        gameBoard[index] = value;
        render();
    }
    
    return { init, getBoard, updateBoard };
    
})();


let Game = (function () {
    let p1 = Player("Asad", "X");

    const playerChoice = p1.getChoice();
    const computerChoice = playerChoice === "X" ? "O" : "X";
    
    function checkWin() {
        let currentBoard = GameBoard.getBoard();
        
        if (currentBoard[0] === playerChoice && currentBoard[4] === playerChoice && currentBoard[8] === playerChoice) {
            console.log("Player Won");
            return true;
        }
        else if (currentBoard[0] === playerChoice && currentBoard[3] === playerChoice && currentBoard[6] === playerChoice) {
            console.log("Player Won");
            return true;
        }
        else if (currentBoard[1] === playerChoice && currentBoard[4] === playerChoice && currentBoard[7] === playerChoice) {
            console.log("Player Won");
            return true;
        }
        else if (currentBoard[2] === playerChoice && currentBoard[5] === playerChoice && currentBoard[8] === playerChoice) {
            console.log("Player Won");
            return true;
        }
        else if (currentBoard[2] === playerChoice && currentBoard[4] === playerChoice && currentBoard[6] === playerChoice) {
            console.log("Player Won");
            return true;
        }
        else if (currentBoard[3] === playerChoice && currentBoard[4] === playerChoice && currentBoard[5] === playerChoice) {
            console.log("Player Won");
            return true;
        }
        else if (currentBoard[0] === playerChoice && currentBoard[1] === playerChoice && currentBoard[2] === playerChoice) {
            console.log("Player Won");
            return true;
        }
        else if (currentBoard[6] === playerChoice && currentBoard[7] === playerChoice && currentBoard[8] === playerChoice) {
            console.log("Player Won");
            return true;
        }

        else if (currentBoard[0] === computerChoice && currentBoard[4] === computerChoice && currentBoard[8] === computerChoice) {
            console.log("Computer Won");
            return true;
        }
        else if (currentBoard[0] === computerChoice && currentBoard[3] === computerChoice && currentBoard[6] === computerChoice) {
            console.log("Computer Won");
            return true;
        }
        else if (currentBoard[1] === computerChoice && currentBoard[4] === computerChoice && currentBoard[7] === computerChoice) {
            console.log("Computer Won");
            return true;
        }
        else if (currentBoard[2] === computerChoice && currentBoard[5] === computerChoice && currentBoard[8] === computerChoice) {
            console.log("Computer Won");
            return true;
        }
        else if (currentBoard[2] === computerChoice && currentBoard[4] === computerChoice && currentBoard[6] === computerChoice) {
            console.log("Computer Won");
            return true;
        }
        else if (currentBoard[3] === computerChoice && currentBoard[4] === computerChoice && currentBoard[5] === computerChoice) {
            console.log("Computer Won");
            return true;
        }
        else if (currentBoard[0] === computerChoice && currentBoard[1] === computerChoice && currentBoard[2] === computerChoice) {
            console.log("Computer Won");
            return true;
        }
        else if (currentBoard[6] === computerChoice && currentBoard[7] === computerChoice && currentBoard[8] === computerChoice) {
            console.log("Computer Won");
            return true;
        }
        else if(currentBoard.length === 9 && (!currentBoard.includes(undefined))){
            console.log(currentBoard);
            return draw();
        }
        else {
            return false;
        }
    }


    function draw(){
        console.log("DRAW");
        return 1;
    }

    function move(index, choice) {
        GameBoard.updateBoard(index, choice);
    }
    
    function addEventListeners() {
        let boxes = document.querySelectorAll(".box");
        console.log("ADD EVENT LISTENER CALLED");
        boxes.forEach((box) => {
            box.addEventListener('click', playerPlay);
        });
    }

    function removeEventListeners() {
        let boxes = document.querySelectorAll(".box");
        console.log('removeEventListener called');
        boxes.forEach((box) => {
            box.removeEventListener('click', playerPlay);
        });
    }

    function playerPlay() {
        console.log("PLAYER PLAY CALLED");
        if (!checkWin()) {
            let index = this.getAttribute('data-box-index') - 1;
            console.log("PLAYER MOVE : ",index, playerChoice);
            if (!this.textContent) {
                move(index, playerChoice);
                if (!checkWin()) {
                    computerPlay(computerChoice);
                }
                else{
                    removeEventListeners();
                }
            }
        }
    }

    function computerPlay() {
        let index = Math.floor(Math.random() * 9);
        let board = GameBoard.getBoard();
        if (board[index] != undefined) {
            let i = 0;
            if(i === 8){
                draw();
                return;
            }
            while (board[index] != undefined && i < board.length) {
                index = Math.floor(Math.random() * 9);
                i++;
            }
        }
        console.log("COMPUTER MOVE : ",index, computerChoice);
        Game.move(index, computerChoice);
        if(checkWin()){
            removeEventListeners();
        } 
    }

    function play() {
        addEventListeners();
    }

    function main() {
        GameBoard.init();
        Game.play();
    }

    function stopRendering() {

    }

    return { checkWin, main, move, play, addEventListeners, removeEventListeners };

})();

Game.main();