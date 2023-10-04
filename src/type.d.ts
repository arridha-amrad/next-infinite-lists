type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

type PostResponse = {
  posts: Post[]
  total: number;
  skip: number;
  limit: number;
}