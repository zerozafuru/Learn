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
  for (let x = 0; x < 4; x++) {
    moveLeftItem(x);
  }
  randomTile()
}

const moveLeftItem = (x) => {
  for (let y = 0; y < 3; y++) {
    let next = nextItemY(x, y);
    if (next != -1) {
      if (board[x][y] == 0) {
        board[x][y] = board[x][next];
        board[x][next] = 0;
        y--;
      }
      else if (board[x][y] == board[x][next]) {
        board[x][y] *= 2;
        board[x][next] = 0;
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
  randomTile()
}

const moveRightItem = (x) => {
  for (let y = 3; y > 0; y--) {
    let next = prevItemY(x, y);
    if (next != -1) {
      if (board[x][y] == 0) {
        board[x][y] = board[x][next];
        board[x][next] = 0;
        y++;
      }
      else if (board[x][y] == board[x][next]) {
        board[x][y] *= 2;
        board[x][next] = 0;
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
  randomTile()
}

const moveUpItem = (x) => {
  for (let y = 0; y < 3; y++) {
    let next = nextItemX(x, y);
    if (next != -1) {
      if (board[y][x] == 0) {
        board[y][x] = board[next][x];
        board[next][x] = 0;
        y++;
      }
      else if (board[y][x] == board[next][x]) {
        board[y][x] *= 2;
        board[next][x] = 0;
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

  randomTile()
}

const moveDownItem = (x) => {
  for (let y = 3; y > 0; y--) {
    let next = prevItemX(x, y);
    if (next != -1) {
      if (board[y][x] == 0) {
        board[y][x] = board[next][x];
        board[next][x] = 0;
        y++;
      }
      else if (board[y][x] == board[next][x]) {
        board[y][x] *= 2;
        board[next][x] = 0;
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







window.addEventListener("load", () => {

  game()


})
