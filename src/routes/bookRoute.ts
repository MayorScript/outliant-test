import express from "express";
import validate from "../middlewares/validator"; // validator middleware
import bookSchema from "../schemas/bookSchema"; // validate schema
const bookController = require("../controllers/bookController");
const router = express.Router();

router.post("/create", bookController.createBook);
router.get("/get", bookController.getAllBooks)
router.delete("/delete/:id", bookController.deleteBook);

module.exports = router;
