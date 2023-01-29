'use strict'

const MINE = '&#128163'
const FLAG = '&#127987'

var gBoard
var gLevel
var gElSelectedCell = null
var timerInterval
var gIsWin = false
var Intreval

const gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0,
}

gLevel = { SIZE: 4, MINES: 2 }

function onInit() {
    console.log('hello')
    gBoard = buildBoard(4)
    renderBoard(4)
}

function changeLevel(level) {
    gIsWin = false
    clearInterval(timerInterval)
    var level = 1
    gLevel = { SIZE: 4, MINES: 2 }

    if (gLevel.SIZE *= gLevel.SIZE) {

        level++
    }
    gBoard = buildBoard(gBoard)
    renderBoard(gBoard, selector)
}


// function createBoard(size) {
//     var cellCount = size * size
//     gBoard = []
//     for (let i = 1; i <= cellCount; i++) {
//         gBoard.push(i)
//     }
//     return gBoard
// }


function timer() {
    var startTime = Date.now()

    timerInterval = setInterval(() => {
        var elapsedTime = Date.now() - startTime
        document.querySelector('.timer').innerText = (
            elapsedTime / 1000
        ).toFixed(3)
    }, 37)
}

console.log(buildBoard(4))
gBoard = buildBoard()
renderBoard(gBoard, '.board-container')

function buildBoard() {
    const size = 4
    const board = []
    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {

            const cell = {
                minesAroundCount: 4,
                isShown: false,
                isMine: false,
                isMarked: true,
            }
            board[i][j] = cell
        }
    }
    board[2][2].isMine = true
    board[1][1].isMine = true

    return board
}

console.log(onCellClicked())
function onCellClicked(elCell, i, j) {
    const cell = gBoard[i][j]
console.log('hi');
    var emptyCell
    var clickedCell = +elCell.innerText
    if (clickedCell) timer()
    if (elCell === cell.isMarked || cell.isShown) return

    if (elCell === cell.isMine) {
        alert("Game Over")
        // gemeOver()
    }
    if (elCell === !cell.isMine && !cell.isMarked && !cell.isShown) {
        cell.isShown && elCell.classList.add('elCell.minesAroundCount')
        if (elCell.minesAroundCount === 0) {
            elCell.minesAroundCount = emptyCell
            elCell.classList.add('emptyCell')
        }
    }
    const elCells = document.querySelector('.board-cells')
    elCells.innerHTML = strHTML

}


console.log(setMinesNegsCount())
function setMinesNegsCount() {
    var minesAroundCount = 0

    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= gBoard[i].length) continue
            if (i === rowIdx && j === colIdx) continue

            var currCell = gBoard[i][j]
            if (currCell.isMine) cell.minesAroundCount++
        }
    }
    var elMinesAroundCount = document.querySelector('.board-cells span')
    elMinesAroundCount.innerText = minesAroundCount

    return cell
}


console.log(onRightClick())
function onRightClick() {
    window.addEventListener('contextmenu', (event) => {
        event.preventDefault()
        console.log('mouse right-click is prevented')
        onCellMarked()
    })
    return onCellMarked()
}

console.log(onCellMarked())
function onCellMarked(elCell, i, j) {
    const cell = gBoard[i][j]
    onRightClick()
    var flagCount = 0
    // var clickedCell = +elCell.innerText
    elCell.classList.toggle('&#127987')
    elCell.isMarked === true
    flagCount ++
var elFlagCount = document.querySelector('.marked-count span')
elFlagCount.innerText = flagCount 
}


function checkGameOver() {
    console.log('Game Over')
    const cell = gBoard[i][j]
    if (cell.isMine === true && FLAG) {
        if (cell.isShown) {
            alert('You won')
        }
    }
} 


function expandShown(gBoard, elCell, i, j) {
    const cell = gBoard[i][j]
    // var clickedCell = +elCell.innerText
    if (!cell.isMine) {

        for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
            if (i < 0 || i >= gBoard.length) continue
            for (var j = colIdx - 1; j <= colIdx + 1; j++) {
                if (j < 0 || j >= gBoard[i].length) continue
                if (i === rowIdx && j === colIdx) continue

                var currCell = gBoard[i][j]
                if (!currCell.isMine) cell.minesAroundCount++
                cell.isShown
                elCell.classList.toggle(cell.minesAroundCount)
                
            }
        }

    }
}