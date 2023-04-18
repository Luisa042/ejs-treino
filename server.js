const express = require('express')
const server = express()

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
    const items = [
        {
            title: "D",
            message: "Desenvolver aplicações e serviços de forma simples"
        },
        {
            title: "E",
            message: "EJS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "Muito fácil de usar"
        },
        {
            title: "A",
            message: "Aprovado!"
        },
        {
            title: "I",
            message: "install EJS"
        },
        {
            title: "S",
            message: "Sintaxe simples"
        },
    ];
    res.render('pages/index', {qualities: items})
})

server.get('/sobre', (req,res) => {
    res.render('pages/about')
})

server.listen(8080, () => {console.log('server running on port 8080')})