const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log(req);
  console.log(req.query);
  res.send('Hello World!')
})
app.get('/:slug/:second', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`Hello World! ${req.params.slug} and ${req.params.second}  `)
  })
app.get('/about', (req, res) => {
    res.send('I am about')
  })
app.get('/home', (req, res) => {
    res.send('I am Home')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})