import BookRepository from "../repositories/book.repository";
import { Book } from "../models/book.model";

class CreateBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookData: Book): Promise<Book> {
     // Create a new instance of the Book model using the alias
    //  const newBook = new Book({
    //   title: bookData.title,
    //   author: bookData.author,
    // });

    const book = new Book(bookData);
    return this.bookRepository.create(book);
  }
}

export default CreateBookUseCase;