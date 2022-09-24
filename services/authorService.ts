import { Author } from '../domain/author';
import { db } from '../database/db';

export interface IAuthorService {
  getAll(): Array<Author>;
  getAuthor(id: string): Author | null;
}

export class AuthorService implements IAuthorService {
  private readonly authors: Array<Author>;

  constructor() {
    this.authors = db.authors
  }

  getAll(): Array<Author> {
    return this.authors;
  }

  getAuthor(id: string): Author | null {
    const authorIndex = this.authors.findIndex(author => author.id === id);

    if (!this.indexFound(authorIndex)) {
      return null;
    }

    return this.authors[authorIndex];
  }

  private indexFound(authorIndex: number) {
    return authorIndex >= 0;
  }
}
