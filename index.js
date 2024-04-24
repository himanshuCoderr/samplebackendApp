require("dotenv").config()

const express = require('express')
const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World! how are  you ')
})

app.get('/twitter', (req, res) => {
    res.send('Hey You are on twitter now !')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})