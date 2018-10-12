const http = require('q-io/http') //no funciona import

http.read('http://localhost:1337') 
//OMG I WAS STUCK BECAUSE I WAS USING [https://](https://) AS THE TUTORIAL SAID 
.then(function (parsedJSON) {
    console.log(JSON.parse(parsedJSON))
})
.catch(console.error)