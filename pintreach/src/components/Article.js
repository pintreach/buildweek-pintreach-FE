import React from "react";
import "./Pintreach.css";

function Article(props) {
  const { title, url, img, id } = props.article;
  return (
    <div className="article-wrap" key={id}>
      <img src={img} alt="Article"/>
      <h3>{title}</h3>
      <a href={url}>Read</a>
      <p onClick={()=> props.deleteArticle(id)}>Delete</p>
    </div>
  );
}

export default Article;