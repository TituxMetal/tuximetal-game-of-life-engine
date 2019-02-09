# Game of Life engine by TuxiMetal

* Setup the project
  * [x] Install dependencies
    * [x] jest
    * [x] babel
    * [x] webpack and plugins
  * [x] Setup webpack
    * [x] webpack.config.js file
  * [x] Setup in package.json
    * [x] "@babel/preset-env"
    * [x] "jest"
  * [x] Add scripts
    * [x] "build": "NODE_ENV=production webpack --mode=production"
    * [x] "test": "export NODE_ENV=test && jest --watch test/*.test.js"
    * [x] "test-coverage": "export NODE_ENV=test && jest --coverage test/*.test.js"
  * [x] Setup test directory
* CellState
  * [x] Has an ALIVE state
  * [x] Has a DEAD state
* Cell
  * [x] Should be initialized with a cellState
  * [x] Should die if it has fewer than 2 live nieghbors
    * [x] getNextState(numNeighbors)
  * [x] Should live with 2 or 3 live neighbors
  * [x] Should stay dead if it has fewer than 2 live neighbors
  * [x] Should die with more than 3 neighbors
  * [x] Should stay dead with more than 3 neighbors
  * [x] Should come alive with exactly 3 neighbors
* Game
  * [x] Should be initialized with a given state
    * [x] Array of arrays of states
  * [x] Should retrieve a cell at a given cell
  * [x] Should get the number of alive neighbors for a given cell
  * [x] Should create the next state of the game
