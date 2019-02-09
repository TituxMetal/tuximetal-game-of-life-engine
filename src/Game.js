import Cell from './Cell'
import CellState from './CellState'

export default class Game {
  constructor(state) {
    this.state = state.map(row => row.map(cellState => new Cell(cellState)))
    this.numRows = this.state.length
    this.numCols = this.state[0].length
  }

  getCell(row, col) {
    return this.state[row][col]
  }

  getCellState(row, col) {
    return this.getCell(row, col).state
  }

  getState() {
    return this.state
  }

  getNumOfAliveNeighbors(row, col) {
    let numNeighbors = 0
    const startRow = row - 1 < 0 ? 0 : row - 1
    const endRow = row + 1 >= this.numRows ? this.numRows - 1 : row + 1
    const startCol = col - 1 < 0 ? 0 : col - 1
    const endCol = col + 1 >= this.numCols ? this.numCols - 1 : col + 1

    for (let x = startRow; x <= endRow; ++x) {
      for (let y = startCol; y <= endCol; ++y) {
        if (!(x === row && y === col)) {
          const cellState = this.state[x][y].state
          numNeighbors += this.getStateValues(cellState)
        }
      }
    }

    return numNeighbors
  }

  nextState() {
    this.state = this.state.map((row, rowNum) =>
      row.map((cell, colNum) =>
        new Cell(cell.getNextState(this.getNumOfAliveNeighbors(rowNum, colNum)))
      )
    )
  }

  getStateValues(state) {
    const stateValues = {
      [CellState.alive]: 1,
      [CellState.dead]: 0,
    }

    return stateValues[state]
  }
}
