import dataJSON from "../Datas/dataJSON.json";
import Article from "../Components/Article";
import Search from "../Components/Search";
import { useState } from "react";

const DataJSON = () => {
  const [posts, setPosts] = useState(dataJSON);

  const onSearchChange = (value) => {
    const postsFilter = posts.filter((post) => {
      return post.title.toLowerCase().includes(value.toLowerCase());
    });
    const datas = value ? postsFilter : dataJSON;
    setPosts(datas);
  };

  return (
    <>
      <h1>Daftar Article</h1>
      <label htmlFor="search-data">Pencarian Data: </label>
      <Search onSearchChange={onSearchChange} />
      {posts.map((data, index) => {
        return <Article {...data} key={index} />;
      })}
    </>
  );
};

export default DataJSON;
