require('es6-promise')

var resolvi3 = Promise.resolve('SUCCESS')
var denega3 = Promise.reject(new Error('FAILURE'))

denega3.catch((error) => console.log(error.message))
resolvi3.then(console.log)