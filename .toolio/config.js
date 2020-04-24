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