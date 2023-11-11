const { Router } = require("express");
const AuthorController = require("../controllers/AuthorController");

const router = Router();

router.get("/author", AuthorController.getAllAuthors);

router.get("/author/:authorId", AuthorController.getAuthor);

router.post("/author", AuthorController.createAuthors);

router.delete("/author/:authorId", AuthorController.deleteAuthor);

router.put("/author/:authorId", AuthorController.updateAuthor);

module.exports = router;
