"use client";

import { Fragment, useEffect, useState } from "react";
import PostItem from "./post-item";
import { fetchPosts } from "@/api/fetchPosts";
import { useLastElement } from "@/hooks/useLastElement";

export default function Posts({ response }: { response: PostResponse }) {
  const [data, setData] = useState(response);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const lastPostRef = useLastElement({
    callback: () => setPage((val) => val + 1),
    data: data.posts,
    loading,
    total: data.total,
  });

  useEffect(() => {
    const skip = page * 10;
    if (page <= 0) return;
    setLoading(true);
    fetchPosts(skip)
      .then((incomingData) => {
        setData((data) => ({
          ...incomingData,
          posts: [...data.posts, ...incomingData.posts],
        }));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  return (
    <>
      {data.posts.map((post, i) => (
        <Fragment key={post.id}>
          {i === data.posts.length - 1 ? (
            <PostItem ref={lastPostRef} post={post} />
          ) : (
            <PostItem post={post} />
          )}
          <hr />
        </Fragment>
      ))}
      {loading && (
        <div className="py-2 border-b">
          <p className="text-center">loading...</p>
        </div>
      )}
    </>
  );
}
