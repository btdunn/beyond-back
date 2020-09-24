const express = require('express')
const app = express()
const axios = require("axios")
const cors = require("cors")
const bodyParser = require("body-parser")
require('dotenv').config()

app.use(cors())

app.use(bodyParser.json())

const api_key = process.env.API_KEY

app.get('/', (request, response) => {
  axios.get(`https://aviation-edge.com/v2/public/routes?key=${api_key}`)
    .then(({ data }) => {
      response.json({ data })
    })
})

app.listen(4000)