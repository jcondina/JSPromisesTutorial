const http = require('q-io/http') 

http.read('http://localhost:7000/')
.then(function (idReceived) {
    return http.read('http://localhost:7001/' + idReceived)
})
.then(function (json) {
    console.log(JSON.parse(json))
})
.catch(console.error)

//WAS STUCK BECAUSE OF MISSING / AT THE END OF HTTP PATH
//ALSO, DID NOT KNOW THE ID RECEIVED WAS A JSON
