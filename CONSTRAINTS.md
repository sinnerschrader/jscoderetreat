# Constraints 

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

## Conways Game of Life Hex

Conway’s Game of Life - Hex

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