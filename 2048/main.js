const score = 0
const data = []


function newGame() {
  const score = 0
  const data = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  this.randomTile()
  this.randomTile()

  this.draw()

}

function randomTile() {
  let x = Math.floor(Math.random() * 4)
  let y = Math.floor(Math.random() * 4)
  if (data[x][y] == 0) {
    data[x][y] = (Math.random() * 2) * 2;
  }
}

function draw() {
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      document.getElementById(''+x+y) = data[x][y]
    }
  }
}




