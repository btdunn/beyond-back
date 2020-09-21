const https = require("https")

const options = {
  "method": "GET",
  "hostname": "example.com",
  "port": 4000,
  "path": "api endpoint",
  "headers": {
    "x-dreamfactory-api-key": "YOUR_API_KEY",
    "cache-control": "no-cache"
  }
}

const request = https.request(options, function(response){
  var chunks = [];

  response.on("data", function(chunk){
    chunks.push(chunk)
  })

  response.on("end", function(){
    let body = Buffer.concat(chunks)
    console.log(body.toString())
  })
})

request.end()