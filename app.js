let GameBoard = (function () {
    gameBoard = [];

    function init() {
        render();
    }

    function render() {

    }

    function getBoard() {
        return gameBoard;
    }

    function updateBoard(index, value) {
        gameBoard[index] = value;
        render();
    }

    { init, getBoard, updateBoard };

})();

let Game = (function () {
    let moves = 0;

    function checkWin() {
        let currentBoard = GameBoard.getBoard();
    }

    function move(index, choice) {
        GameBoard.updateBoard(index, choice);
        moves++;
    }

    function stopRendering() {

    }


})();

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
    return { getName, getChoice };
}