import dataJSON from "../Datas/dataJSON.json";
import Article from "../Components/Article";
import Search from "../Components/Search";
import { useEffect, useState } from "react";

const DataJSON = () => {
  const [posts, setPosts] = useState(dataJSON);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

  const onSearchChange = (value) => {
    const postsFilter = posts.filter((post) => {
      return post.title.toLowerCase().includes(value.toLowerCase());
    });
    const datas = value ? postsFilter : dataJSON;
    setPosts(datas);
    setTotalPosts(datas.length);
  };

  useEffect(() => {
    const apiData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      const respons = await response.json();
      return setExternalPosts(respons);
    };
    apiData();
  }, []);

  return (
    <>
      <h1>Daftar Article</h1>
      <label htmlFor="search-data">Pencarian Data: </label>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((data, index) => {
        return <Article {...data} key={index} />;
      })}
      <h3>External posts</h3>
      {externalPosts.map((externalPost, index) => {
        return <p key={externalPost.id}>{`${index}. ${externalPost.title}`}</p>;
      })}
    </>
  );
};

export default DataJSON;
