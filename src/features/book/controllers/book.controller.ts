import { Request, Response } from "express";
import { CreateBookUseCase, GetBookUseCase } from "../usecases";
import { Book } from "../models/book.model";

class BookController {
  constructor(
    private createBookUseCase: CreateBookUseCase,
    private getBookUseCase: GetBookUseCase
  ) {}

  async createBook(req: Request, res: Response) {
    const bookData: Book = req.body;
    const createdBook = await this.createBookUseCase.execute(bookData);
    res.json(createdBook);
  }

  async getBook(req: Request, res: Response) {
    // Handle get book logic
  }
}

export default BookController;
