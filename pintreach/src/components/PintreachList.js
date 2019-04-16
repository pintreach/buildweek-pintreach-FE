import React from "react";

function PintreachList(props) {
  return (
    <ul>
      {props.articles.map(article => <h2 key={article.id}>{article.title}</h2>)}
      
      
      

    </ul>
  );
}

export default PintreachList;