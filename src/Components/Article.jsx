const Article = (props) => {
  return (
    <>
      <h4>{props.title}</h4>
      <em>{props.date}</em>
      <div>
        <small>{props.tags.join(", ")}</small>
      </div>
    </>
  );
};

export default Article;
