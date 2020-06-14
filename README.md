# joi-tz

[![Build Status](https://travis-ci.org/tjdavey/joi-tz.svg?branch=master)](https://travis-ci.org/tjdavey/joi-tz)
[![Coverage Status](https://coveralls.io/repos/github/tjdavey/joi-tz/badge.svg)](https://coveralls.io/github/tjdavey/joi-tz)

Provides a Joi rule to validate IANA timezone strings using moment-timezone. 

This project is forked from the unmaintained `joi-timezone` and only supports Joi 16.x or higher. For Joi 9.x-15.x and support use [joi-timezone](https://www.npmjs.com/package/joi-timezone).

## Usage

Note: **requires** Joi version >= 16

### Installation

```js
import BaseJoi from 'joi';
import JoiTimezone from 'joi-timezone';

const Joi = BaseJoi.extend(JoiTimezone);

// Create a joi schema using the timezone validator;
const schema = Joi.timezone();
```

### Validation

```js
Joi.timezone().validate("Melbourne/Australia");
/*
  {
    error: null,
    value: "Melbourne/Australia"
  }
 */
```

### Rules

#### `returnMoment` - Convert to a moment timezone object

```js
Joi.timezone().returnMoment().validate("Melbourne/Australia");
/*
  {
    error: null,
    value: {
      ...moment object
    }
  }
 */
```


