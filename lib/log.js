function log(type, config, msg) {
    let prefix 
    if(config.log.prefix) prefix = `${config.log.prefix}:${type[Object.keys(type)[0]].prefix}`
    else prefix = `${type[Object.keys(type)[0]].prefix}`
    let message = msg
    if(type[Object.keys(type)[0]].color) prefix = require('./color')(type[Object.keys(type)[0]].color, prefix)
    if(type[Object.keys(type)[0]].bold) message = require('chalk').bold(message)
    if(!type[Object.keys(type)[0]].exclude) console.log(prefix, message)
}

module.exports = function(type, config) {
    return function(msg) {
        if(!msg) console.log(`${require('chalk').red('toolio:log:error')} "log.${Object.keys(type)[0]}()" requires at least 1 argument`)
        else {
            if(config.log.console && config.log.console.on  && !config.log.console.exclude) log(type, config, msg)
            else if(config.log.console && config.log.console.on && config.log.console.exclude) {
                for(i = 0; i < config.log.console.exclude.length; i++) {
                    if(config.log.console.exclude[i] === Object.keys(type)[0]) {
                        type[Object.keys(type)[0]].exclude = { console: true }
                    }
                } log(type, config, msg)
            }
        }
    }
}