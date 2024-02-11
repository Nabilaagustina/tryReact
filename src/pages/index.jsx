import dataJSON from "../Datas/dataJSON.json";
import Article from "../Components/Article";
import Search from "../Components/Search";
import { useEffect, useState } from "react";

const DataJSON = () => {
  const [posts, setPosts] = useState(dataJSON);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    setPosts(dataJSON);
    setPosts((prevPosts) => {
      const postsFilter = prevPosts.filter((post) => {
        return post.title.toLowerCase().includes(value.toLowerCase());
      });
      const datas = value ? postsFilter : dataJSON;
      setTotalPosts(datas.length);
      return datas;
    });
  };

  return (
    <>
      <h1>Daftar Article</h1>
      <label htmlFor="search-data">Pencarian Data: </label>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((data, index) => {
        return <Article {...data} key={index} />;
      })}
    </>
  );
};

export default DataJSON;
