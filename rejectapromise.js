require('es6-promise')

var er = new Error('REJECTED!')

'use strict'
var promise = new Promise(function (fulfill, reject) {
    setTimeout(() => reject(er) , 300)
})

function onReject(er) {
    console.log(er.message)
} 

promise.then(null, onReject) // 1st arg: on fulfill, 2nd arg: on reject
