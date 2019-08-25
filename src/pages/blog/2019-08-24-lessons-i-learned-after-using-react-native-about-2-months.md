---
cover: /img/mobilecode.jpg
templateKey: blog-post
title: Lessons I Learned after Using React Native about 2 Months
date: 2019-08-24T23:08:14.685Z
description: >-
  Last 2 months I have developed a React Native application, and I want to share
  what I feel about React Native and some challenges that I encounter.
tags:
  - React Native
---
I have one year of React experience that I gained from my personal projects.

Even though I didn't have experience of React Native, I was hired to develop a React Native application. I spent around one week to learn React Native. For me, the best way to learn new technology is creating a personal project with that technology, so that I know what I don't know and I can enhance what I already knew.  

I barely finished the project, and I had to develop a React Native application.

## Let's Start the Project!

Do you know React Native is still in Beta? Even though it was released four years ago, the current version is still below 1.00. 
I think one reason why is still in Beta is that setting up React Native project is challenging. If you don't have experience of mobile development, you might have a hard time to set up on both Android and iOS, updating Android SDK, Xcode, installing React Native Debugger, etc. There are many configurations that you need to do to run a project. Also, you have to decide whether your team is going to use Expo or React Native CLI. Both starting points have pros and cons. One plus side is that React Native's official site provides good step by step tutorial to set up the project 
[Getting Started · React Native](https://facebook.github.io/react-native/docs/getting-started)

Other than that, it was quite smooth transit from React to React Native. Both technologies share the same concept, language, and the workflow.

## Let's Talk about Development Side
I can use CSS, that's great! Well, you have to know a few exceptions. For example, React Native only supports FlexBox with a few exceptions like default flex-direction in React Native is column instead of a row, and a unit of measurement is dp instead of pixel. 

Same code for both platforms. It's awesome! But now, you have to test both platforms. Even though iOS and Android share the same codebase, many time outcomes are different. For example, default date picker of iOS and Android is different, and we need to test both to see if results are what we expect. I had one situation where the application worked great on iOS and didn't work on Android, and I had to debug what caused the issue. 

A mobile application is a smaller version of a web application. 
If you think if this statement is true and have to develop a mobile application with React Native, you might have to rethink. A mobile app and a web app are two different platforms. Before I started the project, I couldn't think about routing issue. In a web app, we can use a URL to navigate the application, but in a mobile app, we don't have a URL. Luckily react-native-navigation library provides a great solution for that. 

I faced more challenges than I list here. There are ways to solve the problems, but certainly, the resources are limited compared to React community. 

Overall I enjoyed the development, especially the fact that I can make a mobile application with web technology. Also, I learned that diving into mobile app development without knowing its limitation might cause more than development time than I thought, and it is hard to measure the right development time.  
 

