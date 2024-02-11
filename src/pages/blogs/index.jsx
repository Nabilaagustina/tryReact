import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const posts = useLoaderData();

  return (
    <>
      <h3>External posts</h3>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <Link to={`/blog/${post.id}`}>{`${index}. ${post.title}`}</Link>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
