import express from "express";

import BookController from "../controllers/book.controller";
import BookRepository from "../repositories/book.repository";
import { CreateBookUseCase, GetBookUseCase } from "../usecases";

// Create instances of dependencies
const bookRepository = new BookRepository();
const createBookUseCase = new CreateBookUseCase(bookRepository);
const getBookUseCase = new GetBookUseCase(bookRepository);
const bookController = new BookController(createBookUseCase, getBookUseCase);

const bookRouter = express.Router();

// Book routes
bookRouter.post("/", bookController.createBook);
bookRouter.get("/:id", bookController.getBook);

export default bookRouter;