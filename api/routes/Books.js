const { Router } = require("express");
const BookController = require("../controllers/BookController");

const router = Router();

router.post("/book/:authorId", BookController.createBook);

router.get("/book", BookController.getAllBooks);

router.get("/book/:bookId", BookController.getBook);

router.get("/book/author/:authorId", BookController.getBookFromAuthor);

router.delete("/book/:bookId", BookController.deleteBook);

router.put("/book/:bookId", BookController.updateBook);
module.exports = router;
