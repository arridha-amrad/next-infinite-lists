export const fetchPosts = async(skip?: number): Promise<PostResponse> => {
  const res = await fetch(`https://dummyjson.com/posts?skip=${skip ?? 0}&limit=10`)
  if(!res.ok) {
    throw new Error("fetching posts failure")
  }
  const data = await res.json()
  return data;
}