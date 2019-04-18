import React from 'react';
import axios from 'axios';
import Article from './Article';
import './Pintreach.css';
import AddArticle from './AddArticle';

class ArticleList extends React.Component {
	constructor() {
		super();
		this.state = {
			articles: [],
			loggedIn: false,
			toggler: true
		};
	}
	componentDidMount() {
		const token = localStorage.getItem('authorization');
		if (localStorage.getItem('id')) {
			const id = localStorage.getItem('id');
			axios
				.get(`https://pintereach-buildweek.herokuapp.com/users/${id}/articles`, {
					headers: { authorization: token }
				})
				.then((res) => {
					console.log(res.data);
					this.setState({ articles: res.data });
					console.log(this.state);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
	deleteArticle = (id) => {
		const token = localStorage.getItem('authorization');
		axios
			.delete(`https://pintereach-buildweek.herokuapp.com/articles/${id}`, {
				headers: { authorization: token }
			})
			.then((res) => {
				console.log(res.status);
				this.setState({toggler: !this.state.toggler})
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div className="pintreachForm">
				<AddArticle />
				<div className="pintreachList">
					{this.state.articles.map((article) => (
						<Article deleteArticle={this.deleteArticle} key={article.id} article={article} />
					))}
				</div>
			</div>
		);
	}
}

export default ArticleList;
