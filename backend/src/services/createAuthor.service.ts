import { Author } from "../entities/author";
import { IAuthorRepository } from "../repository/iauthor.repository";
import { IBookRepository } from "../repository/ibook.repository";


export class CreateAuthorService {

    constructor(
        private readonly authorRepository: IAuthorRepository,
    ) { }

    async createAuthor(author: Author): Promise<Author> {
        author.validate();
        const authorCreated = await this.authorRepository.create(author);
        return authorCreated;
      }

}