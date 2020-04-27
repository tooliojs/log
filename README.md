# @toolio/log

**Add life to your logs with chalk and more.**

[![CircleCI](https://circleci.com/gh/tooliojs/log.svg?style=shield)](https://circleci.com/gh/tooliojs/log)
[![npm (scoped)](https://img.shields.io/npm/v/@toolio/log)](https://www.npmjs.com/package/@toolio/log)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/tooliojs/log/blob/master/LICENSE.md)
[![Chat](https://img.shields.io/badge/chat-on%20discord-blue.svg)](https://discord.gg/UuNhTFN)

## Install
```
npm install @toolio/log
```

## Usage
```js
/* .toolio/config.js */

/* Check out @toolio/config for more info */
/* on how to create and modify your own configs. */

module.exports = {
    log: {
        console: {
            on: true,
            exclude: ['test']
        },
        type: {
            error: {
                prefix: 'error',
                color: 'red',
                bold: true
            },
            test: {
                prefix: 'test',
                color: 'cyan'
            }
        }
    }
}
```
```js
const log = require('@toolio/log') // or require('@toolio/log')(configs)

log.error('this error message will get logged only to the console')
log.test('this test message won\'t actually log')
```
**output:**

![@toolio/log example output.](https://raw.githubusercontent.com/arakilian0/images/master/toolio-log-usage-v2.png "@toolio/log example output.")

## Documentation
coming soon...

## License

MIT License

Copyright (c) 2020 Michael Arakilian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.