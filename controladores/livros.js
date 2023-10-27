const { getTodosLivros, getLivrosPorId, insereLivro, modificaLivros, deletaLivroid } = require("../servicos/livros")

function getLivros(req, res) {
   try {
      const livros = getTodosLivros()
      res.send(livros)
   } catch (error) {
      res.status(500)
      res.send(error.message)
   }
}

function getLivro(req, res) {
   try {
      const id = req.params.id

      if (id && Number(id)) {
         const livro = getLivrosPorId(id)
         res.send(livro)

      } else {
         res.status(422)
         res.send("Id inválido!")
      }
   } catch (error) {
      res.status(500)
      res.send(error.message)
   }
}

function postLivro(req, res) {
   try {
      if (req.body.nome && req.body.id) {

         const livroNovo = req.body
         insereLivro(livroNovo)
         res.status(201)
         res.send("Livro inserido com sucesso")
      } else {
         res.status(422)
         res.send("Preencha todos os campos")
      }

   } catch (error) {

   }
}

function patchLivro(req, res) {
   try {
      const id = req.params.id
      if (id && Number(id)) {
         const body = req.body
         modificaLivros(body, id)
         res.send("item modificado com sucesso")

      } else {
         res.status(422)
         res.send("Id inválido!")
      }

   } catch (error) {
      res.status(500)
      res.send(error.message)
   }
}

function deleteLivro(req, res) {
   try {
      const id = req.params.id
      if (id && Number(id)) {
         deletaLivroid(id)
         res.send("Livro excluido")

      } else {
         res.status(422)
         res.send("Id inválido!")
      }

   } catch (error) {
      res.status(500)
      res.send(error.message)
   }
}
module.exports = {
   getLivros,
   getLivro,
   postLivro,
   patchLivro,
   deleteLivro
}
