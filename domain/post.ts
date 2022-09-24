import { Comment } from './comment';
export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  comments?: Array<Comment>;
}
