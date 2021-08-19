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


const displayController = (function () {
    const winnerAnnouncer = document.querySelector("#winner-announcer");

    function setDisplay(text) {
        winnerAnnouncer.textContent = text;
    }

    function resetDisplay() {
        winnerAnnouncer.textContent = "";
    }

    return { setDisplay, resetDisplay };
})();


const GameBoard = (function () {
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

    function resetBtn() {
        const btn = document.querySelector("#reset-btn");
        btn.addEventListener('click', () => {
            gameBoard = [];
            render();
            displayController.resetDisplay();
            Game.addEventListeners();
        })
    }

    return { init, getBoard, updateBoard, resetBtn };

})();


const Game = (function () {
    const p1 = Player("Asad", "X");

    const playerChoice = p1.getChoice();
    const computerChoice = playerChoice === "X" ? "O" : "X";

    function checkWin() {
        let currentBoard = GameBoard.getBoard();

        if (currentBoard[0] === playerChoice && currentBoard[4] === playerChoice && currentBoard[8] === playerChoice) {
            displayController.setDisplay("You Win!!");
            return true;
        }
        else if (currentBoard[0] === playerChoice && currentBoard[3] === playerChoice && currentBoard[6] === playerChoice) {
            displayController.setDisplay("You Win!!");
            return true;
        }
        else if (currentBoard[1] === playerChoice && currentBoard[4] === playerChoice && currentBoard[7] === playerChoice) {
            displayController.setDisplay("You Win!!");
            return true;
        }
        else if (currentBoard[2] === playerChoice && currentBoard[5] === playerChoice && currentBoard[8] === playerChoice) {
            displayController.setDisplay("You Win!!");
            return true;
        }
        else if (currentBoard[2] === playerChoice && currentBoard[4] === playerChoice && currentBoard[6] === playerChoice) {
            displayController.setDisplay("You Win!!");
            return true;
        }
        else if (currentBoard[3] === playerChoice && currentBoard[4] === playerChoice && currentBoard[5] === playerChoice) {
            displayController.setDisplay("You Win!!");
            return true;
        }
        else if (currentBoard[0] === playerChoice && currentBoard[1] === playerChoice && currentBoard[2] === playerChoice) {
            displayController.setDisplay("You Win!!");
            return true;
        }
        else if (currentBoard[6] === playerChoice && currentBoard[7] === playerChoice && currentBoard[8] === playerChoice) {
            displayController.setDisplay("You Win!!");
            return true;
        }

        else if (currentBoard[0] === computerChoice && currentBoard[4] === computerChoice && currentBoard[8] === computerChoice) {
            displayController.setDisplay("You Loose!");
            return true;
        }
        else if (currentBoard[0] === computerChoice && currentBoard[3] === computerChoice && currentBoard[6] === computerChoice) {
            displayController.setDisplay("You Loose!");
            return true;
        }
        else if (currentBoard[1] === computerChoice && currentBoard[4] === computerChoice && currentBoard[7] === computerChoice) {
            displayController.setDisplay("You Loose!");
            return true;
        }
        else if (currentBoard[2] === computerChoice && currentBoard[5] === computerChoice && currentBoard[8] === computerChoice) {
            displayController.setDisplay("You Loose!");
            return true;
        }
        else if (currentBoard[2] === computerChoice && currentBoard[4] === computerChoice && currentBoard[6] === computerChoice) {
            displayController.setDisplay("You Loose!");
            return true;
        }
        else if (currentBoard[3] === computerChoice && currentBoard[4] === computerChoice && currentBoard[5] === computerChoice) {
            displayController.setDisplay("You Loose!");
            return true;
        }
        else if (currentBoard[0] === computerChoice && currentBoard[1] === computerChoice && currentBoard[2] === computerChoice) {
            displayController.setDisplay("You Loose!");
            return true;
        }
        else if (currentBoard[6] === computerChoice && currentBoard[7] === computerChoice && currentBoard[8] === computerChoice) {
            displayController.setDisplay("You Loose!");
            return true;
        }
        else if (currentBoard.length === 9 && (!currentBoard.includes(undefined))) {
            displayController.setDisplay("It's a tie!")
            return 1;
        }
        else {
            return false;
        }
    }

    function move(index, choice) {
        GameBoard.updateBoard(index, choice);
    }

    function addEventListeners() {
        let boxes = document.querySelectorAll(".box");
        boxes.forEach((box) => {
            box.addEventListener('click', playerPlay);
        });
    }

    function removeEventListeners() {
        let boxes = document.querySelectorAll(".box");
        boxes.forEach((box) => {
            box.removeEventListener('click', playerPlay);
        });
    }

    function playerPlay() {
        if (!checkWin()) {
            let index = this.getAttribute('data-box-index') - 1;
            if (!this.textContent) {
                move(index, playerChoice);
                if (!checkWin()) {
                    computerPlay(computerChoice);
                }
                else {
                    removeEventListeners();
                }
            }
        }
    }

    function computerPlay() {
        let index = Math.floor(Math.random() * 9);
        let board = GameBoard.getBoard();
        if (board[index] != undefined || board[index]) {
            while (board[index] != undefined) {
                index = Math.floor(Math.random() * 9);
            }
        }
        Game.move(index, computerChoice);
        if (checkWin()) {
            removeEventListeners();
        }
    }

    function play() {
        addEventListeners();
    }

    function main() {
        GameBoard.init();
        Game.play();
        GameBoard.resetBtn();
    }

    function stopRendering() {

    }

    return { checkWin, main, move, play, addEventListeners, removeEventListeners };

})();

Game.main();