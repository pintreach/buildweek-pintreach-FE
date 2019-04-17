import React from "react";
import "./Pintreach.css";
function PintreachList(props) {
  const { title, url, img } = props.article;
  return (
    <div className="article-wrap">
      <h3>{title}</h3>
      <a href={url}>Read</a>
      <img src={img} alt="Article"/>
    </div>
  );
}

export default PintreachList;
