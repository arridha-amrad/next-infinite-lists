import { fetchPosts } from "@/api/fetchPosts";
import Posts from "@/components/posts";

export default async function Page(){
  const data = await fetchPosts()
  return (
    <main className="container mx-auto max-w-md bg-slate-100 min-h-screen">
      <div className="sticky top-0 z-20 bg-neutral-100 bg-opacity-80 backdrop-blur">
      <h1 className="font-bold text-5xl py-5 text-center bg-gradient-to-r from-indigo-500 via-purple-500 bg-clip-text text-transparent to-pink-500 ">Infinite Posts</h1>
      </div>
      <Posts response={data} />
    </main>
  )
}