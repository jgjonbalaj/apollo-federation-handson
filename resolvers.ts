import { AuthorService, IAuthorService } from './services/authorService';
import { IPostService, PostService } from './services/postService';
import { CommentService, ICommentService } from './services/commentService';
import { Author } from './domain/author';
import { Post } from './domain/post';
import { Comment } from './domain/comment';

const authorService: IAuthorService = new AuthorService();
const postService: IPostService = new PostService();
const commentService: ICommentService = new CommentService();

export const resolvers = {
  Query: {
    authors: () => {
      return authorService.getAll();
    },
    author: (_: unknown, { id }: { id: string }) => {
      return authorService.getAuthor(id);
    },
    posts: () => {
      return postService.getAll();
    },
    post: (_: unknown, { id }: { id: string }) => {
      return postService.getPost(id);
    }
  },
  Author: {
    fullName: (parent: Pick<Author, 'firstName' | 'lastName'>) => {
      return `${parent.firstName} ${parent.lastName}`
    },
    posts: (parent: Pick<Author, 'id'>) => {
      return postService.getAllPostsFromAuthor(parent.id);
    },
    comments: (parent: Pick<Author, 'id'>) => {
      return commentService.getAllFromAuthor(parent.id);
    }
  },
  Post: {
    author: (parent: Pick<Post, 'authorId'>) => {
      return authorService.getAuthor(parent.authorId);
    },
    comments: (parent: Pick<Post, 'id'>) => {
      return commentService.getAllFromPost(parent.id);
    }
  },
  Comment: {
    post: (parent: Pick<Comment, 'postId'>) => {
      return postService.getPost(parent.postId);
    },
    author: (parent: Pick<Comment, 'authorId'>) => {
      return authorService.getAuthor(parent.authorId);
    }
  }
};
