import { CellState } from '../src/'

describe('CellState', () => {
  it('Should have alive state', () => {
    expect(CellState.alive).toEqual(1)
  })

  it('Should have dead state', () => {
    expect(CellState.dead).toEqual(0)
  })
})
