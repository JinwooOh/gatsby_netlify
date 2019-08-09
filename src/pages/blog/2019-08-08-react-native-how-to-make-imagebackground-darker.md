---
cover: /img/darkenimage.jpg
templateKey: blog-post
title: React Native - How to Make ImageBackground darker
date: 2019-08-09T03:43:23.672Z
description: How to Make ImageBackground darker in React Native
tags:
  - React Native
---
### Problem

React Native provides ImageBackground component which is similar to background-image in the web. 

With this component, we can set various things over the image like text or other images. 

```
return (
  <ImageBackground source={…} style={{width: ‘100%’, height: ‘100%’}}>
    <Text>Inside</Text>
  </ImageBackground>
);
```

I wanted to set background image darker to popup text, but applying style on ImageBackground component doesn't work since it's a wrapper of image and cannot apply rgba() to inline style. 

### Solution
Use custom Darken component

```
<ImageBackground source={...} style={{width: '100%', height: '100%'}}>
	<DarkenImg>
		<Text>Inside</Text>
	</DarkenImg>
</ImageBackground>
```

```
// Note that I am using styled-component
const DarkenImg = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
`
```
