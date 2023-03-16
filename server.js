const express = require('express')
const server = express()

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
    res.render('index')
})

server.get('/sobre', (req,res) => {
    res.render('about')
})

server.listen(8080, () => {console.log('server running on port 8080')})