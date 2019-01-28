const players = ['X','O'];
var count = 0;
var num = 0;
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
var gameEnd = false;
const cells = document.querySelectorAll('.cell');
const table = document.querySelector('table').addEventListener('click', placeSquare);
const winText = document.querySelector('.endgame .text');
function placeSquare (evt) {
    if (gameEnd === false){
        if(evt.target.className === 'cell' && evt.target.textContent === '') {
            num = count % 2;
            // var player = players[num];
            evt.target.textContent = players[num];
            // count += 1;
            win();
            count++;
        }
    }
}
function win () {
    for (var i = 0; i < winCombos.length; i++){
        if(  cells[winCombos[i][0]].textContent !== '' && cells[winCombos[i][0]].textContent  === cells[winCombos[i][1]].textContent && cells[winCombos[i][0]].textContent === cells[winCombos[i][2]].textContent) {
            // alert(`Player ${players[count % 2]}`);
            document.querySelector('.endgame').style.display = 'block';
            winText.textContent = `PLAYER ${players[count % 2]} WON!!!`;
            gameEnd = true;
        }
    }
}
function startGame(){
    gameEnd = false;
    document.querySelector('.endgame').style.display = 'none';
    winText.textContent = ``;
    cells.forEach(function(cell){
        cell.textContent ='';
    });
    count = 0;
    num = 0;
}














































































// console.log('JS is running!');
// /*----- constants -----*/ 
// var orgiBoard;
// const huPlayer = 'O';
// const aiPlayer = 'X';
// const winCombos = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,4,8],
//     [2,4,6],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8]
// ];
// /*----- app's state (variables) -----*/ 
// /*----- cached element references -----*/ 
// const cells= document.querySelectorAll('.cell');
// startGame();
// /*----- event listeners -----*/ 
// /*----- functions -----*/
// function startGame() {
//     document.querySelector(".endgame").style.display = "none";
//     origBoard = Array.from(Array(9).keys());   //array of 9 elements
//     console.log(origBoard);
//     for ( var i = 0; i < cells.length; i++){
//         cells[i].innerText = '';
//         cells[i].style.removeProperty('background-color');
//         cells[i].addEventListener('click', turnClick, false);
//     }
// }
// function turnClick(square) {
//     if (typeof origBoard [square.target.id] == 'number'){
//         turn(square.target.id, huPlayer);
//         console.log(square.target.id);
//         if (!checkTie()) turn(bestSpot(),aiPlayer);
//     }
// }
// function turn (squareId, player) {
//     origBoard[squareId] = player;
//     document.getElementById(squareId).innerText = player;
//     let gameWon = checkWin(origBoard, player);
//     if (gameWon) gameOver(gameWon);
// }
// function checkWin(board, player) {
//     let plays = board.reduce((a, e, i) =>
//         (e === player) ? a.concat(i) : a, []);
//     let gameWon = null;
//     for (let[index,win] of winCombos.entries()){
//         if(win.every(elem => plays.indexOf(elem) > -1)){
//             gameWon = {index: index, player: player};
//             break
//         }
//     }
//     return gameWon;
// }
// function gameOver(gameWon) {
//     for (let index of winCombos[gameWon.index]) {
//         document.getElementById(index).style.backgroundColor = 
//             gameWon.player = huPlayer ? "blue" : "red";
//     }
//     for (var i = 0; i< cells.length; i++){
//         cells[i].removeEventListener('click', turnClick,false);
//     }
//     declareWinner(gameWon.player == huPlayer ? "you win!" : "you lose!");
// }
// function declareWinner(who) {
//     document.querySelector(".endgame").style.display = 'block';
//     document.querySelector('.endgame .text').innerText = who;
// }
// function emptySquares() {
//     return origBoard.filter(s => typeof s == 'number');
// }
// function bestSpot(){
//     return emptySquares() [0];
// }
// function checkTie() {
//     if (emptySquares().length == 0) {
//         for (var i = 0; i < cells.length; i++ ){
//             cells[i].style.backgroundColor = 'green';
//             cells[i].removeEventListener('click', turnClick, flase);
//         }
//         declareWinner("Tie Game!")
//         return true;
//     }
//     return false;
// }
