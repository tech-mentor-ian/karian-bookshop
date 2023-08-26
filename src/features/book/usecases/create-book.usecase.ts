import BookRepository from "@features/book/repositories/book.repository";
import { Book } from "../models/book.model";

class CreateBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookData: Book): Promise<Book> {
    const book = new Book(bookData.id, bookData.title, bookData.author);
    return this.bookRepository.create(book);
  }
}

export default CreateBookUseCase;