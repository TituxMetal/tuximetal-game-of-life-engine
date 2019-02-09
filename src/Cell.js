import CellState from "./CellState";

export default class Cell {
  constructor(state) {
    if (Object.values(CellState).indexOf(state) === -1) {
      throw new Error('State is not valid')
    }
    this.state = state
  }

  getNextState(numNeighbors) {
    if (this.state === CellState.alive && (numNeighbors === 2 || numNeighbors === 3)) {
      return CellState.alive
    }

    if (this.state === CellState.dead && numNeighbors === 3) {
      return CellState.alive
    }

    return CellState.dead
  }
}
