---
cover: /img/alphabet.jpg
templateKey: blog-post
title: Three ways to check a palindrome in Javascript
date: 2019-03-03T22:45:19.601Z
description: >-
  In this post, I will explain how to solve a question: check whether the given
  string is a palindrome.
tags:
  - algorithm
  - palindrome
  - javascript
---

Have you heard of a palindrome? A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.


First, let's define and clarify the question before solving the problem.


Return true if the given string is a palindrome. If not, return false, and let's assume that input doesn't contain white spaces or non-characters, such as "#", "." and "?".

## Here are some test cases to consider
| input   |      output      |
|----------|:-------------:|
| "11" |  true |
| "a" |    true   |
| "noon" | true |
| "noop" | false |


## 1. Reverse string and compare with the original string

The definition of palindrome gives us a hint to solve the question: "A palindrome is a word, phrase, or sequence that reads the same backward as forward."

So it means that the original string has to be the same with reversed string.

How to reverse a string in Javascript? We can utilize the built-in functions. JS has reverse() function to reverse array. However, it is an Array's prototype. Therefore we need to convert String to Array first.

```javascript
  let arr = s.split("") //convert string to array
  let reversed = arr.reverse() //reverse an array
  let convertToString = reversed.join("") //convert array to string
```

We can write this to one line like this,

```javascript
  let reversedString = s.split("").reverse().join("");
```

and then simply compare with the original string.
```javascript
  function isPalindrome(s){
      return s === s.split("").reverse().join("");
  }
```

If reverse function's time complexity is O(n), then this approach's time complexity will be still O(n)

The main advantage of this approach is the following:  readability, linear time complexity, and constant space complexity

## 2. Use two pointers

Let's observe an example. If an input is "noon", we should return true. As we can see, the first index of string and the last index of string has to be the same. We can use this fact that comparing the first index and last index, and gradually increase the first index and decrease the last index until two indices meet each other.

Here is our second solution.

```javascript
  function isPalindrome(s){
      let p1 = 0;
      let p2 = s.length - 1 // last index
      while(p1 < p2){
          if(s[p1] !== s[p2]) return false;
          p1++;
          p2--;
      }
      return true;
  }
```

What if we have an empty string, which should return true? In this case, we skip while loop and return true, which is our desired output. One character, such as "a" also return true since we are skipping the while loop.

What is the main advantage of this solution?

Let's imagine that if we have a super long string, such "a...(trillion lengths of string)...b" We know that the function should return true since first and last characters are not the same. It means that we don't need to compare all of the characters and we can terminate the function earlier.

Our first solution always has O(n) time complexity, but in the second solution with the best case, it runs faster than the first solution.

## 3. Recursion

If you are a person who likes a sophisticated and elegant solution, this is the solution for you.

It is similar to the second solution, but we recursively call the function to reduce the size of the array to check whether it is palindrome or not.

```javascript
  function isPalindrome(s){
    return helper(s, 0, s.length-1);
  }

  function helper(s, i, j){
    //base case
    if(i === j) return true;
    //when two characters are not the same
    if(s[i] !== s[j]) return false;
    if(i < j){
      i++;
      j--;
      //recursion call
      return helper(s, i, j);
    }
    //we compared all of characters and couldn't find anything wrong
    return true;
  }
```

The main drawback is that we can have a situation where maximum call stack size is exceeded

Here is an example.

```javascript
  // RangeError: Maximum call stack size exceeded
  let longStr = "noo"
  for(let i = 0; i < Math.pow(3, 10); i++){
    longStr+= "o"; // we will add 0 59049times
  }
  longStr+="n";
  console.log(isPalindrome(longStr));
```

Even though we have a base case to terminate recursion, this happens when we call a function numerous times, which causes the call stack limit.

In a real world application, I heard that recursion is not often used since it's complex and hard to track down the code. However, in some cases, recursion is useful, such as Fibonacci numbers

```javascript
  function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
```

This is easy to understand and does not require any fancy features of the language.

## Conclusion
All of the solutions are good, but should probably be used in a different situation. 
* If you care about readability: solution 1 
* Time complexity is matter: either solution 1 or 2


