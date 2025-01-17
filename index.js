require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/signin', (req, res) => {
    res.send('Successfully signed in')
  })

  app.get('/signup', (req, res) => {
    res.send('Successfully signed up')
  })

  app.get('/login', (req, res) => {
    res.send('Successfully logged in')
  })

  app.get('/logout', (req, res) => {
    res.send('Successfully logged out')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})