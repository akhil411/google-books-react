const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const axios = require("axios");

// Matches with "/api/books"
router.route("/db")
  .get(booksController.findAll);
  // .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);


router.route("/")
  // .get(booksController.findBooks)
  .post(booksController.create);

 
router.get("/", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then(({ data: { items } }) => res.json(items))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
