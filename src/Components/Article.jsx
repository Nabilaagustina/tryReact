import { useContext } from "react";
import { GlobalContext } from "../context";

const Article = (props) => {
  const user = useContext(GlobalContext);
  return (
    <>
      <h4>{props.title}</h4>
      <em>{props.date}</em>
      <div>
        <small>{props.tags.join(", ")}</small>
      </div>
      <small>{user.username}</small>
    </>
  );
};

export default Article;
