require('es6-promise')
const invalidJSON = process.argv[2]

function parsePromised () {
    return new Promise (function (resolve, reject) {
        resolve(JSON.parse(invalidJSON))
        reject(JSON.parse(invalidJSON))
    })
}

function errorReport (error) {
    console.log(error.message)
}

parsePromised().catch(errorReport)