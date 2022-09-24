import { Post } from './post';

export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  posts?: Array<Post>;
  comments?: Array<Comment>;
}
