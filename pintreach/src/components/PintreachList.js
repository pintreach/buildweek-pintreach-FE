import React from "react";

function PintreachList(props) {
  return (
    <ul>
      {props.articles.map(article => <h3 key={article.id}>{article.title}</h3>)}
      
      
      

    </ul>
  );
}

export default PintreachList;