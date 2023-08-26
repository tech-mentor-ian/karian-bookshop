import { Book } from "../models/book.model";

interface IBookRepository {
  create(book: Book): Promise<Book>;
  findById(id: string): Promise<Book | null>;
}

export default IBookRepository;