const database = require("../models");

class Book {
  static async createBook(req, res) {
    try {
      const { authorId } = req.params;
      const { title, publish_year } = req.body;

      // Verificar se os campos obrigatórios foram fornecidos no corpo da solicitação
      if (!title || !publish_year) {
        return res
          .status(400)
          .json({ error: "Campos title e publish_year são obrigatórios" });
      }

      // Criar um novo livro no banco de dados
      const newBookCreated = await database.Books.create({
        title,
        publish_year,
        author_Id: Number(authorId), // Certifique-se de que o nome do campo corresponde ao modelo
      });

      res.status(200).json(newBookCreated);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  static async getAllBooks(req, res) {
    try {
      const allBooks = await database.Books.findAll();

      res.status(200).json(allBooks);
    } catch (e) {
      res.status(500).json(e.messsage);
    }
  }

  static async getBook(req, res) {
    const { bookId } = req.params;
    try {
      const Book = await database.Books.findOne({
        where: {
          id: bookId,
        },
      });

      res.status(200).json(Book);
    } catch (e) {
      res.status(500).json(e.messsage);
    }
  }

  static async getBookFromAuthor(req, res) {
    const { authorId } = req.params;
    try {
      const Book = await database.Books.findOne({
        where: {
          author_id: authorId,
        },
      });

      res.status(200).json(Book);
    } catch (e) {
      res.status(500).json(e.messsage);
    }
  }

  static async deleteBook(req, res) {
    const { bookId } = req.params;
    try {
      await database.Books.destroy({
        where: {
          id: Number(bookId),
        },
      });

      res.status(200).json({ mensagem: `id ${bookId} foi deletado` });
    } catch (e) {
      console.log(e);
      res.status(500).json(e.messsage);
    }
  }

  static async updateBook(req, res) {
    const { bookId } = req.params;
    const newData = req.body;
    try {
      await database.Books.update(newData, {
        where: {
          id: Number(bookId),
        },
      });

      const Book = await database.Books.findOne({
        where: {
          id: Number(bookId),
        },
      });

      res.status(200).json(Book);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.messsage);
    }
  }
}

module.exports = Book;
