import React from "react";
import "./Pintreach.css";
function PintreachList(props) {
  const { title, url, img } = props.article;
  return (
    <div className="article-wrap">
      <img src={img} alt="Article"/>
      <h3>{title}</h3>
      <a href={url}>Read</a>
      <button onClick={props.deleteArticles}>Delete</button>
    </div>
  );
}

export default PintreachList;