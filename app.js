const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.json({
    message: 'hey',
  })
})

app.listen(4000)