import { AuthorRepository } from '../repository/author.repository';
import { CreateAuthorService } from '../services/createAuthor.service';


export const makeCreateAuthorService = (): CreateAuthorService => {
  return new CreateAuthorService(new AuthorRepository());
};
