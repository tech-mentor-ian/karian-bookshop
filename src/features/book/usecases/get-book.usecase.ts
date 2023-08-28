import BookRepository from "../repositories/book.repository";
import { Book } from "../models/book.model";

class GetBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookId: string): Promise<Book | null> {
    const book = await this.bookRepository.findById(bookId);
    return book;
  }
}

export default GetBookUseCase;
