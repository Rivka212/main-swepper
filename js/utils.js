'use strict'

function renderBoard() {
    var strHTML = ''
    var strHTML = `<table><tbody>`
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < gBoard[0].length; j++) {
            const cell = gBoard[i][j]

            var className = `cell cell-${i}-${j}`
            
             className = (cell.isMarked) ? '&#127987' : ''
            className += (cell.minesAroundCount) ? 'cell.minesAroundCount' : ''

            strHTML += `\t<td class="cell ${className}" onclick="onCellclicked(this, ${i}, ${j})" >
            </td>\n`
        }
        strHTML +=  `</tr>\n`
    }
     strHTML +=  `</tbody></table>`

    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
    const elCells = document.querySelector('.board-cells')
    elCells.innerHTML = strHTML
  
}


function renderCell(location, value) {
    const cellSelector = '.' + getClassName(location) 
    const elCell = document.querySelector(cellSelector)
    elCell.innerHTML = value
  }
  


function getClassName(location) {
    const cellClass = 'cell-' + location.i + '-' + location.j
    return cellClass
  }



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

function getTime() {
    return new Date().toString().split(' ')[4];
}
