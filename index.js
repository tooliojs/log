module.exports = (function(_log=require('@toolio/config')) {
    if(_log && _log.log && _log.log.type) {
        let log = _log.log
        if(Object.keys(log.type).length) {
            let api = {}
            for(prop in log.type) {
                let type = {}
                type[prop] = _log.log.type[prop]
                api[prop] = require('./lib/log')(type, _log)
            }
            return api
        } else return console.log('error: no log types are defined')
    } else return console.log('error: no log types are defined')
})()