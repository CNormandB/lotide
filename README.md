# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @born_nomad/lotide`

**Require it:**

`const _ = require('@born_nomad/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns the first item of an array
* `function2(tail)`: removes the first item of an array and returns the rest
* `function3(middle)`: identifies and returns the middle item(s) in an array