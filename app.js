const express = require('express')
const app = express()
const axios = require("axios")
require('dotenv').config()

const api_key = process.env.API_KEY

app.get('/', (request, response) => {
  axios.get(`https://aviation-edge.com/v2/public/routes?key=${api_key}`)
    .then(({ data }) => {
      response.json({ data })
    })
})

app.listen(4000)