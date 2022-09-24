import { Post } from './post';
import { Author } from './author';

export interface Comment {
  id: string;
  body: string;
  postId: string;
  authorId: string;
}
