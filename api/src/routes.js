const express = require('express')
const routes = express.Router()

const jogoController = require('./controllers/JogoController');

routes.post('/verificaletra', jogoController.verificaLetra)
routes.get('/start', jogoController.start)
routes.post('/cadPergunta', jogoController.cadPergunta)
routes.get('/', (req, res) => {
    res.send('Oi')
})

module.exports = routes