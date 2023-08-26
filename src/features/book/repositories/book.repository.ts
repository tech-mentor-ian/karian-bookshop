import { Book } from "../models/book.model";
import IBookRepository from "./book.repository.interface";

class BookRepository implements IBookRepository {
  async create(book: Book): Promise<Book> {
    return Book.create(book);
  }

  async findById(id: string): Promise<Book | null> {
    return Book.findOne({ where: { id } });
  }
}

export default BookRepository;