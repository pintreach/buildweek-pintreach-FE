import React from 'react';
import axios from 'axios';
import PintreachList from './PintreachList';
import './Pintreach.css';

class PintreachForm extends React.Component {
	constructor() {
		super();
		this.state = {
			articles: [],
			img: '',
			title: '',
			url: '',
			user_id: null
		};
	}
	componentDidMount() {
		axios
			.get('https://pintereach-buildweek.herokuapp.com/articles')
			.then((res) => {
				console.log(res.data);
				this.setState({ articles: res.data });
				console.log(this.state);
			})
			.catch((err) => {
				throw new Error(err);
			});
	}
	addArticle = (e) => {
		e.preventDefault();
		axios
			.post('https://pintereach-buildweek.herokuapp.com/articles', {
				title: this.state.title,
				img: this.state.img,
				user_id: 1,
				url: this.state.url
			})
			.then((res) => {
				console.log(res.status, res.data);
			})
			.catch((err) => {
				throw new Error(err);
			});
	};

	deleteArticle = (id, e) => {
		e.preventDefault();
		axios
			.delete(`https://pintereach-buildweek.herokuapp.com/articles ${id}`)
			.then((res) => console.log(res.status))
			.catch((err) => {
				console.log(err);
			});
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<div className="pintreachForm">
				<div className="Forms">
					<form onSubmit={this.addArticle}>
						<input
							type="text"
							name="img"
							value={this.state.img}
							onChange={this.handleChange}
							placeholder="img"
						/>
						<input
							type="text"
							name="title"
							value={this.state.title}
							onChange={this.handleChange}
							placeholder="title"
						/>
						<input
							type="text"
							name="url"
							value={this.state.url}
							onChange={this.handleChange}
							placeholder="url"
						/>
						<button onClick={this.addArticle}>Add new article</button>
					</form>
					<form onSubmit={this.deletePintreach}>
						<input
							type="text"
							value={this.state.articles.article}
							onChange={this.handleChange}
							placeholder="Delete Article"
						/>
						<button type="">Delete </button>
					</form>
				</div>
				<div className="pintreachList">
					{this.state.articles.map((article) => <PintreachList key={article.id} article={article} />)}
				</div>
			</div>
		);
	}
}

export default PintreachForm;
