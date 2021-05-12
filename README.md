# joi-tz

[![Build Status](https://travis-ci.org/tjdavey/joi-tz.svg?branch=master)](https://travis-ci.org/tjdavey/joi-tz)
[![Coverage Status](https://coveralls.io/repos/github/tjdavey/joi-tz/badge.svg)](https://coveralls.io/github/tjdavey/joi-tz)
[![Known Vulnerabilities](https://snyk.io/test/github/tjdavey/joi-tz/badge.svg?targetFile=package.json)](https://snyk.io/test/github/tjdavey/joi-tz?targetFile=package.json)
[![npm version](https://badge.fury.io/js/joi-tz.svg)](https://badge.fury.io/js/joi-tz)

Provides a Joi rule to validate IANA timezone strings (eg. `Europe/London`, `America/New_York`, `Etc/GMT-8`) using [moment-timezone](https://momentjs.com/timezone/). 

Joi-tz supports and is tested against Joi 16.x or higher.

This project is forked from [joi-timezone](https://www.npmjs.com/package/joi-timezone) (unmaintained). That project remains functional for Joi 9.x-15.x.

## Installation:

**npm:** `npm install joi-tz`

**yarn:** `yarn add joi-tz`

## Usage

```js
import BaseJoi from 'joi';
import JoiTimezone from 'joi-tz';

const Joi = BaseJoi.extend(JoiTimezone);

Joi.timezone().validate('Melbourne/Australia');
// returns {error: null, value: 'Melbourne/Australia'}
```

### Rules

#### `returnMoment` - Convert to a moment zone object

When added to the validation chain returns a [moment zone object](https://momentjs.com/timezone/docs/#/zone-object/) which contains useful metadata about the timezone. 

```js
Joi.timezone().returnMoment().validate('America/Los_Angeles');
/*
    returns {
        error: null,
        value: {
            name    : 'America/Los_Angeles',
            abbrs   : ['PDT', 'PST'],
            untils  : [1414918800000, 1425808800000],
            offsets : [420, 480]
        }
    }
*/
```

## Compatibility

This library is tested for compatibility, and contains peer dependencies with the following versions. 


| Version                                                       | @hapi/joi 16.x | joi 16.x | joi 17.x |
|---------------------------------------------------------------|----------------|----------|----------|
| [4.1.0](https://github.com/tjdavey/joi-tz/releases/tag/v4.1.0) |                | ✅        | ✅        |
| [4.0.2](https://github.com/tjdavey/joi-tz/releases/tag/v4.0.2) | ✅              |          |          |
