import { Book } from '../entities/book';
import { DigitalBook } from '../entities/digitalBook';
import { IAuthorRepository } from '../repository/iauthor.repository';
import { IBookRepository } from '../repository/ibook.repository';

export class CreateBookService {
  constructor(
    private readonly bookRepository: IBookRepository,
    private readonly authorRepository: IAuthorRepository,
  ) {}

  async createBook(book: Book | DigitalBook): Promise<Book> {
    book.validate();

    const authorFound = await this.authorRepository.findAuthorById(book.authorId);
    if (!authorFound) {
      throw new Error('o autor informado não existe');
    }

    authorFound.quantidade_livros++;
    await this.authorRepository.updateQtdBooksAuthor(book.authorId, authorFound.quantidade_livros);
    const bookCreated = await this.bookRepository.create(book);
    return bookCreated;
    
  }
  
}
