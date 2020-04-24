module.exports = function(color, prefix) {
    switch(color) {
        case 'black': return require('chalk').black(prefix); break
        case 'red': return require('chalk').red(prefix); break
        case 'green': return require('chalk').green(prefix); break
        case 'yellow': return require('chalk').yellow(prefix); break
        case 'blue': return require('chalk').blue(prefix); break
        case 'magenta': return require('chalk').magenta(prefix); break
        case 'cyan': return require('chalk').cyan(prefix); break
        case 'white': return require('chalk').white(prefix); break
        case 'gray': return require('chalk').gray(prefix); break
        default: return prefix
    }
}