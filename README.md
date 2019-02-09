# Game of Life engine by TuxiMetal

* Setup the project
  * [ ] Install dependencies
    * [ ] jest
    * [ ] babel
    * [ ] webpack and plugins
  * [ ] Setup webpack
  * [ ] Setup in package.json
    * [ ] "@babel/preset-env"
    * [ ] "jest"
  * [ ] Setup test directory
  * [ ] Add scripts
    * [ ] "build": "NODE_ENV=production webpack --mode=production"
    * [ ] "test": "export NODE_ENV=test && jest --watch test/*.test.js"
    * [ ] "test-coverage": "export NODE_ENV=test && jest --coverage test/*.test.js"
* CellState
  * [ ] Has an ALIVE state
  * [ ] Has a DEAD state
* Cell
  * [ ] Should be initialized with a cellState
  * [ ] Should die if it has fewer than 2 live nieghbors
    * [ ] getNextState(numNeighbors)
  * [ ] Should live with 2 or 3 live neighbors
  * [ ] Should stay dead if it has fewer than 2 live neighbors
  * [ ] Should die with more than 3 neighbors
  * [ ] Should stay dead with more than 3 neighbors
  * [ ] Should come alive with exactly 3 neighbors
* Game
  * [ ] Should be initialized with a given state
    * [ ] Array of arrays of states
  * [ ] Should retrieve a cell at a given cell
  * [ ] Should get the number of alive neighbors for a given cell
  * [ ] Should create the next state of the game
