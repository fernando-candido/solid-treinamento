import { BookRepository } from '../repository/book.repository';
import { GetAllBookService } from '../services/GetAllBook.service';



export const makeGetAllBookService = (): GetAllBookService => {
  return new GetAllBookService(new BookRepository());
};
