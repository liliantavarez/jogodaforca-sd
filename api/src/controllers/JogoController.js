const Jogo = require("../model/Jogo");

module.exports = {
  async cadPergunta(req, res) {
    let novoJogo = new Jogo(req.body);
    await novoJogo.save();
    return res.json(novoJogo);
  },

  async verificaLetra(req, res) {
    const { id, letra } = req.body;
    try {
      const jogo = await Jogo.findById(id);
      const indexLetra = getIndexesOfLettersByWord(jogo.resposta, letra);
      if (indexLetra == -1) {
        return res.json({ message: "Letra não encontrada" });
      }
      return res.json(indexLetra);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },

  async start(req, res) {
    const qntCadastradas = await Jogo.count();
    const rand = Math.floor(Math.random() * qntCadastradas);
    const startJogo = await Jogo.findOne()
      .skip(rand)
      .select({ pergunta: true, resposta: true, _id: true });

    return res.json({
      id: startJogo._id,
      pergunta: startJogo.pergunta,
      quantidadeLetras: startJogo.resposta.length,
    });
  },
};
function getIndexesOfLettersByWord(resposta, letterToVerify) {
  const indexesOfLetters = [];
  resposta.split("").forEach((letra, index) => {
    if (letra.toLowerCase() == letterToVerify.toLowerCase())
      indexesOfLetters.push(index);
  });

  return indexesOfLetters;
}
