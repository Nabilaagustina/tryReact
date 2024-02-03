import { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <>
      <input
        type="text"
        name="search-data"
        id="search-data"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSearchChange}>Cari</button>
      {search && (
        <p>Pencarian data anda adalah {search} terdapat data sebanyak 0</p>
      )}
    </>
  );
};

export default Search;
