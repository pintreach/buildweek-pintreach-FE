import React from "react";
import "./Pintreach.css";
function PintreachList(props) {
  const { title, url, img, id } = props.article;
  return (
    <div className="article-wrap">
      <h3>{title}</h3>
      <a href={url}>Read</a>
      <img src={img} />
    </div>
  );
}

export default PintreachList;
