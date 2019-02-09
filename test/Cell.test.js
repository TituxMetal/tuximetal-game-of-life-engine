import { Cell, CellState } from '../src'

describe('Cell', () => {
  it('should be initialized with a CellState', () => {
    const aliveCell = new Cell(CellState.alive)
    expect(aliveCell).toBeInstanceOf(Cell)
    expect(aliveCell.state).toEqual(1)
    
    const deadCell = new Cell(CellState.dead)
    expect(deadCell).toBeInstanceOf(Cell)
    expect(deadCell.state).toEqual(0)
  })

  it('should throw an error if not initialized with a CellState', () => {
    expect(() => {
      new Cell(undefined)
    }).toThrowError()
  })

  it('should die if it has fewer than 2 live neighbors', () => {
    const aliveCell = new Cell(CellState.alive)
    const nextStateWith0Neighbors = aliveCell.getNextState(0)
    expect(nextStateWith0Neighbors).toEqual(CellState.dead)

    const nextStateWith1Neighbor = aliveCell.getNextState(1)
    expect(nextStateWith1Neighbor).toEqual(CellState.dead)
  })

  it('should stay dead if it has fewer than 2 live neighbors', () => {
    const deadCell = new Cell(CellState.dead)
    const nextStateWith0Neighbors = deadCell.getNextState(0)
    expect(nextStateWith0Neighbors).toEqual(CellState.dead)

    const nextStateWith1Neighbor = deadCell.getNextState(1)
    expect(nextStateWith1Neighbor).toEqual(CellState.dead)
  })

  it('should live with 2 or 3 neighbors', () => {
    const liveCell = new Cell(CellState.alive)
    const nextStateWith2Neighbors = liveCell.getNextState(2)
    expect(nextStateWith2Neighbors).toEqual(CellState.alive)

    const nextStateWith3Neighbors = liveCell.getNextState(3)
    expect(nextStateWith3Neighbors).toEqual(CellState.alive)
  })
  
  it('should die with more than 3 neighbors', () => {
    const liveCell = new Cell(CellState.alive)
    const nextStateWith4Neighbors = liveCell.getNextState(4)
    expect(nextStateWith4Neighbors).toEqual(CellState.dead)

    const nextStateWith5Neighbors = liveCell.getNextState(5)
    expect(nextStateWith5Neighbors).toEqual(CellState.dead)
  })

  it('should stay dead with more than 3 neighbors', () => {
    const deadCell = new Cell(CellState.dead)
    const nextStateWith4Neighbors = deadCell.getNextState(4)
    expect(nextStateWith4Neighbors).toEqual(CellState.dead)

    const nextStateWith5Neighbors = deadCell.getNextState(5)
    expect(nextStateWith5Neighbors).toEqual(CellState.dead)
  })

  it('should come alive with exactly 3 neighbors', () => {
    const deadCell = new Cell(CellState.dead)
    const nextStateWith3Neighbors = deadCell.getNextState(3)
    expect(nextStateWith3Neighbors).toEqual(CellState.alive)
  })
})
