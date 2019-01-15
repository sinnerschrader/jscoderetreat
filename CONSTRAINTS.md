# Constraints 

* [TDD with Refactoring](#tdd-with-refactoring)
* [Tell Don't Ask](#tell-dont-ask)
* [A Developer in Test](#a-developer-in-test)
* [Object Calisthenics](#object-calisthenics)
* [Silent Pairing](#silent-pairing)
* [Single Responsibility Principle](#single-responsibility-principle)
* [Conways Game of Life Hex](#conways-game-of-life-hex)

## TDD with Refactoring 

This is a good introduction constraint as it enforces a natural keyboard change and shows the more skilled partners how to moderate a not so well skilled Driver to code. The setup is well suited for TDD and participants should be encouraged NOT to finish but to experiment. 

![https://quintagroup.com/services/python/test-driven-development/tdd.png](https://quintagroup.com/services/python/test-driven-development/tdd.png)


Steps

**Switch Driver and Navigator on each Step**

1. Write one failing test describing a behaviour of your system
2. Make it pass by writing implementation code in the test function
3. Refacto  r as required or skip

## Tell Don't Ask

> Tell-Don't-Ask is a principle that helps people remember that object-orientation is about bundling data with the functions that operate on that data. It reminds us that rather than asking an object for data and acting on that data, we should instead tell an object what to do. This encourages to move behavior into an object to go with the data.

![https://martinfowler.com/bliki/images/tellDontAsk/sketch.png](https://martinfowler.com/bliki/images/tellDontAsk/sketch.png)

* The internal state of a class is not accessible
* A method call sends all the data needed to retrieve an answer
* Each class computes the output using only its internal state

## A Developer in Test


* Don’t delete the code from the previous session
* Delete only the existing tests
* Swap the code in-between pairs
* Your job now is to write software that tests the code.
* You are not allowed to change the existing code

## Object Calisthenics

Use as many as you feel comfortable. The more used, the better for the exercise.

[see](https://williamdurand.fr/2013/06/03/object-calisthenics/)

1. Use only one level of indentation per method
2. Don’t use the else keyword
3. Wrap all primitives and strings
4. Use only one dot per line
5. Don’t abbreviate
6. Keep all entities small
7. Don’t use any classes with more than two instance variables
8. Use first-class collections
9. Don’t use any getters / setters / properties

## Silent Pairing

1. You are not allowed to talk with your pair
2. No electronic or physical writing is allowed
3. Any communication will be made through code


## Single Responsibility Principle

> The single responsibility principle is a computer programming principle that states that every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class

* Exactly one assert per test
* Test one behaviour per test
* No util.js

It helps if you stay away from 

* No conditionals: if, switch, etc
* No try/catch


## Conways Game of Life Hex

¡[hexagoneal game of life](https://camo.githubusercontent.com/18e1274818f4fbdafd237853f8f072741750be6f/687474703a2f2f692e696d6775722e636f6d2f4a4e375a477a6f2e706e67)

Neighbors

1. There are six 1st tier neighbors
2. There are six 2nd tier neighbors
3. Live 1st tier neighbors weight 1.0
4. Live 2nd tier neighbors weight 0.3
5. Each cell has a weighted sum of all its 12 neighbors

Rules

Having an infinite 2D hexagonal universe
Being given an initial generation called a seed

These rules are applied simultaneously on tick

1. A live cell having less than 2.0 sum dies
2. A live cell having 2.0 - 3.3 lives on
3. A live cell having more than 3.3 dies
4. A dead cell having 2.3 - 2.9 becomes alive

[more](https://alexbolboaca.ro/coderetreat/the-coderetreat-problem-is-not-the-problem) 

