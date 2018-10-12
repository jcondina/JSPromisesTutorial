require('es6-promise')

function attachTitle (arg) {
    return ('DR. ' + arg)
}

var promise = new Promise (function (fulfill, reject) {
    fulfill('MANHATTAN')
}).then(attachTitle).then(console.log)
