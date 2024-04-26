const { json } = require('body-parser')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/getName', function(req, res) {
    res.status(400);
    res.json({ name: 'Shrieya'});
})

console.log('Listening to port 3000')
app.listen(3000)


app.put('/getName', function(req, res) {
    res.status(400);
    res.json({ name: 'Shrieya'});
})