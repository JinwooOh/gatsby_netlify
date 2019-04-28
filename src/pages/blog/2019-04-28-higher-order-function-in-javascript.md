---
cover: /img/code.jpg
templateKey: blog-post
title: Higher Order Function in Javascript
date: 2019-04-28T19:38:34.340Z
description: 'Learn What Higher Order Function is with Examples '
tags:
  - Javascript
---
## What is Higher Order Function 
Higher order function is a function that operates on other functions either by taking them as arguments or by returning them. 

As the definition says, we have two cases in a higher order function either: 
1. Taking a function as an argument
2. Returning a function.

If you are familiar with Javascript, you might already know a higher order function that is built in Javascript. For example, Array.prototype.map and Array.prototype.filter are higher order functions. 

Both map and filter receive a function and perform their functionalities with the given function. 

## Taking a Function as an Argument (Map and Filter)
### Map use case 
Let say we have an array of people and want to add “Mr. ” in front of each person’s name. We can achieve this easily by using map. 

```
const people = ["john", "Smith", "Sam"];
const addMr = people.map(function(person){
	return `Mr. ${person}`;
});
//addMr = [ 'Mr. john', 'Mr. Smith', 'Mr. Sam' ]
```

```
//ES6 version 
const people = ["john", "Smith", "Sam"];
const addMr = people.map(person => `Mr. ${person}`);
```

Since map can easily change the contents of an array, it is wildly used in React to manipulate JSX. 

### Filter use case
Similar to map, filter also takes a function as an argument. It is useful when we want data that pass a certain criteria. 
```
const age = [40, 22, 14, 54, 6];
const ageCanDrink = age.filter(function(arg){
	return arg > 17;
});
//ageCanDrink = [40, 22, 54]
```

```
//ES6 version
const age = [40, 22, 14, 54, 6];
const ageCanDrink = age.filter(arg => arg > 17);
```

## Returning a function
So far, we have seen two built-in higher order functions that receive a function as an argument. How about returning a function?  In this section, I will talk more in a higher order function that returns a function. 
```
// nutshell of a higher order function that returns a function
function someFn(num){
	return function(){
		return num + num
	}
}
```

If we call someFn(10), what do you think the output will be?
```
// it returns a function. 
someFn(10);
//ƒ (){
//		return num + num
//	}

// invoke the function!
someFn(10)();
// 20 
```

As we can see, someFn returns  the function, and we can invoke the function by calling the function with () syntax. 

Let see an exciting example than someFn. 
```
function greaterThan(n) {
  return m => m > n;
}
const greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // true
```
This is a good use-case of a higher order function that behaves as general function.
greaterThan function returns a function that validate whether given argument is greater than given another argument.
So, greaterThan10 variable holds a function like this: 
```
function(m){
	return m > 10; 
}
```
We can create many other functions based on greaterThan.
```
const greaterThan10 = greaterThan(10);
const greaterThan20 = greaterThan(20);
const greaterThan30 = greaterThan(30);
```

## Conclusion 
We have studied what a higher order function is. There are two cases. First, a higher order function can receive a function as an argument. Second, a higher order function return a function. 

I hope this article makes you understand a higher order function, and hopefully, you can use and understand the code that has a higher order function!

