import { Post } from '../domain/post';
import { db } from '../database/db';
import { DataSource } from 'apollo-datasource/src';

export interface IPostService {
  getAll(): Array<Post>;
  getPost(id: string): Post | null;
  getAllPostsFromAuthor(authorId: string): Array<Post>;
}

export class PostService implements IPostService {
  private readonly posts: Array<Post>;

  constructor() {
    this.posts = db.posts;
  }

  getAll(): Array<Post> {
    return this.posts;
  }

  getPost(id: string): Post | null {
    const postIndex = this.posts.findIndex(post => post.id === id);

    if (!this.indexFound(postIndex)) {
      return null;
    }

    return this.posts[postIndex];
  }

  getAllPostsFromAuthor(authorId: string): Array<Post> {
    return this.posts.filter(post => post.authorId === authorId);
  }

  private indexFound(postIndex: number) {
    return postIndex >= 0;
  }
}
