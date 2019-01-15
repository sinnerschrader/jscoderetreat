# Welcome to our 2018 jscoderetreat

> Coderetreat is a day-long, intensive practice event, focusing on the fundamentals of software development and design. By providing developers the opportunity to take part in focused practice, away from the pressures of 'getting things done', the coderetreat format has proven itself to be a highly effective means of skill improvement. Practicing the basic principles of modular and object-oriented design, developers can improve their ability to write code that minimizes the cost of change over time.  . from the [global day of coderetreat website](https://www.coderetreat.org/pages/about/)

The Javascript Version of the coderetreat was created to improve communities abilities in one specific langugae and its variants (Typescript, coffeescript, es5 etc) which has turned to a lingua franca of the web over the last years. With the advent of modern Javascript versions (es6, Typescripts) there is even more need to upgrade out knowhow, incorporate safe coding practices and improve our skills in general. 

The Main focus is about 2 techniques: Pairprogramming, where all code is developed with a partner and Test Driven Development, where you try to test your code as you write it.


## Game of life

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

- Any live cell with fewer than two live neighbors dies, as if by underpopulation.
- Any live cell with two or three live neighbors lives on to the - next generation.
- Any live cell with more than three live neighbors dies, as if - by overpopulation.
- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.


## Rules

- Be nice
- Code conways game of life all day long
- Practice coding in a TDD style


https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
https://de.wikipedia.org/wiki/Conways_Spiel_des_Lebens

Seeds:
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns

## Getting Started

### Install node.js

- Recommended: nvm  
  https://github.com/creationix/nvm#installation

- Install yarn

```shell
$ npm install -g yarn
```

### Clone start setup

https://github.com/sinnerschrader/jscoderetreat.git

### Ready to go

Open two terminal windows.

```shell
$ yarn
$ yarn start
```

```shell
$ yarn test
```

## Challenges / Constraints

1. Get used to the game of life (30 minutes)
1. Pairing by "ping pong" (30 minutes)

   - Write a test that fails
   - Pass the keyboard
   - Implement the failing test (and only it!)
   - Start over

1. Keep code small (30 minutes)

   - Only 4 lines per function/method
   - Make your universe endless in any direction
     (no width and height constraint)

1. Pairing by "navigator driver" (30 minutes)
   https://gist.github.com/jordanpoulton/607a8854673d9f22c696

   - One person is driver

     - Owns the keyboard
     - Listens to the navigator
     - Suggests improvements
     - Accepts the navigator has the last word

   - One person is navigator

     - Dictates what is written
     - Explains why
     - Checks and helps with syntax/logic errors
     - Outlines the global tasks
     - Steers the communication

   **Swap after 15 minutes!**

1. Find the Loophole (30 minutes)

   - One person write the test
   - The other one tries to make just the test green  
      **This allows to intentionally implement the wrong algorithm!**

   **Swap after 15 minutes!**

1. The hard way (30 minutes)

   - No loops are allowed (no for/while/...)
   - If thats too hard just use while loops

1. Start over (30 minutes)

   - Same mode as in the first session
   - Try to remember everything you have learned so far
