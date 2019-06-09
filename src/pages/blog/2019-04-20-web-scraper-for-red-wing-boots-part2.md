---
cover: /img/redwingboots.jpg
templateKey: blog-post
title: Web Scraper for Red Wing Boots Part2
date: 2019-04-20T20:44:21.935Z
description: This is part 2 of  Red Wing boots web scraper.
tags:
  - GraphQL
  - Project
  - Javascript
  - Node
  - React
  - Web Scraping
---
[Read part 1](https://jinwoocode.com/blog/2019-04-04-web-scraper-for-red-wing-boots-part1/)

### Front end Technologies

I tried to use Next.js(https://nextjs.org/) which is the React framework. It brings benefits like routing and a simple set-up process.

To use GraphQL on the client side, I needed to use Apollo, and a graphql-tag library, which allows a developer to query with a template literal tag.

```javascript
const STP_QUERY = gql`
  query STP_QUERY($size: Float) {
    getSierra(size: $size) {
      name
      price_sale
    }
  }
`;
```

After declaring queries, I modulize each shop as a component.
This component makes easier to add another shop in the future.

```javascript
<ShopQuery
  query={STP_QUERY}
  queryMethod="getSierra"
  size={parseFloat(this.state.size)}
/>
```

If you want to see the code, check my [Github Page](https://github.com/JinwooOh/redwingHunter).

### Deployment

I decided to use Heroku for both front-end and back-end.

One gotcha is that I need to change script for front-end because Heroku uses their port, and also we need post build for Next.js

package.json file:

```javascript
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start -p $PORT",
    "export": "npm run build && next export",
    "heroku-postbuild": "next build"
  },
```

### Result

It is my first GrapQL project, and I like the fact that I can write data type and extract the data that is  what I want. Also, it works well with Node and React.

The live version is available [here](https://redwinghunter-next-prod.herokuapp.com).

![Red Wing Hunter](/img/redwinghunter_demo.png "Red Wing Hunter")
