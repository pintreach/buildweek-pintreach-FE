import React from 'react';
import './Pintreach.css';

function Article(props) {
	const { title, url, id, type } = props.article;
	return (
		<div>
			<div className="article-wrap" key={id}>
				<img src={type} alt="Article" />
				<h3>{title}</h3>
				<a href={url}>Read</a>
				<p onClick={() => props.deleteArticle(id)}>Delete</p>
			</div>
		</div>
	);
}

export default Article;
