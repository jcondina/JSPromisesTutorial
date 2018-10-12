require('es6-promise')

function alwaysThrows () {
    throw new Error('OH NOES')
}

function iterate (arg) {
    console.log(arg)
    arg = arg + 1
    return arg
}

function errorReport (error) {
    console.log(error.message)
}

Promise.resolve(iterate(1)).then(iterate).then(iterate)
.then(iterate).then(iterate).then(alwaysThrows)
.then(iterate).then(iterate)
.then(iterate).then(iterate).then(iterate)
.catch(errorReport)
