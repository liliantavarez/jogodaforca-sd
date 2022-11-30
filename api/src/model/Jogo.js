const mongoose = require('mongoose')

const jogoSchema = new mongoose.Schema({
    pergunta: {
        type: String,
        required: true
    },
    resposta: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Jogo', jogoSchema)