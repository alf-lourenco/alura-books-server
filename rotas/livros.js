const { Router } = require('express')
const { getLivros } = require('../controladores/livros')
const router = Router()


router.get('/', getLivros)

router.post('/', (req, res) => {
   res.send("voce fez uma requisicao POST")
})

router.patch('/', (req, res) => {
   res.send("voce fez uma requisicao PATCH")
})
router.delete('/', (req, res) => {
   res.send("voce fez uma requisicao DELETE")
})

module.exports = router