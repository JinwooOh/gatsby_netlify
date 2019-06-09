---
cover: /img/calendar.jpg
templateKey: blog-post
title: 'Moment.js, How to Calculate Number of Given Weekday Between two dates'
date: 2019-06-09T18:08:13.272Z
description: >-

  In this article, I will explain how to calculate total days from the given
  start and end dates and specific days of the weeks.
tags:
  - Javascript
---
Moment.js is powerful library for your application that needs to deal with dates and times.

It comes with numerous functions that we can parse, validate, and manipulate dates and times. 

For example, if given data is: 

```javascript
    startDate: 06/03/2019 //Monday
    endDate: 06/09/2019 //Sunday
    // Sunday through Saturday
    weekdayToCheck: [true, false, false, false, false, false, false] 
```

The function should return 1 since we have only one Sunday between those dates. 

Here is my solution and note that my start and end dates are Moment objects: 

```javascript
    const start = startDate.startOf('days'); 
    const end = moment().startOf('days'); //today
    //calculate only Tuesday
    const dailyInfo = [false, false, true, false, false, false, false]
    let totalDays = 0;
    
    dailyInfo.forEach((info, index) => {
      if (info === true) {
        let current = start.clone();
        if (current.isoWeekday() <= index) {
          current = current.isoWeekday(index);
        } else {
          current.add(1, 'weeks').isoWeekday(index);
        }
        while (current.isSameOrBefore(end)) {
          current.day(7 + index);
          totalDays += 1;
        }
      }
    });
```

Important part of calculation is this:

```javascript
    if (current.isoWeekday() <= index) {
      current = current.isoWeekday(index);
    } else {
      current.add(1, 'weeks').isoWeekday(index);
    }
```

We cannot simply add 7 days to calculate total days from the starting date. First, we need to determine whether current weekday is before or the same as target weekday. For example, if current weekday already passes target weekday, we don't want to count current week, so add 1 more week. Otherwise, we move current dates to target weekday as the starting point.
