# Javascript Coderetreat by Sinner Schrader

> Coderetreat is a day-long, intensive practice event, focusing on the fundamentals of software development and design. By providing developers the opportunity to take part in focused practice, away from the pressures of 'getting things done', the coderetreat format has proven itself to be a highly effective means of skill improvement. Practicing the basic principles of modular and object-oriented design, developers can improve their ability to write code that minimizes the cost of change over time.  . from the [global day of coderetreat website](https://www.coderetreat.org/pages/about/)

The Javascript Version of the coderetreat was created to improve communities abilities in one specific langugae and its variants (Typescript, coffeescript, es5 etc) which has turned to a lingua franca of the web over the last years. With the advent of modern Javascript versions (es6, Typescripts) there is even more need to upgrade our knowhow, incorporate safe coding practices and improve our skills in general. 

The Main focus is about 2 techniques: Pairprogramming, where all code is developed with a partner and Test Driven Development, where you try to test your code as you write it.

Coderetretas focus on a simple, recurring programming task: Implement "Game of Life", a cellular automaton devised by the British mathematician John Horton Conway in 1970. In multiple rounds of limited time the same problem is tackled using TDD and one constraint. This technique is used to focus on specific programmning techniques rather than finding a specific implementation for Game of life (although exploration is still encouraged). The goal of each round is not a finished implementation, but a clear insight into the applied 

![Game of Life](https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif)

* [Game of Life Rules](./GAME-OF-LIFE.md)
* [Constraints](./CONSTRAINTS.md)

## Getting Started
  
Requirements:

* Node.js (versions 9.x-10.x)

Optional Requirements: 

* Yarn - A different way to manage dependencies in for Javascript Projects
* NVM - [Node version Manager](https://github.com/creationix/nvm#installation)

Setup

1. Clone repo https://github.com/sinnerschrader/jscoderetreat.git
2. Change dir to the 'jscoderetreat' folder
3. npm install - installs all dependencies. Alternatively use yarn for that 
4. npm test - runs test framework. Alternatively use yarn for that

Test 

```shell
npm test 
```

Display a staring point for a visualization 

```shell
npm start 
```

