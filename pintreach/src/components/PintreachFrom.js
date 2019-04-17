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
	addPintreach = (e) => {
		axios
			.post('https://pintereach-buildweek.herokuapp.com/articles', {
				title: this.state.title,
				img: this.state.img,
				user_id: null,
				url: this.state.url
			})
			.then((res) => {
				console.log(res.status);
				this.setState({ articles: res.data.article });
			})
			.catch((err) => {
				throw new Error(err);
			});
	};

	deletePintreach = (id) => {
		axios
			.delete(`https://pintereach-buildweek.herokuapp.com/articles ${id}`)
			.then((res) => {
				this.setState({
					deletePintreach: res.data.articles
				});
			})
			.catch((err) => {
				throw new Error(err);
			});
	};
	handleChanges = (e) => {
		this.setState({ [e.target.articles]: e.target.value });
	};

	addPintreach = (e) => {
		e.preventDefault();
		this.addPintreach(this.state.articles);
	};

	deletePintreach = (e) => {
		e.preventDefault();
		this.deletePintreach('');
	};

	render() {
		return (
			<div className="pintreachForm">
				<div className="Forms">
					<form onSubmit={this.addPintreach}>
						<input
							type="text"
							name="img"
							value={this.state.img}
							onChange={this.handleChanges}
							placeholder="img"
						/>
						<input
							type="text"
							name="title"
							value={this.state.title}
							onChange={this.handleChanges}
							placeholder="title"
						/>
						<input
							type="text"
							name="url"
							value={this.state.url}
							onChange={this.handleChanges}
							placeholder="url"
						/>
						<button type="">Add new article</button>
					</form>
					<form onSubmit={this.deletePintreach}>
						<input
							type="text"
							value={this.state.articles.article}
							onChange={this.handleChanges}
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
