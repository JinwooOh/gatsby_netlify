---
cover: /img/toolbox.jpg
templateKey: blog-post
title: Javascript Tool Box for Your Next Coding Interview
date: 2019-03-19T04:31:05.595Z
description: >-
  Small tips and tricks that can be useful in your next whiteboard technical
  coding interview
tags:
  - Interview
  - Javascript
---
May tech companies are doing a whiteboard technical coding interview for their hiring process, and most of times candidates can choose any programming language that they are comfortable with. 

In my opinion, high-level languages like Javascript and Python are an excellent option for coding exercise, because I don't have to think about data types deeply. Also, those languages provide some built-in data structures that can be written in a short amount of time. 

While I was preparing a technical coding interview (and am still preparing), I made a note that can be useful for preparing coding interview. Sometimes we need to know specific tricks and tips, because in an interview environment, we cannot google or reference documents. 

The note is specifically for Javascript and I will add more later if I find any other tips that can be useful for an interview!



## Remove all non-alphanumeric chars

    s = s.replace(/[^a-zA-Z0-9]/g, "");

## Exponentiation operator

    x ** y // same as Math.pow(x, y)

## Deep copy of 2d array

    let copy = matrix.map(arr => 
            arr.slice()
        );

## Character to Integer 

    let char = "9"
    char.charCodeAt(0)-48;

## Manipulate String: String.prototype.slice()

The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

    var str = 'The quick brown fox jumps over the lazy dog.';
    
    console.log(str.slice(31));
    // expected output: "the lazy dog."
    
    console.log(str.slice(4, 19));
    // expected output: "quick brown fox"
    
    console.log(str.slice(-4));
    // expected output: "dog."
    
    console.log(str.slice(-9, -5));
    // expected output: "lazy"

## Map vs Set

Map: a key can be anything such as array and function. It maintains insertion order

Set: it stores only value / not key. It doesn't allow a duplication

## 2D Array Declaration

The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

    //Array.from(arrayLike[, mapFn[, thisArg]])
    let table= Array.from(Array(s.length), () => new Array(s.length).fill(false));

## substring() vs substr()

The difference is in the second argument. The second argument to substring is **the index to stop** at (but not include), but the second argument to substr is **the maximum length to return.**

## Map 

    // Map keeps insertion order
    var myMap = new Map();
    myMap.set('0', 'foo');
    myMap.set(1, 'bar');
    myMap.set({}, 'baz');
    
    var mapIter = myMap.keys();
    
    // Use next to access next key or value 
    console.log(mapIter.next().value); // "0"
    console.log(mapIter.next().value); // 1
    console.log(mapIter.next().value); // Object


## Handle NaN value

```
a = a || 0 // if a is not a number, assign 0.
```

## JS pass by reference vs pass by value

Objects and arrays can only pass by reference: 

In Pass by Reference, Function is called by directly passing the reference/address of the variable as the argument. Changing the argument inside the function affect the variable passed from outside the function. In Javascript **objects** and **arrays** follows pass by reference.
[source](https://medium.com/nodesimplified/javascript-pass-by-value-and-pass-by-reference-in-javascript-fcf10305aa9c)
