export const posts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
};

export const postsDetail = ({ params }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
};
