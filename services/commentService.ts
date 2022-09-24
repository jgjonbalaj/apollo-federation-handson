import { Comment } from '../domain/comment';
import { db } from '../database/db';
import { DataSource } from 'apollo-datasource/src';

export interface ICommentService {
  getAllFromPost(postId: string): Array<Comment>;
  getAllFromAuthor(authorId: string): Array<Comment>;
}

export class CommentService implements ICommentService {
  private readonly comments: Array<Comment>;

  constructor() {
    this.comments = db.comments;
  }

  getAllFromAuthor(authorId: string): Array<Comment> {
    return this.comments.filter(comment => comment.authorId === authorId);
  }

  getAllFromPost(postId: string): Array<Comment> {
    return this.comments.filter(comment => comment.postId === postId);
  }
}
