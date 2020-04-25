module.exports = function(log) {
    let _log; !log ? _log = require('@toolio/config') : _log = log
    if(_log && _log.log) {
        if(_log.log.type) {
            if(Object.keys(_log.log.type).length) {
                let api = {}
                for(prop in _log.log.type) {
                    let type = {}
                    type[prop] = _log.log.type[prop]
                    api[prop] = require('./lib/log')(type, _log)
                }
                return api
            } else { console.log('toolio:log:error: no log types are defined'); process.exit() }
        } else { console.log('toolio:log:error: no log types are defined'); process.exit() }
    } else { console.log('toolio:log:error: no log object detected'); process.exit() }
}