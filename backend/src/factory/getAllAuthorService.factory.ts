import { AuthorRepository } from '../repository/author.repository';
import { GetAllAuthorService } from '../services/GetAllAuthor.service';


export const makeGetAllAuthorService = (): GetAllAuthorService => {
  return new GetAllAuthorService(new AuthorRepository());
};
