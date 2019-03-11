---
cover: /img/typewriter.jpeg
templateKey: blog-post
title: 'How I build blog: Gatsby + Netlify CMS Starter'
date: 2019-03-11T03:35:00.350Z
description: |
  Why I choice Gatsby JS and Netlify CMS to make and manage this blog
tags:
  - Gatsby
  - Netlify
  - Javascript
---
There are many ways to make a blog. The popular choice would be Wordpress. It provides its content management system (CMS), and we don't need to code for making the site looks nice. That's why many people choice Wordpress over others.
In this post, I explain why I choose Gatsby JS and Netlify CMS.

## What is Gatsby JS and Why

[Gatsby](https://www.gatsbyjs.org/) is a framework based on React, and has a rich plugin ecosystem. When I made the blog, I wanted to learn GraphQL, which is an alternative way to query data from a database. Fortunately, Gatsby is powered by GraphQL.

**Benefits of using Gatsby**

1. Blazing fast: pre-rendered HTML and automatic loading of JS files2. It provides good documents and tutorial with boilerplates 3. It is Javascript, APIs, and Markup (JAM)stack that is easier scaling. I only need to manage markup files for the blog. 

## Data Storage & Hosting: GitHub & Netlify

Netlify's deploying function is triggered when my blog repository in GitHub is changed, and then it automatically builds and deploys the site for me. 
My workflow is like this: 

1. I upload a blog post through Netlify CMS (manual work)
2. Netlify CMS updates my blog repository in GitHub (automatic)
3. Netlify's deploying function is triggered to rebuild and deploy the site again. (automatic)

## CMS: Netlify CMS

![](/img/netlifycms.png)

[Gatsby + Netlify CMS Starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms) comes with Netlify CMS. For blogging purpose, default CMS is enough, but a user can modify and add new features.

## Conclusion

I am satisfied with current my workflow and its speed. The site has almost 0 second loading time from page to page, and easy to maintain with Netlify CMS and its automatic build & deploy functionality. If you are a web developer and haven't had experience of Gatsby, I highly recommend playing around Gatsby.
