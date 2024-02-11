import { useLoaderData, useParams } from "react-router-dom";

const BlogDetail = () => {
  const post = useLoaderData();

  return (
    <>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </>
  );
};

export default BlogDetail;
