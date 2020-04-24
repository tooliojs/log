# Changelog

## v0.2.0 - Initial commit
- Reason it's v0.2 is because this package is a rewrite of @acidjs/log
- Exports a function that may or may not take an argument (has default)
    - That argument would be the config object
    - The options that it takes right now are:
    ```js
    log: {
        console: {
            on: [boolean],      // logs to the console if true
            exclude: [array]    // if on, excludes types
        }
    }
    ```

    - Then create `types` to basically build `your own logger`:

    ```js
    log: {
        console: {
            on: [boolean],      // logs to the console if true
            exclude: [array]    // if on, excludes types
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

    ```
    - Finally use your log types:
    ```js
    const log = require('@toolio/log')({ log })

    log.error('this error message will get logged only to the console')
    log.test('this test message won\'t actually log')
    ```