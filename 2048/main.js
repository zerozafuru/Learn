let score;

let board;
let moveEvent


const game = () => {
  score = 0
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]


  if (localStorage.getItem('best') == null) {
    localStorage.setItem('best', 0)
  }
  randomTile()
  randomTile()
  scoreValue()

  resetGame()
}

const resetGame = () => {
  document.getElementById('grid').style.opacity = "1"
  document.getElementById('game-over').style.opacity = "0"
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

      let div = document.querySelector(`[data-${x}${y}]`)

      if (board[x][y] == 0) {
        div.innerHTML = ''
        div.className = 'cell empty'
      } else {

        div.innerHTML = `${board[x][y]}`
        div.className = `cell tile${board[x][y]}`

      }
    }
  }

}

const moveLeft = () => {

  for (let x = 0; x < 4; x++) {
    moveLeftItem(x);
  }

  if (moveEvent) {
    randomTile()
    moveEvent = false
  }
  scoreValue()
  win()
  gameOver()
}

const moveLeftItem = (x) => {
  for (let y = 0; y < 3; y++) {
    let next = nextItemY(x, y);
    if (next != -1) {
      if (board[x][y] == 0) {
        board[x][y] = board[x][next];
        board[x][next] = 0;
        y--;
        moveEvent = true
      }
      else if (board[x][y] == board[x][next]) {

        board[x][y] *= 2;
        board[x][next] = 0;
        moveEvent = true
        score += board[x][y]
      }
    }
    else {
      break;
    }
  }
}

const nextItemY = (x, y) => {
  for (let i = y + 1; i < 4; i++) {
    if (board[x][i] != 0) {
      return i;
    }
  }
  return -1;
}

const moveRight = () => {
  for (let x = 0; x < 4; x++) {
    moveRightItem(x);
  }
  if (moveEvent) {
    randomTile()
    moveEvent = false
  }
  scoreValue()
  win()
  gameOver()
}

const moveRightItem = (x) => {
  for (let y = 3; y > 0; y--) {
    let next = prevItemY(x, y);
    if (next != -1) {
      if (board[x][y] == 0) {
        board[x][y] = board[x][next];
        board[x][next] = 0;
        y++;
        moveEvent = true
      }
      else if (board[x][y] == board[x][next]) {

        board[x][y] *= 2;
        board[x][next] = 0;
        moveEvent = true
        score += board[x][y]
      }
    }
    else {
      break;
    }
  }
}

const prevItemY = (x, y) => {
  for (let i = y - 1; i >= 0; i--) {
    if (board[x][i] != 0) {
      return i;
    }
  }
  return -1;
}

const moveUp = () => {
  for (let x = 0; x < 4; x++) {
    moveUpItem(x);
  }
  if (moveEvent) {
    randomTile()
    moveEvent = false
  }
  scoreValue()
  win()
  gameOver()
}

const moveUpItem = (x) => {
  for (let y = 0; y < 3; y++) {
    let next = nextItemX(x, y);
    if (next != -1) {
      if (board[y][x] == 0) {
        board[y][x] = board[next][x];
        board[next][x] = 0;
        y--;
        moveEvent = true
      }
      else if (board[y][x] == board[next][x]) {

        board[y][x] *= 2;
        board[next][x] = 0;
        moveEvent = true
        score += board[y][x]
      }
    }
    else {
      break;

    }
  }
}

const nextItemX = (x, y) => {
  for (let i = y + 1; i < 4; i++) {
    if (board[i][x] != 0) {
      return i;
    }
  }
  return -1;
}

const moveDown = () => {
  for (let x = 0; x < 4; x++) {
    moveDownItem(x);
  }

  if (moveEvent) {
    randomTile()
    moveEvent = false
  }
  scoreValue()
  win()
  gameOver()

}

const moveDownItem = (x) => {
  for (let y = 3; y > 0; y--) {
    let next = prevItemX(x, y);
    if (next != -1) {
      if (board[y][x] == 0) {
        board[y][x] = board[next][x];
        board[next][x] = 0;
        y++;
        moveEvent = true
      }
      else if (board[y][x] == board[next][x]) {

        board[y][x] *= 2;
        board[next][x] = 0;
        moveEvent = true
        score += board[y][x]
      }
    }
    else {
      break;

    }
  }

}

const prevItemX = (x, y) => {
  for (let i = y - 1; i >= 0; i--) {
    if (board[i][x] != 0) {
      return i;
    }
  }
  return -1;
}




document.addEventListener('keydown', event => {
  if (event.code == 'ArrowLeft') {
    moveLeft()
  }
  if (event.code == 'ArrowUp') {
    moveUp()
  }
  if (event.code == 'ArrowRight') {
    moveRight()
  }
  if (event.code == 'ArrowDown') {
    moveDown()
  }
  if (event.code == 'Space') {
    game()
  }
})

const scoreValue = () => {

  if (score > localStorage.getItem('best')) {
    localStorage.setItem('best', score)
  }
  let divScore = document.getElementById('score')
  divScore.innerHTML = `${score}`

  let divBest = document.getElementById('best')
  divBest.innerHTML = `${localStorage.getItem('best')}`
}


const isGameOver = () => {

  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      if (board[x][y] == 0) {
        return 0
      }
      if (x < 3) {
        if (board[x][y] == board[x + 1][y]) {
          return 0
        }
      }
      if (y < 3) {
        if (board[x][y] == board[x][y + 1]) {
          return 0
        }

      }
    }
  }

}



const win = () => {
  if (document.getElementsByClassName('tile2048').length > 0) {
    document.getElementById('grid').style.opacity = "0.5"
    document.getElementById('win').style.opacity = "1"
  }
}



const gameOver = () => {
  if (isGameOver() != 0) {
    document.getElementById('grid').style.opacity = "0.5"
    document.getElementById('game-over').style.opacity = "1"
  }
}



window.addEventListener("load", () => {

  game()


})


