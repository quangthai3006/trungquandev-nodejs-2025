import express from 'express'

const app = express()

const port = 8080
const hostname = 'localhost'

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/test', (req, res) => {
    res.send('Hello Test')
  })

app.listen(port, () => {
    console.log(`Hello World, I'm running server at http://${hostname}:${port}`)
})