require('es6-promise')

'use strict'

function all (promise1, promise2) {
    return new Promise (function (fulfill, reject) {
        var counter = 0
        var outArray = []
        promise1.then(function (str) {
        outArray[0] = str
        counter ++ 
        if (counter === 2) {
            fulfill(outArray)
        }
    })
    promise2.then(function (num) {
        outArray[1] = num
        counter ++ 
        if (counter === 2) {
            fulfill(outArray)
        }
    })
})
}

all(getPromise1(), getPromise2()).then(console.log)
