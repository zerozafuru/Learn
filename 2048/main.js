let score;
let board;



const game = () => {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  randomTile()
  randomTile()
}

const randomTile = () => {
  let x = Math.floor(Math.random() * 4)
  let y = Math.floor(Math.random() * 4)

  if (board[x][y] == 0) {
    let random = Math.random() > 0.75 ? 4 : 2;
    board[x][y] = random
    draw()
  } else {
    randomTile()
  }
}

const draw = () => {
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {

      let div = document.getElementById(x + '' + y)

      if (board[x][y] == 0) {
        div.innerHTML = ''
        div.className = 'cell'
      } else {

        div.innerHTML = `${board[x][y]}`
        div.className = `cell tile${board[x][y]}`

      }
    }
  }

}

const moveLeft = () => {
  for (let i = 0; i < 3; i++) {
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        if (board[x][y] === 0) {
          let yN = y + 1
          if (yN < 4) {
            let n = board[x][yN]
            board[x][y] = n
            board[x][yN] = 0
          } else {
            board[x][y] = 0
          }

        }
      }
    }
  }
  randomTile()
}

const moveRight = () => {
  for (let i = 0; i < 3; i++) {
    for (let x = 0; x < 4; x++) {
      for (let y = 4; y > 0; y--) {
        if (board[x][y] === 0) {
          let yN = y - 1
          if (yN <4) {
            let n = board[x][yN]
            board[x][y] = n
            board[x][yN] = 0
          } else {
            board[x][y] = 0
          }

        }
      }
    }
  }
  randomTile()
}
const moveUp = () => {
  for (let i = 0; i < 3; i++) {
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        if (board[x][y] === 0) {
          let xN = x + 1
          if (xN < 4) {
            let n = board[xN][y]
            board[x][y] = n
            board[xN][y] = 0
          } else {
            board[x][y] = 0
          }

        }
      }
    }
  }
  randomTile()
}
const moveDown = () => {
  console.log(board)
  console.log(board[0][0])
  for (let i = 0; i < 3; i++) {
    for (let x = 4; x > 0; x--) {
      for (let y = 0; y < 4; y++) {
        console.log(board[x])
        if (board[x]?.[y] === 0) {
          let xN = x - 1
          if (xN < 4) {
            let n = board[xN][y]
            board[x][y] = n
            board[xN][y] = 0
          } else {
            board[x][y] = 0
          }

        }
      }
    }
  }
  randomTile()
}





document.addEventListener('keydown', event => {
  if (event.keyCode === 37) {
    moveLeft()
  }
  if (event.keyCode === 38) {
    moveUp()
  }
  if (event.keyCode === 39) {
    moveRight()
  }
  if (event.keyCode === 40) {
    moveDown()
  }
}



)



window.addEventListener("load", () => {

  game()


})
