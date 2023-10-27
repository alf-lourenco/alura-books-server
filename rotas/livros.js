const { Router } = require('express')
const { getLivros, getLivro, postLivro } = require('../controladores/livros')
const router = Router()


router.get('/', getLivros)
router.get('/:id', getLivro)

router.post('/', postLivro) 

router.patch('/', (req, res) => {
   res.send("voce fez uma requisicao PATCH")
})
router.delete('/', (req, res) => {
   res.send("voce fez uma requisicao DELETE")
})

module.exports = router