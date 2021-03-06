import React from 'react';
import './Pintreach.css';

function Article(props) {
	const { title, url, id, type } = props.article;
	return (
			<div className="article-wrap" key={id}>
				<img className="card-img" src={type} alt="Article" />
				<h3>{title}</h3>
				<a href={url}>Read</a>
				<p onClick={() => props.deleteArticle(id)}>Delete</p>
			</div>
	);
}

export default Article;
