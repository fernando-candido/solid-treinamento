import { Author } from '../entities/author';
import { AuthorModel } from '../index';
import { IAuthorRepository } from './iauthor.repository';

export class AuthorRepository implements IAuthorRepository{

  public async create(author: Author) {
    let authorCreated: Author;

      const bdAuthor = await AuthorModel.create({
        nome: author.name,
        quantidade_livros: author.qtdBooks,
      }).then((obj: any) => obj.populate('autor'));

      authorCreated = new Author(
        bdAuthor.nome,
        bdAuthor.quantidade_livros
      );

      return authorCreated;
    } 

  public async findAuthorById(id: string): Promise<Author | null >{
    return await AuthorModel.findOne({ _id: id });
  }

  public async updateQtdBooksAuthor(authorId: string, qtdBooks: number): Promise<void> {
    await AuthorModel.updateOne({ _id: authorId }, { quantidade_livros: qtdBooks });
  }

}
