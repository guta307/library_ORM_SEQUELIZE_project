const database = require("../models");

class Author {
  static async createAuthors(req, res) {
    try {
      const newAuthor = req.body;

      const newAuthorCreated = await database.Authors.create(newAuthor);

      res.status(200).json(newAuthorCreated);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.messsage);
    }
  }

  static async getAllAuthors(req, res) {
    try {
      const allAuthors = await database.Authors.findAll();

      res.status(200).json(allAuthors);
    } catch (e) {
      res.status(500).json(e.messsage);
    }
  }

  static async getAuthor(req, res) {
    const { authorId } = req.params;
    try {
      const Author = await database.Authors.findOne({
        where: {
          id: authorId,
        },
      });

      res.status(200).json(Author);
    } catch (e) {
      res.status(500).json(e.messsage);
    }
  }

  static async deleteAuthor(req, res) {
    const { authorId } = req.params;
    try {
      await database.Authors.destroy({
        where: {
          id: Number(authorId),
        },
      });

      res.status(200).json({ mensagem: `id ${authorId} foi deletado` });
    } catch (e) {
      console.log(e);
      res.status(500).json(e.messsage);
    }
  }

  static async updateAuthor(req, res) {
    const { authorId } = req.params;
    const newData = req.body;
    try {
      await database.Authors.update(newData, {
        where: {
          id: Number(authorId),
        },
      });

      const Author = await database.Authors.findOne({
        where: {
          id: Number(authorId),
        },
      });

      res.status(200).json(Author);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.messsage);
    }
  }
}

module.exports = Author;
