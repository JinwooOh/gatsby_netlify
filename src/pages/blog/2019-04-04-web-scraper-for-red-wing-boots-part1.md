---
cover: /img/web.jpg
templateKey: blog-post
title: Web Scraper for Red Wing Boots Part1
date: 2019-04-04T18:49:39.056Z
description: 'This article is about the process of my personal project: Red Wing Hunter. '
tags:
  - GraphQL
  - Project
  - Javascript
  - Node
  - Web Scraping
---
## Motivation

I love boots, but it’s quite expensive to buy a brand new one. I have a few favorite brands Red Wing, Alden, and Viberg. 

Unlike others, Red Wing boots go on sale regularly. Popular sites for finding in sale products or factory 2nd products are [Nordstrom Rack ](http://nordstromrack.com/) and  [Sierra Trading Post](https://www.sierra.com/) .

Because of that I occasionally check those websites to see if there are discounted Red Wing Boots.

Checking those sites every time are time-consuming. We have to visit two different sites and need to filter specific boots size. 
That makes me tackle this project. 

## Process

Since this is a personal project, I can choose whatever technologies I like. I chose Node and GraphQL for the backend. I can do the Express library instead of GraphQL, but I decided to use GraphQL for the learning purpose. 

Cheerio is a popular library for JS web scrapping. It gathers HTML information and manipulates with Query like syntax. 

To do web scraping, I need to view source code and find meaningful information that I can use, but there is one problem. Most of the websites are doing DOM manipulating through Javascript, and this manipulated DOM is not visible in the browser’s source code; this is why Inspect and View Source Code show different DOM elements. 

One thing that I can do is that go to Network tab in Chrome browser and figure out what request is sending to their server. While doing this, I noticed that Nordstrom Rack uses API to query product information, and it responses with JSON file, which is good news since I can use the API instead of doing web scraping. 

For Sierra Trading Post, I can scrap entire HTML, and I haven’t noticed any missing products. So I used Cheerio to select specific products. 

How about database do I need a database to store information?  I am only interested in current product information, so I decided not to use a database. 

## Result

Now, I can query product information that is on sale on both Nordstrom Rack and STP and shows a list of products.

Here is a final result that shows the query result. 

![GraphQL Query Example](/img/query-example.png "GraphQL Query Example")

If you want to see the code and play around check my Github page. [GitHub - JinwooOh/redwingHunter: Web scraper for Red Wing Boots](https://github.com/JinwooOh/redwingHunter)

## Next

Next step is implementing frontend. I am thinking to use Next.JS which is React framework. 
Once I finish with the frontend, I will post the process.
