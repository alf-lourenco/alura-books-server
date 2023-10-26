const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
   try {
      throw new Error("teste")
      res.send("Óla Alfredooooo")
   } catch (error) {
      res.status(500)
      res.send(error.message)
   }
})

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