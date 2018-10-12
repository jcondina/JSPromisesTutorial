require('es6-promise')

'use strict'

var firstPromiseGiven = first()

var secondPromiseGiven = firstPromiseGiven.then(function (secretValue) {
    return second(secretValue)
})

secondPromiseGiven.then(console.log)