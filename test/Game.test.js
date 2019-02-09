import { CellState, Game, Cell } from '../src'

const { alive, dead } = CellState

const deadState = [
  [dead, dead, dead],
  [dead, dead, dead],
  [dead, dead, dead]
]

describe('Game of life', () => {
  it('should be initialized with a given state', () => {
    const game = new Game(deadState)
    const cell = game.getCell(0, 0)
    const cellState = [
      [new Cell(dead), new Cell(dead), new Cell(dead)],
      [new Cell(dead), new Cell(dead), new Cell(dead)],
      [new Cell(dead), new Cell(dead), new Cell(dead)]
    ]

    expect(cell).toBeInstanceOf(Cell)
    expect(game.getState()).toEqual(cellState)
    expect(game.getTorusMode()).toEqual(false)
  })

  it('should be initialized with torus mode enabled', () => {
    const game = new Game(deadState, true)

    expect(game.getTorusMode()).toEqual(true)
  })

  it('should retrieve a cell at a given row and column', () => {
    const game = new Game(deadState)
    const cell = game.getCell(0, 0)

    expect(cell).toBeInstanceOf(Cell)
    expect(cell.state).toEqual(CellState.dead)

    const gameState = [
      [alive, dead],
      [dead, alive]
    ]
    const newGame = new Game(gameState)

    const aliveCell = newGame.getCell(0, 0)
    expect(aliveCell).toBeInstanceOf(Cell)
    expect(aliveCell.state).toEqual(CellState.alive)

    const deadCell = newGame.getCell(0, 1)
    expect(deadCell).toBeInstanceOf(Cell)
    expect(deadCell.state).toEqual(CellState.dead)
  })

  it('should get the number of alive neighbors above a given cell', () => {
    const gameState = [
      [alive, alive, alive],
      [dead, alive, dead],
      [dead, dead, dead],
    ]
    const game = new Game(gameState)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 1)

    expect(numAliveNeighbors).toEqual(3)
  })

  it('should get the number of alive neighbors below a given cell', () => {
    const gameState = [
      [dead, dead, dead],
      [dead, alive, dead],
      [alive, alive, alive],
    ]
    const game = new Game(gameState)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 1)

    expect(numAliveNeighbors).toEqual(3)
  })

  it('should get the number of alive neighbors next to a given cell', () => {
    const gameState = [
      [dead, dead, dead],
      [alive, alive, alive],
      [dead, dead, dead],
    ]
    const game = new Game(gameState)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 1)

    expect(numAliveNeighbors).toEqual(2)
  })

  it('should get the number of alive neighbors for a given cell', () => {
    const deadCellsGame = new Game(deadState)
    expect(deadCellsGame.getNumOfAliveNeighbors(1, 1)).toEqual(0)

    const gameState = [
      [alive, alive, alive],
      [alive, alive, alive],
      [alive, alive, alive],
    ]
    const aliveStateGame = new Game(gameState)

    expect(aliveStateGame.getNumOfAliveNeighbors(1, 1)).toEqual(8)
  })

  it('should get the number of alive neighbors in the top row, torus mode disabled', () => {
    const gameState = [
      [dead, alive, dead],
      [dead, dead, dead],
      [alive, alive, alive],
    ]
    const game = new Game(gameState)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(0, 1)

    expect(numAliveNeighbors).toEqual(0)
  })

  it('should get the number of alive neighbors in the top row, torus mode enabled', () => {
    const gameState = [
      [dead, alive, dead],
      [dead, dead, dead],
      [alive, alive, alive],
    ]
    const game = new Game(gameState, true)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(0, 1)

    expect(numAliveNeighbors).toEqual(3)
  })

  it('should get the number of alive neighbors in the bottom row, torus mode disabled', () => {
    const gameState = [
      [alive, alive, alive],
      [dead, dead, dead],
      [dead, alive, dead],
    ]
    const game = new Game(gameState)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(2, 1)

    expect(numAliveNeighbors).toEqual(0)
  })

  it('should get the number of alive neighbors in the bottom row, torus mode enabled', () => {
    const gameState = [
      [alive, alive, alive],
      [dead, dead, dead],
      [dead, alive, dead],
    ]
    const game = new Game(gameState, true)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(2, 1)

    expect(numAliveNeighbors).toEqual(3)
  })

  it('should get the number of alive neighbors in the first col, torus mode disabled', () => {
    const gameState = [
      [dead, dead, alive],
      [alive, dead, alive],
      [dead, dead, alive],
    ]
    const game = new Game(gameState)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 0)

    expect(numAliveNeighbors).toEqual(0)
  })

  it('should get the number of alive neighbors in the first col, torus mode enabled', () => {
    const gameState = [
      [dead, dead, alive],
      [alive, dead, alive],
      [dead, dead, alive],
    ]
    const game = new Game(gameState, true)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 0)

    expect(numAliveNeighbors).toEqual(3)
  })

  it('should get the number of alive neighbors in the last col, torus mode disabled', () => {
    const gameState = [
      [alive, dead, dead],
      [alive, dead, alive],
      [alive, dead, dead],
    ]
    const game = new Game(gameState)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 2)

    expect(numAliveNeighbors).toEqual(0)
  })

  it('should get the number of alive neighbors in the last col, torus mode enabled', () => {
    const gameState = [
      [alive, dead, dead],
      [alive, dead, alive],
      [alive, dead, dead],
    ]
    const game = new Game(gameState, true)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 2)

    expect(numAliveNeighbors).toEqual(3)
  })

  it('should get number of alive neighbors for cell in a big grid', () => {
    const gameState = [
      [dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead],
      [dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead],
      [dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead],
      [dead, dead, dead, dead, dead, alive, alive, alive, dead, dead, dead, dead, dead],
      [dead, dead, dead, dead, dead, alive, dead, alive, dead, dead, dead, dead, dead],
      [dead, dead, dead, dead, dead, alive, alive, alive, dead, dead, dead, dead, dead],
      [dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead],
      [dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead],
      [dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead, dead],
    ]
    const game = new Game(gameState)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(4, 6)

    expect(numAliveNeighbors).toEqual(8)
  })

  it('should create the next state of the game, torus mode disabled', () => {
    const gameState = [
      [dead, alive, dead],
      [alive, alive, alive],
      [dead, alive, dead],
    ]
    const game = new Game(gameState)
    game.nextState()
    const expectedState = [
      [new Cell(alive), new Cell(alive), new Cell(alive)],
      [new Cell(alive), new Cell(dead), new Cell(alive)],
      [new Cell(alive), new Cell(alive), new Cell(alive)],
    ]

    expect(game.getState()).toEqual(expectedState)
  })

  it('should create the next state of the game, torus mode enabled', () => {
    const gameState = [
      [dead, alive, dead],
      [alive, alive, alive],
      [dead, alive, dead],
    ]
    const game = new Game(gameState, true)
    game.nextState()
    const expectedState = [
      [new Cell(dead), new Cell(dead), new Cell(dead)],
      [new Cell(dead), new Cell(dead), new Cell(dead)],
      [new Cell(dead), new Cell(dead), new Cell(dead)],
    ]

    expect(game.getState()).toEqual(expectedState)
  })
})
